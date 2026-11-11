import profilePhoto from '@/assets/profile.png'

function Portrait({
  className,
  captionClassName,
}: {
  className?: string
  captionClassName?: string
}) {
  return (
    <figure className={className}>
      <img
        src={profilePhoto}
        alt="Portrait of Abdul Mannan"
        width={764}
        height={880}
        className="aspect-[4/5] w-full object-cover object-[center_18%]"
      />
      <figcaption
        className={captionClassName ?? 'mt-3 font-serif text-lg italic leading-tight'}
      >
        Abdul Mannan
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <section id="top" className="pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20">
      <div className="mx-auto grid w-full max-w-[68rem] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-20">
        <div>
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.16em] text-muted">
            For small and mid-sized businesses
          </p>
          <h1 className="mt-5 font-serif text-[clamp(1.65rem,8vw,2.05rem)] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[2.75rem] lg:text-[3.35rem] lg:leading-[1.05]">
            <span className="block">Websites, automations,</span>
            <span className="block">and the internal software</span>
            <span className="block">a company runs on.</span>
          </h1>
          <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-muted">
            You deal with me directly, from the first conversation through delivery. Most projects
            are a site that brings in enquiries, a system that replaces the spreadsheet, or an
            automation that handles a repeated task.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#contact" className="btn-solid">
              Book a call
            </a>
            <a href="#work" className="quiet-link text-[0.9375rem]">
              See the work
            </a>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted">
            United States · United Kingdom & Europe · UAE & the Gulf · Pakistan
          </p>
          <Portrait
            className="mt-5 w-[6.5rem] lg:hidden"
            captionClassName="mt-2 font-serif text-sm italic leading-tight"
          />
        </div>

        <Portrait className="hidden lg:block lg:pt-14" />
      </div>
    </section>
  )
}
