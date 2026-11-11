import type { ReactNode } from 'react'

export function SectionIntro({
  kicker,
  title,
  children,
}: {
  kicker: string
  title: string
  children?: ReactNode
}) {
  return (
    <header className="max-w-[40rem]">
      <p className="text-[0.75rem] font-medium uppercase tracking-[0.16em] text-muted">{kicker}</p>
      <h2 className="mt-3 font-serif text-[clamp(2rem,3vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.015em]">
        {title}
      </h2>
      {children ? <div className="mt-4 text-base leading-relaxed text-muted">{children}</div> : null}
    </header>
  )
}
