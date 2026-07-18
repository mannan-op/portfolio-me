import { motion } from 'framer-motion'

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
