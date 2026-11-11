import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { navItems } from '@/data/profile'
import { Wrap } from '@/components/Wrap'

const sectionIds = navItems.map((item) => item.id)

export function SiteHeader() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0.15, 0.4, 0.7] },
    )

    for (const element of elements) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Wrap className="flex items-center justify-between gap-4 py-4">
        <a href="#top" className="font-serif text-[1.35rem] leading-none tracking-[-0.02em]">
          Abdul Mannan
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? 'true' : undefined}
              className={cn(
                'text-[0.9375rem] text-ink transition-colors duration-150 hover:text-accent',
                active === item.id && 'text-accent',
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-solid px-3.5 py-2 text-sm">
          Book a call
        </a>
      </Wrap>
      <nav className="border-t border-line lg:hidden" aria-label="Sections">
        <Wrap className="flex gap-6 py-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? 'true' : undefined}
              className={cn(
                'text-sm text-ink transition-colors duration-150 hover:text-accent',
                active === item.id && 'text-accent',
              )}
            >
              {item.name}
            </a>
          ))}
        </Wrap>
      </nav>
    </header>
  )
}
