import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap } from 'lucide-react'
import profilePhoto from '@/assets/profile.png'
import { SectionHeading } from '@/components/SectionHeading'
import { profile } from '@/data/profile'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-20 sm:py-28 md:py-36">
      <div className="section-divider" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading label="About" title="Code, craft, and curiosity" />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-12"
        >
          <motion.div variants={fadeUp} className="mx-auto w-full max-w-sm md:mx-0 md:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
              <img
                src={profilePhoto}
                alt="Abdul Mannan"
                className="aspect-square w-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-8">
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:space-y-5 sm:text-base md:text-lg">
              {profile.about.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="border-t border-white/[0.08] pt-8">
              <div className="mb-4 flex items-center gap-3 sm:mb-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-11 sm:w-11 sm:rounded-2xl">
                  <GraduationCap className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground sm:text-base">
                    {profile.education.degree}
                  </p>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {profile.education.school}
                  </p>
                </div>
              </div>
              <p className="mb-4 font-mono text-xs text-primary sm:mb-6">{profile.education.period}</p>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Coursework
              </p>
              <ul className="flex flex-wrap gap-2">
                {profile.education.coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-lg border border-white/[0.06] bg-background/50 px-2.5 py-1 text-[11px] text-foreground/70 sm:rounded-xl sm:px-3 sm:py-1.5 sm:text-xs"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
