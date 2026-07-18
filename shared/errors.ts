export class ChatHttpError extends Error {
  statusCode: number
  code?: string

  constructor(message: string, statusCode: number, code?: string) {
    super(message)
    this.name = 'ChatHttpError'
    this.statusCode = statusCode
    this.code = code
  }
}

export const PUBLIC_ERRORS = {
  INVALID_REQUEST: 'Invalid request. Please check your message and try again.',
  RATE_LIMITED: 'Too many messages. Please wait a minute and try again.',
  FORBIDDEN: 'Request not allowed from this origin.',
  SERVER_ERROR: 'Something went wrong. Please try again later.',
  SERVICE_UNAVAILABLE: 'Chat is temporarily unavailable.',
} as const
