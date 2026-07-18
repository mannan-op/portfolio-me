import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, GitBranch, Mail, Phone } from 'lucide-react'
import { HoverMorphText } from '@/components/HoverMorphText'
import { ProfilePhoto } from '@/components/ProfilePhoto'
import { profile } from '@/data/profile'
import { fadeUp } from '@/lib/animations'

const Scene3D = lazy(() =>
  import('@/components/Scene3D').then((m) => ({ default: m.Scene3D })),
)

const nameVariants = [
  { text: 'Abdul Mannan', color: '#f8fafc' },
  { text: 'Full-Stack Dev', color: '#22c55e' },
  { text: 'AI Engineer', color: '#f59e0b' },
  { text: 'Problem Solver', color: '#a78bfa' },
]

const roleVariants = [
  { text: profile.title, color: '#22c55e' },
  { text: 'React · Next.js · Node.js', color: '#f59e0b' },
  { text: 'Building AI-powered products', color: '#a78bfa' },
  { text: '2+ years shipping to production', color: '#38bdf8' },
]

const taglineVariants = [
  { text: profile.tagline, color: '#8896ad' },
  {
    text: 'From polished UIs to secure APIs — I ship end-to-end.',
    color: '#22c55e',
  },
  {
    text: 'LLM streaming, RAG pipelines, and agentic workflows included.',
    color: '#f59e0b',
  },
  {
    text: 'Performance, security, and craft — never an afterthought.',
    color: '#a78bfa',
  },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24"
    >
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(34,197,94,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_80%,rgba(245,158,11,0.05),transparent)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div initial="hidden" animate="visible" className="order-2 lg:order-1">
          <motion.div custom={0} variants={fadeUp} className="mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-primary backdrop-blur-sm sm:px-4 sm:text-xs">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Available for work
            </span>
          </motion.div>

          <motion.div custom={1} variants={fadeUp}>
            <h1 className="font-display text-[clamp(2rem,8vw,5.5rem)] font-extrabold leading-[1.05] tracking-tighter">
              <HoverMorphText variants={nameVariants} as="span" />
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUp} className="mt-3 sm:mt-4">
            <p className="text-lg font-semibold sm:text-2xl md:text-3xl">
              <HoverMorphText variants={roleVariants} as="span" />
            </p>
          </motion.div>

          <motion.p custom={3} variants={fadeUp} className="mt-2 text-sm text-muted-foreground sm:text-base">
            {profile.subtitle}
          </motion.p>

          <motion.div custom={4} variants={fadeUp} className="mt-8 max-w-xl">
            <p className="text-base leading-relaxed sm:text-lg">
              <HoverMorphText variants={taglineVariants} as="span" />
            </p>
          </motion.div>

          <motion.div custom={5} variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[0.97] hover:shadow-primary/30 active:scale-[0.97] sm:px-7 sm:py-3.5"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 active:scale-[0.97] sm:px-7 sm:py-3.5"
            >
              Contact
            </a>
            <a
              href={profile.cvUrl}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 active:scale-[0.97] sm:px-7 sm:py-3.5"
            >
              <Download size={16} />
              CV
            </a>
          </motion.div>

          <motion.div
            custom={6}
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 text-xs text-muted-foreground sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3 sm:text-sm"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 break-all transition-colors duration-200 hover:text-primary sm:break-normal"
            >
              <GitBranch size={16} className="shrink-0" />
              github.com/mannan-op
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex cursor-pointer items-center gap-2 break-all transition-colors duration-200 hover:text-primary sm:break-normal"
            >
              <Mail size={16} className="shrink-0" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="inline-flex cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-primary"
            >
              <Phone size={16} className="shrink-0" />
              {profile.phone}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <ProfilePhoto />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Scroll
          </span>
          <div className="flex h-12 w-6 items-start justify-center rounded-full border border-white/10 p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="h-2 w-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
