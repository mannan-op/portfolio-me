import { BrowserFrame, ShotCover } from '@/components/BrowserFrame'
import { Wrap } from '@/components/Wrap'
import { projects } from '@/data/projects'

const leads = projects.filter((project) => project.lead)

export function Hero() {
  const [primary, ...rest] = leads

  return (
    <section id="top" className="pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <Wrap>
        <p className="text-sm font-semibold text-accent">For small and mid-sized businesses</p>
        <h1 className="mt-4 text-[clamp(2.05rem,8.2vw,4.6rem)] font-bold leading-[0.98] tracking-[-0.048em]">
          <span className="block">Websites, automations,</span>
          <span className="block">and the internal software</span>
          <span className="block">a company runs on.</span>
        </h1>
        <p className="mt-6 max-w-[38rem] text-base leading-relaxed text-muted sm:text-lg">
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
        <p className="mt-6 text-sm text-muted">
          United States · United Kingdom & Europe · UAE & the Gulf · Pakistan
        </p>

        {primary ? (
          <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-12 lg:grid-rows-2">
            <div className="lg:col-span-7 lg:row-span-2 lg:min-h-[520px]">
              <BrowserFrame label={primary.title} className="min-h-[280px] lg:h-full">
                <ShotCover
                  large
                  title={primary.title}
                  detail={primary.hook}
                  className="min-h-[220px] lg:min-h-[460px]"
                />
              </BrowserFrame>
            </div>
            {rest.map((project) => (
              <div key={project.title} className="lg:col-span-5 lg:min-h-0">
                <BrowserFrame label={project.title} className="min-h-[200px] lg:h-full">
                  <ShotCover
                    title={project.title}
                    detail={project.hook}
                    className="min-h-[150px]"
                  />
                </BrowserFrame>
              </div>
            ))}
          </div>
        ) : null}
      </Wrap>
    </section>
  )
}
