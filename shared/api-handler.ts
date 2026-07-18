import { handleChat } from './chat-handler.js'
import { ChatHttpError, PUBLIC_ERRORS } from './errors.js'
import { checkRateLimit, getRateLimitHeaders } from './rate-limit.js'
import {
  getCorsHeaders,
  securityHeaders,
  validateBodySize,
  validateHistory,
  validateMessage,
  validateOrigin,
} from './security.js'

export interface ChatRequestContext {
  body: string
  origin: string | null
  referer?: string | null
  ip: string
  contentLength: number
}

export interface ChatApiResponse {
  statusCode: number
  headers: Record<string, string>
  body: string
}

function buildHeaders(
  origin: string | null,
  ip: string,
  extra: Record<string, string> = {},
): Record<string, string> {
  return {
    ...securityHeaders(),
    ...getCorsHeaders(origin),
    ...getRateLimitHeaders(ip),
    ...extra,
  }
}

function errorResponse(
  statusCode: number,
  message: string,
  origin: string | null,
  ip: string,
  code?: string,
): ChatApiResponse {
  return {
    statusCode,
    headers: buildHeaders(origin, ip),
    body: JSON.stringify({ error: message, code }),
  }
}

export async function processChatRequest(ctx: ChatRequestContext): Promise<ChatApiResponse> {
  const { origin, ip, contentLength } = ctx
  const referer = ctx.referer ?? null

  try {
    validateOrigin(origin, referer)
    validateBodySize(contentLength, Buffer.byteLength(ctx.body ?? '', 'utf8'))
    checkRateLimit(ip)

    let parsed: unknown
    try {
      parsed = JSON.parse(ctx.body || '{}')
    } catch {
      throw new ChatHttpError(PUBLIC_ERRORS.INVALID_REQUEST, 400, 'INVALID_JSON')
    }

    if (!parsed || typeof parsed !== 'object') {
      throw new ChatHttpError(PUBLIC_ERRORS.INVALID_REQUEST, 400, 'INVALID_BODY')
    }

    const { message, history } = parsed as { message?: unknown; history?: unknown }
    const sanitizedMessage = validateMessage(message)
    const sanitizedHistory = validateHistory(history)

    const result = await handleChat({
      message: sanitizedMessage,
      history: sanitizedHistory,
    })

    return {
      statusCode: 200,
      headers: buildHeaders(origin, ip),
      body: JSON.stringify(result),
    }
  } catch (err) {
    if (err instanceof ChatHttpError) {
      return errorResponse(err.statusCode, err.message, origin, ip, err.code)
    }

    console.error('[chat-api]', err instanceof Error ? err.message : err)

    return errorResponse(
      500,
      PUBLIC_ERRORS.SERVER_ERROR,
      origin,
      ip,
      'INTERNAL_ERROR',
    )
  }
}

export function handleOptions(
  origin: string | null,
  ip: string,
  referer?: string | null,
): ChatApiResponse {
  try {
    validateOrigin(origin, referer)
    return {
      statusCode: 204,
      headers: buildHeaders(origin, ip),
      body: '',
    }
  } catch {
    return errorResponse(403, PUBLIC_ERRORS.FORBIDDEN, origin, ip, 'FORBIDDEN_ORIGIN')
  }
}
