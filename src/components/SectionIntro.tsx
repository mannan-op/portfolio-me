import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function SectionIntro({
  kicker,
  title,
  children,
  tone = 'default',
}: {
  kicker: string
  title: string
  children?: ReactNode
  tone?: 'default' | 'invert'
}) {
  const invert = tone === 'invert'

  return (
    <header className="max-w-[44rem]">
      <p className={cn('text-sm font-semibold', invert ? 'text-[#9db0ff]' : 'text-accent')}>
        {kicker}
      </p>
      <h2
        className={cn(
          'mt-3 text-[clamp(2.1rem,4vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.045em]',
          invert ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={cn(
            'mt-4 max-w-[40rem] text-base leading-relaxed sm:text-lg',
            invert ? 'text-white/70' : 'text-muted',
          )}
        >
          {children}
        </div>
      ) : null}
    </header>
  )
}
