import { profile } from '@/data/profile'
import { Wrap } from '@/components/Wrap'

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Wrap className="flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-baseline sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          {profile.education.degree}, {profile.education.school}
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="quiet-link text-sm"
        >
          GitHub
        </a>
      </Wrap>
    </footer>
  )
}
