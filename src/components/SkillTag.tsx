import { cn } from '@/lib/utils'

interface SkillTagProps {
  label: string
  className?: string
}

export function SkillTag({ label, className }: SkillTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg border border-white/[0.06] bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary',
        className,
      )}
    >
      {label}
    </span>
  )
}
