import { ChatHttpError, PUBLIC_ERRORS } from './errors.js'

const MAX_MESSAGE_LENGTH = 500
const MAX_HISTORY_LENGTH = 6
const MAX_HISTORY_MSG_LENGTH = 400
const MAX_BODY_BYTES = 8_192

const INJECTION_PATTERNS = [
  /ignore (all )?(previous|prior|above) instructions/i,
  /disregard (all )?(previous|prior|above)/i,
  /forget (everything|all|your instructions)/i,
  /you are now (a|an)/i,
  /act as (a|an)/i,
  /pretend (you are|to be)/i,
  /system prompt/i,
  /jailbreak/i,
  /do anything now/i,
  /reveal (your|the) (system|hidden|secret)/i,
  /override (your|the) (rules|instructions)/i,
]

const DEFAULT_ORIGINS = [
  'https://abdulmannan.me',
  'https://www.abdulmannan.me',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:8888',
  'http://127.0.0.1:8888',
]

export function getAllowedOrigins(): string[] {
  const env = process.env.CHAT_ALLOWED_ORIGINS
  if (!env) return DEFAULT_ORIGINS
  return env.split(',').map((o) => o.trim()).filter(Boolean)
}

export function validateOrigin(
  origin: string | null | undefined,
  referer?: string | null,
): void {
  const allowed = getAllowedOrigins()

  if (origin) {
    if (!allowed.includes(origin)) {
      throw new ChatHttpError(PUBLIC_ERRORS.FORBIDDEN, 403, 'FORBIDDEN_ORIGIN')
    }
    return
  }

  if (referer) {
    try {
      const refOrigin = new URL(referer).origin
      if (!allowed.includes(refOrigin)) {
        throw new ChatHttpError(PUBLIC_ERRORS.FORBIDDEN, 403, 'FORBIDDEN_REFERER')
      }
      return
    } catch (err) {
      if (err instanceof ChatHttpError) throw err
      throw new ChatHttpError(PUBLIC_ERRORS.FORBIDDEN, 403, 'INVALID_REFERER')
    }
  }

  if (process.env.NETLIFY === 'true') {
    throw new ChatHttpError(PUBLIC_ERRORS.FORBIDDEN, 403, 'MISSING_ORIGIN')
  }
}

export function getCorsHeaders(origin: string | null | undefined): Record<string, string> {
  const allowed = getAllowedOrigins()
  const headers: Record<string, string> = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    Vary: 'Origin',
  }

  if (origin && allowed.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin
  }

  return headers
}

export function securityHeaders(): Record<string, string> {
  return {
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'no-store',
  }
}

export function validateBodySize(contentLength: number, actualBytes?: number): void {
  const size = Math.max(contentLength, actualBytes ?? 0)
  if (size > MAX_BODY_BYTES) {
    throw new ChatHttpError(PUBLIC_ERRORS.INVALID_REQUEST, 413, 'BODY_TOO_LARGE')
  }
}

export function sanitizeText(text: string, maxLen: number): string {
  return text
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .replace(/<[^>]*>/g, '')
    .trim()
    .slice(0, maxLen)
}

export function detectPromptInjection(text: string): boolean {
  return INJECTION_PATTERNS.some((p) => p.test(text))
}

export function validateMessage(message: unknown): string {
  if (typeof message !== 'string') {
    throw new ChatHttpError(PUBLIC_ERRORS.INVALID_REQUEST, 400, 'INVALID_MESSAGE')
  }

  const cleaned = sanitizeText(message, MAX_MESSAGE_LENGTH)

  if (cleaned.length < 2) {
    throw new ChatHttpError(PUBLIC_ERRORS.INVALID_REQUEST, 400, 'MESSAGE_TOO_SHORT')
  }

  if (detectPromptInjection(cleaned)) {
    throw new ChatHttpError(PUBLIC_ERRORS.INVALID_REQUEST, 400, 'INJECTION_DETECTED')
  }

  return cleaned
}

/** Client history — user turns only; assistant messages are never trusted from the client. */
export interface SanitizedUserMessage {
  role: 'user'
  content: string
}

export function validateHistory(history: unknown): SanitizedUserMessage[] {
  if (history === undefined || history === null) return []
  if (!Array.isArray(history)) {
    throw new ChatHttpError(PUBLIC_ERRORS.INVALID_REQUEST, 400, 'INVALID_HISTORY')
  }

  const userMessages: SanitizedUserMessage[] = []

  for (const item of history) {
    if (!item || typeof item !== 'object') {
      throw new ChatHttpError(PUBLIC_ERRORS.INVALID_REQUEST, 400, 'INVALID_HISTORY_ITEM')
    }

    const { role, content } = item as { role?: unknown; content?: unknown }

    // Strip assistant entries — only the server generates assistant replies
    if (role !== 'user') continue

    if (typeof content !== 'string') {
      throw new ChatHttpError(PUBLIC_ERRORS.INVALID_REQUEST, 400, 'INVALID_HISTORY_CONTENT')
    }

    const cleaned = sanitizeText(content, MAX_HISTORY_MSG_LENGTH)
    if (cleaned.length === 0) continue

    if (detectPromptInjection(cleaned)) {
      throw new ChatHttpError(PUBLIC_ERRORS.INVALID_REQUEST, 400, 'INJECTION_IN_HISTORY')
    }

    userMessages.push({ role: 'user', content: cleaned })
  }

  if (userMessages.length > MAX_HISTORY_LENGTH) {
    throw new ChatHttpError(PUBLIC_ERRORS.INVALID_REQUEST, 400, 'HISTORY_TOO_LONG')
  }

  return userMessages
}

export function extractClientIp(headers: Record<string, string | undefined>): string {
  return (
    headers['x-nf-client-connection-ip'] ??
    headers['client-ip'] ??
    headers['x-forwarded-for']?.split(',')[0]?.trim() ??
    'unknown'
  )
}
