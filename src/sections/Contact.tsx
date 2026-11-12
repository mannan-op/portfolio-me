import { useRef, useState, type FormEvent } from 'react'
import { Reveal } from '@/components/Reveal'
import { SectionIntro } from '@/components/SectionIntro'
import { Wrap } from '@/components/Wrap'
import { profile } from '@/data/profile'
import { telHref } from '@/lib/links'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const fieldClass =
  'mt-2 w-full rounded-[10px] border border-line bg-canvas px-3 py-3 text-base text-ink outline-none transition-colors duration-150 placeholder:text-muted/80 focus-visible:border-accent'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [formError, setFormError] = useState<string | null>(null)
  const openedAt = useRef(Date.now())

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormError(null)

    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const honeypot = String(data.get('bot-field') ?? '').trim()

    if (honeypot || Date.now() - openedAt.current < 1500) {
      setStatus('success')
      form.reset()
      return
    }

    if (name.length < 2 || name.length > 80) {
      setFormError('Please enter your name.')
      return
    }
    if (!EMAIL_PATTERN.test(email) || email.length > 120) {
      setFormError('Please enter a valid email address.')
      return
    }
    if (message.length < 10 || message.length > 2000) {
      setFormError('Please describe the project in at least a sentence.')
      return
    }

    setStatus('sending')
    const body = new URLSearchParams(
      Object.fromEntries(data.entries()) as Record<string, string>,
    ).toString()

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })

      if (!response.ok) throw new Error('Submission failed')

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div>
        <p className="text-2xl font-semibold tracking-[-0.03em]">Message sent.</p>
        <p className="mt-3 text-base leading-relaxed text-muted">
          I will reply by email. If it is urgent, call the number on this page.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 cursor-pointer text-sm font-semibold text-accent"
        >
          Send another note
        </button>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />

      <p className="hidden" aria-hidden="true">
        <label>
          Don’t fill this out:
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={80}
          autoComplete="name"
          disabled={status === 'sending'}
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={120}
          autoComplete="email"
          disabled={status === 'sending'}
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          About the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={2000}
          disabled={status === 'sending'}
          className={`${fieldClass} resize-y`}
          placeholder="What the business needs, and roughly when."
        />
      </div>

      {formError ? (
        <p className="text-sm text-accent" role="alert">
          {formError}
        </p>
      ) : null}

      {status === 'error' ? (
        <p className="text-sm text-accent">
          Something went wrong. Email{' '}
          <a href={`mailto:${profile.email}`} className="font-semibold underline underline-offset-4">
            {profile.email}
          </a>{' '}
          and it will still reach me.
        </p>
      ) : null}

      <button type="submit" disabled={status === 'sending'} className="btn-solid w-full sm:w-auto">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-20 text-white sm:py-28">
      <Wrap>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro kicker="Contact" title="Tell me about the business." tone="invert">
              I read every note myself. Email and phone reach me directly.
            </SectionIntro>
            <a href={`mailto:${profile.email}`} className="btn-light shrink-0 px-5 py-3">
              {profile.email}
            </a>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <dl className="divide-y divide-white/15 border-y border-white/15 lg:col-span-5">
              <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 py-4">
                <dt className="text-sm text-white/80">Email</dt>
                <dd>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm text-white underline decoration-white/30 underline-offset-4 sm:text-base"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 py-4">
                <dt className="text-sm text-white/80">Phone</dt>
                <dd>
                  <a
                    href={telHref(profile.phone)}
                    className="text-sm text-white underline decoration-white/30 underline-offset-4 sm:text-base"
                  >
                    {profile.phone}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 py-4">
                <dt className="text-sm text-white/80">WhatsApp</dt>
                {/* TODO: add the WhatsApp link. Do not point this at '#' . */}
                <dd className="text-sm text-white/80 sm:text-base">Link to be added</dd>
              </div>
              <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 py-4">
                <dt className="text-sm text-white/80">Book a call</dt>
                {/* TODO: add the calendar / booking URL, then point the header button at it. */}
                <dd className="text-sm text-white/80 sm:text-base">Calendar link to be added</dd>
              </div>
            </dl>

            <div
              id="note"
              className="rounded-2xl bg-white p-6 text-ink shadow-[0_24px_70px_-36px_rgba(0,0,0,0.8)] sm:p-8 lg:col-span-7"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">Send a note</h3>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Reveal>
      </Wrap>
    </section>
  )
}
