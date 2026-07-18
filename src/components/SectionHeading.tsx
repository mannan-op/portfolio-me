import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ label, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 sm:mb-16 md:mb-20', className)}>
      <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-primary sm:mb-4 sm:text-[11px] sm:tracking-[0.3em]">
        — {label}
      </p>
      <h2 className="font-display max-w-3xl text-3xl font-extrabold tracking-tighter text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
