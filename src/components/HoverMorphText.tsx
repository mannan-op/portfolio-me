import { useCallback, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface TextVariant {
  text: string
  color: string
}

interface HoverMorphTextProps {
  variants: TextVariant[]
  className?: string
  as?: 'h1' | 'h2' | 'p' | 'span'
  cycleOnHover?: boolean
}

export function HoverMorphText({
  variants,
  className,
  as: Tag = 'span',
  cycleOnHover = true,
}: HoverMorphTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const current = variants[activeIndex]

  const startCycle = useCallback(() => {
    setHovered(true)
    if (!cycleOnHover || variants.length <= 1) return
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % variants.length)
    }, 1100)
  }, [cycleOnHover, variants.length])

  const stopCycle = useCallback(() => {
    setHovered(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
    setActiveIndex(0)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <Tag className={cn('inline-block', className)}>
      <span
        ref={containerRef}
        className="relative inline-block cursor-default select-none transition-colors duration-500"
        onMouseEnter={startCycle}
        onMouseLeave={stopCycle}
        onMouseMove={handleMouseMove}
        style={{ color: hovered ? current.color : undefined }}
      >
        <span
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-sm opacity-0 transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
          aria-hidden="true"
        >
          <span
            className="absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
            style={{
              left: cursor.x,
              top: cursor.y,
              background: `radial-gradient(circle, ${current.color}40, transparent 70%)`,
            }}
          />
        </span>

        <AnimatePresence mode="wait">
          <motion.span
            key={current.text}
            initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block"
          >
            {current.text.split('').map((char, i) => (
              <motion.span
                key={`${current.text}-${i}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.015, duration: 0.25 }}
                className="inline-block"
                style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>

        <motion.span
          className="absolute -bottom-1 left-0 h-[2px] rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            originX: 0,
            width: '100%',
            background: `linear-gradient(90deg, ${current.color}, transparent)`,
          }}
        />
      </span>
    </Tag>
  )
}
