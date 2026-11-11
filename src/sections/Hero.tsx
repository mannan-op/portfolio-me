import profilePhoto from '@/assets/profile.png'
import { BrowserFrame, ShotCover } from '@/components/BrowserFrame'
import { Wrap } from '@/components/Wrap'
import { projectShots } from '@/data/shots'
import { projects } from '@/data/projects'

const heroProjects = projects.slice(0, 3)

export function Hero() {
  const [primary, ...rest] = heroProjects

  return (
    <section id="top" className="pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <Wrap>
        <p className="text-sm font-semibold text-accent">For small and mid-sized businesses</p>
        <h1 className="mt-4 text-[clamp(2.05rem,8.2vw,4.6rem)] font-bold leading-[0.98] tracking-[-0.048em]">
          <span className="block">Websites, automations,</span>
          <span className="block">and the internal software</span>
          <span className="block">a company runs on.</span>
        </h1>

        <div className="mt-6 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_13.75rem] lg:gap-12">
          <div>
            <p className="max-w-[38rem] text-base leading-relaxed text-muted sm:text-lg">
              You deal with me directly, from the first conversation through delivery. Most projects
              are a site that brings in enquiries, a system that replaces the spreadsheet, or an
              automation that handles a repeated task.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-solid px-5 py-3">
                Book a call
              </a>
              <a href="#work" className="btn-ghost px-5 py-3">
                See the work
              </a>
            </div>
            <p className="mt-6 hidden text-sm text-muted lg:block">
              United States · United Kingdom & Europe · UAE & the Gulf · Pakistan
            </p>
          </div>

          <figure className="w-44 sm:w-52 lg:w-full">
            <img
              src={profilePhoto}
              alt="Portrait of Abdul Mannan"
              width={764}
              height={880}
              className="aspect-[4/5] w-full rounded-2xl object-cover object-[center_18%] shadow-[0_18px_40px_-24px_rgba(14,16,20,0.55)]"
            />
            <figcaption className="mt-3 text-sm font-semibold tracking-[-0.02em]">
              Abdul Mannan
            </figcaption>
          </figure>
          <p className="text-sm text-muted lg:hidden">
            United States · United Kingdom & Europe · UAE & the Gulf · Pakistan
          </p>
        </div>

        {primary ? (
          <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-12 lg:grid-rows-2">
            <div className="lg:col-span-7 lg:row-span-2 lg:min-h-[520px]">
              <BrowserFrame label={primary.title} className="min-h-[280px] lg:h-full">
                <FrameBody project={primary} large />
              </BrowserFrame>
            </div>
            {rest.map((project) => (
              <div key={project.title} className="lg:col-span-5">
                <BrowserFrame label={project.title} className="min-h-[200px] lg:h-full">
                  <FrameBody project={project} />
                </BrowserFrame>
              </div>
            ))}
          </div>
        ) : null}
      </Wrap>
    </section>
  )
}

function FrameBody({
  project,
  large = false,
}: {
  project: (typeof projects)[number]
  large?: boolean
}) {
  const shot = projectShots[project.title]
  if (!shot) {
    return (
      <ShotCover
        large={large}
        title={project.title}
        detail={project.hook}
        className={large ? 'min-h-[220px] lg:min-h-[460px]' : 'min-h-[150px]'}
      />
    )
  }

  return (
    <img
      src={shot.src}
      alt={shot.alt}
      width={shot.width}
      height={shot.height}
      className="h-full min-h-[180px] w-full object-cover lg:min-h-0"
      style={{ objectPosition: shot.position }}
    />
  )
}
