import { profile } from '@/data/profile'
import { Wrap } from '@/components/Wrap'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white/65">
      <Wrap className="flex flex-col gap-3 py-8 text-sm sm:flex-row sm:items-baseline sm:justify-between">
        <p className="text-white/80">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          {profile.education.degree}, {profile.education.school}
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline decoration-white/30 underline-offset-4 transition-colors duration-150 hover:decoration-white"
        >
          GitHub
        </a>
      </Wrap>
    </footer>
  )
}
