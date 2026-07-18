import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { skillGroups } from '@/data/skills'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-20 sm:py-28 md:py-36">
      <div className="section-divider" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          label="Stack"
          title="Tools of the trade"
          description="The technologies behind every project."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="divide-y divide-white/[0.08]"
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              className="group row-inset grid gap-3 py-6 transition-colors duration-300 first:pt-0 last:pb-0 hover:bg-white/[0.02] sm:gap-4 sm:py-7 md:grid-cols-[180px_1fr] md:gap-10 md:py-9 lg:grid-cols-[220px_1fr]"
            >
              <div className="flex items-baseline gap-3 md:flex-col md:gap-1">
                <span className="font-mono text-[11px] tabular-nums text-primary/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-xl">
                  {group.title}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-x-1 gap-y-1 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                {group.skills.map((skill, j) => (
                  <li key={skill} className="inline-flex items-center">
                    <span className="cursor-default transition-colors duration-200 hover:text-foreground">
                      {skill}
                    </span>
                    {j < group.skills.length - 1 && (
                      <span className="mx-2 text-white/15 select-none" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
