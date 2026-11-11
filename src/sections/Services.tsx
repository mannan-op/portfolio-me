import { SectionIntro } from '@/components/SectionIntro'
import { Wrap } from '@/components/Wrap'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'

export function Services() {
  return (
    <section id="services" className="pb-20 sm:pb-28">
      <Wrap>
        <SectionIntro kicker="Services" title="What I build">
          Most engagements are one of these, sometimes a combination. The aim is a tool the team
          will actually use.
        </SectionIntro>

        <div className="mt-12 border-t border-line sm:grid sm:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={cn(
                'border-b border-line py-8 sm:py-10',
                index % 2 === 0 ? 'sm:border-r sm:pr-10' : 'sm:pl-10',
              )}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-sm text-accent">{service.number}</span>
                <h3 className="font-serif text-[1.65rem] font-medium leading-tight">
                  {service.title}
                </h3>
              </div>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{service.outcome}</p>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
