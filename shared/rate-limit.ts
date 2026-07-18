import { ChatHttpError, PUBLIC_ERRORS } from './errors.js'

interface RateLimitEntry {
  minute: { count: number; resetAt: number }
  hour: { count: number; resetAt: number }
}

const store = new Map<string, RateLimitEntry>()

const LIMITS = {
  perMinute: 10,
  perHour: 60,
}

function getEntry(ip: string): RateLimitEntry {
  const now = Date.now()
  let entry = store.get(ip)

  if (!entry) {
    entry = {
      minute: { count: 0, resetAt: now + 60_000 },
      hour: { count: 0, resetAt: now + 3_600_000 },
    }
    store.set(ip, entry)
  }

  if (now > entry.minute.resetAt) {
    entry.minute = { count: 0, resetAt: now + 60_000 }
  }
  if (now > entry.hour.resetAt) {
    entry.hour = { count: 0, resetAt: now + 3_600_000 }
  }

  return entry
}

export function checkRateLimit(ip: string): void {
  const key = ip === 'unknown' ? '__unknown__' : ip

  const entry = getEntry(key)

  if (entry.minute.count >= LIMITS.perMinute || entry.hour.count >= LIMITS.perHour) {
    throw new ChatHttpError(PUBLIC_ERRORS.RATE_LIMITED, 429, 'RATE_LIMITED')
  }

  entry.minute.count++
  entry.hour.count++

  if (store.size > 10_000) {
    const now = Date.now()
    for (const [key, val] of store) {
      if (now > val.hour.resetAt) store.delete(key)
    }
  }
}

export function getRateLimitHeaders(ip: string): Record<string, string> {
  const entry = store.get(ip)
  if (!entry) {
    return {
      'X-RateLimit-Limit-Minute': String(LIMITS.perMinute),
      'X-RateLimit-Remaining-Minute': String(LIMITS.perMinute),
    }
  }

  return {
    'X-RateLimit-Limit-Minute': String(LIMITS.perMinute),
    'X-RateLimit-Remaining-Minute': String(
      Math.max(0, LIMITS.perMinute - entry.minute.count),
    ),
  }
}
