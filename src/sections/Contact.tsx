import { useState, type FormEvent } from 'react'
import { SectionIntro } from '@/components/SectionIntro'
import { Wrap } from '@/components/Wrap'
import { profile } from '@/data/profile'
import { telHref } from '@/lib/links'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const fieldClass =
  'mt-2 w-full border border-line bg-white px-3 py-3 text-base text-ink outline-none transition-colors duration-150 placeholder:text-muted/80 focus-visible:border-accent'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const body = new URLSearchParams(
      Object.fromEntries(new FormData(form).entries()) as Record<string, string>,
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
        <p className="font-serif text-2xl font-medium">Message sent.</p>
        <p className="mt-3 text-base leading-relaxed text-muted">
          I will reply by email. If it is urgent, call the number on this page.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="quiet-link mt-6 cursor-pointer text-sm"
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
        <label htmlFor="name" className="text-sm text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={status === 'sending'}
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={status === 'sending'}
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm text-ink">
          About the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={status === 'sending'}
          className={`${fieldClass} resize-y`}
          placeholder="What the business needs, and roughly when."
        />
      </div>

      {status === 'error' ? (
        <p className="text-sm text-accent">
          Something went wrong. Email{' '}
          <a href={`mailto:${profile.email}`} className="quiet-link">
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
    <section id="contact" className="pb-20 sm:pb-28">
      <Wrap>
        <SectionIntro kicker="Contact" title="Tell me about the business.">
          I read every note myself. Email and phone reach me directly.
        </SectionIntro>

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <dl className="divide-y divide-line border-y border-line">
              <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 py-4">
                <dt className="text-sm text-muted">Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`} className="quiet-link text-sm sm:text-base">
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 py-4">
                <dt className="text-sm text-muted">Phone</dt>
                <dd>
                  <a href={telHref(profile.phone)} className="quiet-link text-sm sm:text-base">
                    {profile.phone}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 py-4">
                <dt className="text-sm text-muted">WhatsApp</dt>
                {/* TODO: add the WhatsApp link. Do not point this at '#' . */}
                <dd className="text-sm text-muted sm:text-base">Link to be added</dd>
              </div>
              <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 py-4">
                <dt className="text-sm text-muted">Book a call</dt>
                {/* TODO: add the calendar / booking URL, then point the header button at it. */}
                <dd className="text-sm text-muted sm:text-base">Calendar link to be added</dd>
              </div>
            </dl>
          </div>

          <div className="border border-line bg-paper-raised p-6 sm:p-8 lg:col-span-7">
            <h3 className="font-serif text-2xl font-medium">Send a note</h3>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
