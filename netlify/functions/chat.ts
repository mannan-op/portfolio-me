import type { Handler } from '@netlify/functions'
import { handleOptions, processChatRequest } from '../../shared/api-handler.js'
import { extractClientIp, getCorsHeaders, securityHeaders } from '../../shared/security.js'

export const handler: Handler = async (event) => {
  const headers = event.headers ?? {}
  const origin = headers.origin ?? headers.Origin ?? null
  const referer = headers.referer ?? headers.Referer ?? null
  const ip = extractClientIp(headers as Record<string, string | undefined>)
  const contentLength = parseInt(headers['content-length'] ?? '0', 10) || 0

  if (event.httpMethod === 'OPTIONS') {
    const res = handleOptions(origin, ip, referer)
    return { statusCode: res.statusCode, headers: res.headers, body: res.body }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        ...securityHeaders(),
        ...getCorsHeaders(origin),
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  const res = await processChatRequest({
    body: event.body ?? '{}',
    origin,
    referer,
    ip,
    contentLength,
  })

  return {
    statusCode: res.statusCode,
    headers: res.headers,
    body: res.body,
  }
}
