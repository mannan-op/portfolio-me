import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Project } from '@/data/projects'

function usePrefersHover() {
  const [prefersHover, setPrefersHover] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setPrefersHover(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return prefersHover
}

export interface ProjectCardProps {
  project: Project
  index: number
  className?: string
}

export function ProjectCard({ className, project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)
  const prefersHover = usePrefersHover()
  const { title, hook, description, stack, featured, link = '#' } = project
  const num = String(index + 1).padStart(2, '0')
  const isOpen = expanded || (prefersHover && hovered)

  const toggle = () => {
    setExpanded((v) => !v)
    setHovered(false)
  }

  return (
    <motion.article
      onMouseEnter={() => prefersHover && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'group relative border-b border-white/[0.08] transition-colors duration-300 last:border-b-0 hover:bg-white/[0.02]',
        className,
      )}
    >
      <motion.div
        className="absolute left-0 top-0 h-full w-[2px] bg-primary"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ originY: 0 }}
      />

      <div className={cn('row-inset py-6 sm:py-8 md:py-10', featured && 'md:py-12')}>
        <div className="flex items-start gap-3 sm:gap-6 md:gap-10">
          <span
            className={cn(
              'shrink-0 font-display font-black tabular-nums leading-none text-white/[0.08] transition-colors duration-300 group-hover:text-primary/30',
              featured ? 'text-3xl sm:text-5xl md:text-6xl' : 'text-2xl sm:text-4xl md:text-5xl',
            )}
          >
            {num}
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <button
                type="button"
                onClick={toggle}
                className="min-w-0 flex-1 cursor-pointer text-left"
                aria-expanded={isOpen}
              >
                <div className="mb-1.5 flex flex-wrap items-center gap-2 sm:mb-2 sm:gap-3">
                  <h3
                    className={cn(
                      'font-display font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary',
                      featured
                        ? 'text-lg sm:text-2xl md:text-3xl lg:text-4xl'
                        : 'text-base sm:text-xl md:text-2xl',
                    )}
                  >
                    {title}
                  </h3>
                  {featured && (
                    <span className="font-mono text-[9px] uppercase tracking-widest text-primary sm:text-[10px]">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-xs font-medium text-primary/70 sm:text-sm md:text-base">{hook}</p>
              </button>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={toggle}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary sm:hidden"
                  aria-label={expanded ? 'Collapse project' : 'Expand project'}
                >
                  <ChevronDown
                    className={cn('h-4 w-4 transition-transform duration-300', expanded && 'rotate-180')}
                  />
                </button>
                <a
                  href={link}
                  className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary sm:flex"
                  aria-label={`View ${title}`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 sm:pt-5">
                    <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                      {description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 sm:mt-5">
                      {stack.map((tech, j) => (
                        <span key={tech} className="inline-flex items-center">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/80 sm:text-[10px]">
                            {tech}
                          </span>
                          {j < stack.length - 1 && (
                            <span className="mx-1.5 text-white/10 select-none sm:mx-2">/</span>
                          )}
                        </span>
                      ))}
                    </div>

                    <a
                      href={link}
                      className="mt-4 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80 sm:mt-5"
                    >
                      View project
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
