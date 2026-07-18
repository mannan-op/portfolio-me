import { cn } from '@/lib/utils'

type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'heading'; text: string }

function parseBlocks(content: string): Block[] {
  const sections = content.split(/\n\n+/).filter((s) => s.trim())
  const blocks: Block[] = []

  for (const section of sections) {
    const lines = section.split('\n').map((l) => l.trim()).filter(Boolean)
    if (lines.length === 0) continue

    let i = 0
    while (i < lines.length) {
      const line = lines[i]

      if (/^#{1,3}\s/.test(line)) {
        blocks.push({ type: 'heading', text: line.replace(/^#{1,3}\s+/, '') })
        i++
        continue
      }

      if (/^\*\*[^*]+\*\*:?\s*$/.test(line)) {
        blocks.push({ type: 'heading', text: line.replace(/\*\*/g, '').replace(/:$/, '') })
        i++
        continue
      }

      if (/^[-*•]\s+/.test(line)) {
        const items: string[] = []
        while (i < lines.length && /^[-*•]\s+/.test(lines[i])) {
          items.push(lines[i].replace(/^[-*•]\s+/, ''))
          i++
        }
        blocks.push({ type: 'list', items })
        continue
      }

      blocks.push({ type: 'paragraph', text: line })
      i++
    }
  }

  return blocks
}

function renderInline(text: string, keyPrefix: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s,)]+)/g)

  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`

    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return (
        <strong key={key} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      return (
        <a
          key={key}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:opacity-80"
        >
          {linkMatch[1]}
        </a>
      )
    }

    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={key}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-primary underline underline-offset-2 hover:opacity-80"
        >
          {part.replace(/^https?:\/\//, '')}
        </a>
      )
    }

    return <span key={key}>{part}</span>
  })
}

interface ChatMessageContentProps {
  content: string
  className?: string
}

export function ChatMessageContent({ content, className }: ChatMessageContentProps) {
  const blocks = parseBlocks(content)

  return (
    <div className={cn('space-y-2', className)}>
      {blocks.map((block, i) => {
        if (block.type === 'heading') {
          return (
            <p key={i} className="text-xs font-semibold uppercase tracking-wide text-primary/90">
              {renderInline(block.text, `h-${i}`)}
            </p>
          )
        }

        if (block.type === 'list') {
          return (
            <ul key={i} className="ml-1 space-y-1">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-2 pl-0.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                  <span className="min-w-0 flex-1">{renderInline(item, `li-${i}-${j}`)}</span>
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p key={i} className="leading-relaxed">
            {renderInline(block.text, `p-${i}`)}
          </p>
        )
      })}
    </div>
  )
}
