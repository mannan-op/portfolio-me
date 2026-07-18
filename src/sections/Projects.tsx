import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="relative py-20 sm:py-28 md:py-36">
      <div className="section-divider" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          label="Selected Work"
          title="Projects that ship"
          description="Real systems — tap or hover a row to read more."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="border-t border-white/[0.08]"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={fadeUp}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
