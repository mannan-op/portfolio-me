import { SectionIntro } from '@/components/SectionIntro'
import { Wrap } from '@/components/Wrap'
import { Reveal } from '@/components/Reveal'
import { profile } from '@/data/profile'

const steps = [
  {
    number: '01',
    title: 'The brief',
    text: 'You tell me what the business needs, in plain language.',
  },
  {
    number: '02',
    title: 'The scope',
    text: 'We agree what will be built first, and what can wait.',
  },
  {
    number: '03',
    title: 'The build',
    text: 'I design and build it, and you see it while it is still in progress.',
  },
  {
    number: '04',
    title: 'Handover',
    text: 'You get something the team can use, and a direct way to reach me after.',
  },
] as const

export function About() {
  return (
    <section id="about" className="bg-canvas py-20 sm:py-28">
      <Wrap>
        <Reveal>
          <SectionIntro kicker="About" title="You deal with me directly.">
            I take a website, an automation, or an internal system from the first conversation
            through to something the team can run. I have been doing that freelance work since 2022.
          </SectionIntro>
          <p className="mt-6 text-sm text-muted">
            {profile.education.degree}, {profile.education.school}
          </p>

          <h3 className="mt-16 text-sm font-semibold text-accent">How a project goes</h3>
          <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.number} className="card p-5">
                <p className="text-sm font-semibold text-accent">{step.number}</p>
                <h4 className="mt-3 text-lg font-semibold tracking-[-0.03em]">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Wrap>
    </section>
  )
}
