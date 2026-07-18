export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface ChatResponse {
  reply: string
  sources: string[]
}

export class ChatApiError extends Error {
  status: number
  code?: string

  constructor(message: string, status: number, code?: string) {
    super(message)
    this.name = 'ChatApiError'
    this.status = status
    this.code = code
  }
}

export async function sendChatMessage(
  message: string,
  history: ChatMessage[],
): Promise<ChatResponse> {
  let res: Response
  try {
    res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history }),
    })
  } catch {
    throw new ChatApiError('Network error. Check your connection and try again.', 0)
  }

  let data: { error?: string; code?: string; reply?: string; sources?: string[] }
  try {
    data = await res.json()
  } catch {
    throw new ChatApiError('Unexpected server response. Please try again.', res.status)
  }

  if (!res.ok) {
    throw new ChatApiError(
      data.error ?? 'Failed to send message',
      res.status,
      data.code,
    )
  }

  return data as ChatResponse
}

export const SUGGESTED_QUESTIONS = [
  'What projects has Abdul built?',
  'What is his tech stack?',
  'How can I contact him?',
  'Tell me about his experience',
] as const
