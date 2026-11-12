import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function BrowserFrame({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_60px_-36px_rgba(14,16,20,0.55)]',
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-canvas px-3 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-[#d5d8e0]" />
          <span className="size-2 rounded-full bg-[#d5d8e0]" />
          <span className="size-2 rounded-full bg-[#d5d8e0]" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-md bg-white px-2.5 py-1 text-center text-[11px] font-medium text-muted ring-1 ring-line">
          {label}
        </span>
      </div>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  )
}

export function ShotCover({
  title,
  detail,
  className,
  large = false,
}: {
  title: string
  detail?: string
  className?: string
  large?: boolean
}) {
  return (
    // TODO: replace with a real screenshot. Do not invent a product mockup.
    <div className={cn('flex h-full flex-col justify-between bg-canvas p-5 sm:p-6', className)}>
      <p className="text-xs font-medium text-muted">Screenshot to be added</p>
      <div>
        <p
          className={cn(
            'font-semibold tracking-[-0.035em] text-ink',
            large ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl',
          )}
        >
          {title}
        </p>
        {detail ? (
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{detail}</p>
        ) : null}
      </div>
    </div>
  )
}
