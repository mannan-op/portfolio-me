import { BrowserFrame, ShotCover } from '@/components/BrowserFrame'
import { Reveal } from '@/components/Reveal'
import { SectionIntro } from '@/components/SectionIntro'
import { Wrap } from '@/components/Wrap'
import { projects, type Project } from '@/data/projects'
import { projectShots } from '@/data/shots'
import { publicUrl } from '@/lib/links'

function ExternalLink({ href, children }: { href?: string; children: string }) {
  const url = publicUrl(href)
  if (!url) return null

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-semibold text-accent underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:decoration-accent"
    >
      {children}
    </a>
  )
}

function StackList({ stack }: { stack: readonly string[] }) {
  if (stack.length === 0) return null

  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <li key={item} className="rounded-md bg-canvas px-2 py-1 text-xs font-medium text-muted">
          {item}
        </li>
      ))}
    </ul>
  )
}

function StudyCopy({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <div>
      <p className="text-sm font-semibold text-accent">{number}</p>
      <h3 className="mt-2 text-[1.7rem] font-semibold tracking-[-0.035em]">{project.title}</h3>
      <div className="mt-5 space-y-4 text-base leading-relaxed">
        <p>
          <span className="font-medium text-ink">Problem. </span>
          <span className="text-muted">{project.problem}</span>
        </p>
        <p>
          <span className="font-medium text-ink">Built. </span>
          <span className="text-muted">{project.built}</span>
        </p>
        <StackList stack={project.stack} />
        {/* TODO: measured results go here. Do not invent numbers, quotes, or client names. */}
        <p className="text-sm leading-relaxed text-muted">
          <span className="font-medium text-ink">Results. </span>
          To be added.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <ExternalLink href={project.site}>View live site</ExternalLink>
          <ExternalLink href={project.repo ?? project.link}>Repository</ExternalLink>
        </div>
      </div>
    </div>
  )
}

function StudyMedia({ project }: { project: Project }) {
  const shot = projectShots[project.title]

  return (
    <BrowserFrame label={project.title} className="h-full rounded-none border-0 shadow-none">
      {shot ? (
        <img
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover"
          style={{ objectPosition: shot.position }}
        />
      ) : (
        // TODO: replace with a real screenshot. Do not invent a product mockup.
        <ShotCover title={project.title} detail={project.hook} className="aspect-[16/10]" />
      )}
    </BrowserFrame>
  )
}

export function Work() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <Wrap>
        <Reveal>
          <SectionIntro kicker="Work" title="Selected work">
            Systems I have built, for clients and as my own products. Screenshots and measured
            results will be added when they are ready to publish.
          </SectionIntro>

          {/* TODO: screenshots and results for every study. Do not invent metrics. */}
          <div className="mt-10 grid gap-4">
            {projects.map((project, index) => (
              <article key={project.title} className="card overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="border-b border-line lg:border-r lg:border-b-0">
                    <StudyMedia project={project} />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10">
                    <StudyCopy project={project} index={index} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </Wrap>
    </section>
  )
}
