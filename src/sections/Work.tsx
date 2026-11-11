import chatShot from '@/assets/work/mern-chat.webp'
import { BrowserFrame, ShotCover } from '@/components/BrowserFrame'
import { Reveal } from '@/components/Reveal'
import { SectionIntro } from '@/components/SectionIntro'
import { Wrap } from '@/components/Wrap'
import { projects, type Project } from '@/data/projects'
import { publicUrl } from '@/lib/links'

const shots: Record<string, string> = {
  'MERN ChatApp': chatShot,
}

function RepositoryLink({ link, repo }: { link?: string; repo?: string }) {
  const href = publicUrl(repo) ?? publicUrl(link)
  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-semibold text-accent underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:decoration-accent"
    >
      Repository
    </a>
  )
}

function StackList({ stack }: { stack: readonly string[] }) {
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
        {project.lead ? (
          // TODO: measured results go here. Do not invent numbers, quotes, or client names.
          <p className="text-sm leading-relaxed text-muted">
            <span className="font-medium text-ink">Results. </span>
            To be added.
          </p>
        ) : null}
        <RepositoryLink link={project.link} repo={project.repo} />
      </div>
    </div>
  )
}

function StudyMedia({ project }: { project: Project }) {
  const shot = shots[project.title]

  return (
    <BrowserFrame label={project.title} className="h-full rounded-none border-0 shadow-none">
      {shot ? (
        <img
          src={shot}
          alt={`Sign-up screen from ${project.title}`}
          width={1400}
          height={802}
          loading="lazy"
          className="aspect-[16/10] h-full w-full object-cover object-left-top"
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {projects.map((project, index) => {
              const prominent = Boolean(project.lead || shots[project.title])

              return prominent ? (
                <article key={project.title} className="card overflow-hidden sm:col-span-2">
                  <div className="grid lg:grid-cols-2">
                    <div className="border-b border-line lg:border-r lg:border-b-0">
                      <StudyMedia project={project} />
                    </div>
                    <div className="p-6 sm:p-8 lg:p-10">
                      <StudyCopy project={project} index={index} />
                    </div>
                  </div>
                </article>
              ) : (
                <article key={project.title} className="card p-6 sm:p-8">
                  <StudyCopy project={project} index={index} />
                </article>
              )
            })}
          </div>
        </Reveal>
      </Wrap>
    </section>
  )
}
