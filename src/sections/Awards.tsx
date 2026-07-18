import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { awards } from '@/data/experience'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function Awards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="awards" className="relative py-20 sm:py-28 md:py-36">
      <div className="section-divider" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading label="Credentials" title="Always learning" />

        <motion.ol
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="divide-y divide-white/[0.08] border-t border-white/[0.08]"
        >
          {awards.map((award, i) => (
            <motion.li
              key={award}
              variants={fadeUp}
              className="group row-inset flex gap-6 py-6 transition-colors duration-300 hover:bg-white/[0.02] md:gap-10 md:py-7"
            >
              <span className="shrink-0 font-mono text-sm tabular-nums text-primary/50 transition-colors group-hover:text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground md:text-[15px]">
                {award}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
