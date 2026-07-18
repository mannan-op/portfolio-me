import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Loader2, MessageCircle, Send, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  ChatApiError,
  sendChatMessage,
  SUGGESTED_QUESTIONS,
  type ChatMessage,
} from '@/lib/chat-api'
import { ChatMessageContent } from '@/components/ChatMessageContent'

const WELCOME: ChatMessage = {
  role: 'assistant',
  content:
    "Hi! I'm Abdul's portfolio assistant. Ask me about his projects, skills, experience, or how to get in touch.",
}

export function PortfolioChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      inputRef.current?.focus()
    }
  }, [open, messages, loading])

  const send = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    setError(null)
    setInput('')
    const userMsg: ChatMessage = { role: 'user', content: trimmed }
    setMessages((prev) => [...prev, userMsg])
    setLoading(true)

    try {
      const prior = messages.filter((m) => m !== WELCOME)
      const { reply } = await sendChatMessage(trimmed, prior)
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      if (err instanceof ChatApiError && err.status === 429) {
        setError('Too many messages — please wait a minute before trying again.')
      } else {
        setError(err instanceof Error ? err.message : 'Something went wrong')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    send(input)
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-4 z-50 flex w-[calc(100vw-2rem)] max-w-md flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/95 shadow-2xl shadow-black/40 backdrop-blur-xl sm:bottom-24 sm:right-6"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Bot size={16} className="text-primary" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Portfolio Assistant</p>
                  <p className="text-[10px] text-muted-foreground">RAG · Portfolio only</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex max-h-[min(420px,50vh)] flex-1 flex-col overflow-y-auto px-4 py-4">
              {messages.map((msg, i) => (
                <div
                  key={`${msg.role}-${i}`}
                  className={cn(
                    'mb-3 max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
                    msg.role === 'user'
                      ? 'ml-auto bg-primary text-primary-foreground'
                      : 'mr-auto border border-white/[0.06] bg-background/60 text-foreground',
                  )}
                >
                  {msg.role === 'user' ? (
                    msg.content
                  ) : (
                    <ChatMessageContent content={msg.content} />
                  )}
                </div>
              ))}

              {loading && (
                <div className="mb-3 mr-auto flex items-center gap-2 rounded-2xl border border-white/[0.06] bg-background/60 px-3.5 py-2.5 text-sm text-muted-foreground">
                  <Loader2 size={14} className="animate-spin text-primary" />
                  Thinking…
                </div>
              )}

              {error && (
                <p className="mb-2 text-xs text-red-400">{error}</p>
              )}

              {messages.length === 1 && !loading && (
                <div className="mt-1 flex flex-wrap gap-2">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="cursor-pointer rounded-full border border-white/10 bg-background/40 px-3 py-1.5 text-left text-[11px] text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-white/[0.08] px-3 py-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills…"
                disabled={loading}
                maxLength={500}
                className="min-w-0 flex-1 rounded-xl border border-white/[0.06] bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary/40 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 sm:bottom-6 sm:right-6"
        aria-label={open ? 'Close portfolio chat' : 'Open portfolio chat'}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </>
  )
}
