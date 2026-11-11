import { Reveal } from '@/components/Reveal'
import { SectionIntro } from '@/components/SectionIntro'
import { Wrap } from '@/components/Wrap'
import { services } from '@/data/services'

export function Services() {
  return (
    <section id="services" className="bg-canvas py-20 sm:py-28">
      <Wrap>
        <Reveal>
          <SectionIntro kicker="Services" title="What I build">
            Most engagements are one of these, sometimes a combination. The aim is a tool the team
            will actually use.
          </SectionIntro>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="card p-6 sm:p-8">
                <p className="text-sm font-semibold text-accent">{service.number}</p>
                <h3 className="mt-4 text-[1.65rem] font-semibold tracking-[-0.035em]">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                  {service.outcome}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </Wrap>
    </section>
  )
}
