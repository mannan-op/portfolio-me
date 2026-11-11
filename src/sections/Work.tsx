import { SectionIntro } from '@/components/SectionIntro'
import { Wrap } from '@/components/Wrap'
import { projects, type Project } from '@/data/projects'
import { publicUrl } from '@/lib/links'

function RepositoryLink({ link, repo }: { link?: string; repo?: string }) {
  const href = publicUrl(repo) ?? publicUrl(link)
  if (!href) return null

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="quiet-link text-sm">
      Repository
    </a>
  )
}

function ShotSlot({ name }: { name: string }) {
  return (
    // TODO: replace with a real screenshot. Do not drop in a mockup or a stock image.
    <div className="flex aspect-[4/3] items-center justify-center border border-line bg-slot p-6 text-center">
      <p className="text-sm leading-snug text-muted">
        <span className="block font-medium text-ink">Screenshot to be added</span>
        <span className="mt-1 block">{name}</span>
      </p>
    </div>
  )
}

function StudyCopy({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <div>
      <p className="font-serif text-sm text-accent">{number}</p>
      <h3 className="mt-2 font-serif text-[1.75rem] font-medium leading-tight">{project.title}</h3>
      <div className="mt-5 space-y-4 text-base leading-relaxed">
        <p>
          <span className="text-ink">Problem. </span>
          <span className="text-muted">{project.problem}</span>
        </p>
        <p>
          <span className="text-ink">Built. </span>
          <span className="text-muted">{project.built}</span>
        </p>
        <p className="text-sm leading-relaxed text-muted">{project.stack.join(', ')}</p>
        {project.lead ? (
          // TODO: measured results go here. Do not invent numbers, quotes, or client names.
          <p className="text-sm leading-relaxed text-muted">
            <span className="text-ink">Results. </span>
            To be added.
          </p>
        ) : null}
        <RepositoryLink link={project.link} repo={project.repo} />
      </div>
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className="pb-20 sm:pb-28">
      <Wrap>
        <SectionIntro kicker="Work" title="Selected work">
          Systems I have built, for clients and as my own products. Screenshots and measured
          results will be added when they are ready to publish.
        </SectionIntro>

        {/* TODO: screenshots and results for every study. Do not invent metrics. */}
        <div className="mt-12 border-b border-line">
          {projects.map((project, index) =>
            project.lead ? (
              <article
                key={project.title}
                className="grid gap-8 border-t border-line py-10 lg:grid-cols-12 lg:items-start lg:gap-12 lg:py-14"
              >
                <div className="order-2 lg:order-1 lg:col-span-5">
                  <ShotSlot name={project.title} />
                </div>
                <div className="order-1 lg:order-2 lg:col-span-7">
                  <StudyCopy project={project} index={index} />
                </div>
              </article>
            ) : (
              <article
                key={project.title}
                className="grid gap-4 border-t border-line py-8 lg:grid-cols-12 lg:gap-12 lg:py-10"
              >
                <div className="lg:col-span-12">
                  <StudyCopy project={project} index={index} />
                </div>
              </article>
            ),
          )}
        </div>
      </Wrap>
    </section>
  )
}
