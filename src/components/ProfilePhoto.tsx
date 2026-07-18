import profilePhoto from '@/assets/profile.png'
import { cn } from '@/lib/utils'

interface ProfilePhotoProps {
  className?: string
}

export function ProfilePhoto({ className }: ProfilePhotoProps) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[260px] sm:max-w-[320px] lg:mx-0 lg:max-w-[400px]', className)}>
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <img
          src={profilePhoto}
          alt="Abdul Mannan — Full-Stack Developer"
          className="aspect-[4/5] w-full object-cover object-top"
        />
      </div>
    </div>
  )
}
