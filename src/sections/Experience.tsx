import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { experience } from '@/data/experience'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative py-20 sm:py-28 md:py-36">
      <div className="section-divider" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading label="Experience" title="Where I've shipped" />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="divide-y divide-white/[0.08]"
        >
          {experience.map((job) => (
            <motion.div
              key={`${job.role}-${job.period}`}
              variants={fadeUp}
              className="relative row-inset py-10 first:pt-0 last:pb-0 sm:py-12 md:py-14"
            >
              <div className="grid gap-4 sm:gap-6 md:grid-cols-[140px_1fr] md:gap-12 lg:grid-cols-[180px_1fr]">
                <div className="relative md:pt-1">
                  <p className="font-mono text-xs tabular-nums text-primary sm:text-sm">
                    {job.period}
                  </p>
                  <div className="absolute top-8 bottom-0 left-[3px] hidden w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent md:block" />
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
                    {job.role}
                  </h3>
                  {job.engagement && (
                    <p className="mt-1.5 text-sm text-muted-foreground">{job.engagement}</p>
                  )}
                  {job.company && (
                    <p className="mt-1 text-sm text-primary sm:text-base">{job.company}</p>
                  )}

                  <ul className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet.slice(0, 50)}
                        className="relative pl-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]"
                      >
                        <span className="absolute left-0 top-[0.6em] h-px w-2.5 bg-primary/60" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
