import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Wrap({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[68rem] px-5 sm:px-8', className)}>{children}</div>
  )
}
