import { useState, type FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, GitBranch, Globe, Loader2, Mail, Phone, Send } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { profile } from '@/data/profile'
import { fadeUp, staggerContainer } from '@/lib/animations'

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: GitBranch, label: 'github.com/mannan-op', href: profile.github, external: true },
  { icon: Globe, label: 'abdulmannan.me', href: profile.site, external: true },
]

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const body = new URLSearchParams(
      Object.fromEntries(new FormData(form).entries()) as Record<string, string>,
    ).toString()

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })

      if (!res.ok) throw new Error('Submission failed')

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full border-0 border-b border-white/10 bg-transparent px-0 py-4 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary disabled:opacity-50'

  if (status === 'success') {
    return (
      <div className="py-4">
        <p className="text-lg font-semibold text-foreground">Message sent!</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks for reaching out — I'll get back to you at the email you provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 cursor-pointer text-sm font-medium text-primary transition-opacity hover:opacity-80"
        >
          Send another message
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
      className="space-y-2"
    >
      <input type="hidden" name="form-name" value="contact" />

      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out:
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={status === 'sending'}
          className={inputClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={status === 'sending'}
          className={inputClass}
          placeholder="Email address"
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          disabled={status === 'sending'}
          className={`${inputClass} resize-none`}
          placeholder="Tell me about your project..."
        />
      </div>

      {status === 'error' && (
        <p className="pt-2 text-sm text-red-400">
          Something went wrong. Please try again or email me directly at{' '}
          <a href={`mailto:${profile.email}`} className="underline hover:text-red-300">
            {profile.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group mt-6 inline-flex cursor-pointer items-center gap-3 text-sm font-semibold text-foreground transition-colors duration-300 hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 group-disabled:group-hover:border-white/10 group-disabled:group-hover:bg-transparent">
          {status === 'sending' ? (
            <Loader2 size={15} className="animate-spin text-primary" />
          ) : (
            <Send size={15} className="text-primary" />
          )}
        </span>
        {status === 'sending' ? 'Sending…' : 'Send message'}
        <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 group-disabled:opacity-0" />
      </button>
    </form>
  )
}

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="relative py-20 sm:py-28 md:py-36">
      <div className="section-divider" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          label="Contact"
          title="Let's build something"
          description="Have a project in mind? I'd love to hear about it."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid gap-16 border-t border-white/[0.08] pt-12 md:grid-cols-2 md:gap-20 md:pt-16"
        >
          <motion.div variants={fadeUp}>
            <p className="mb-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Send a message
            </p>
            <ContactForm />
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="mb-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Or reach out directly
            </p>
            <ul className="divide-y divide-white/[0.08]">
              {contactLinks.map(({ icon: Icon, label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group flex cursor-pointer items-center justify-between py-5 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    <span className="flex items-center gap-4">
                      <Icon size={16} className="shrink-0 text-primary/70" />
                      <span className="text-sm md:text-[15px]">{label}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <footer className="mx-auto mt-28 max-w-5xl border-t border-white/[0.08] px-4 pt-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-xs text-muted-foreground/70">
            React · TypeScript · Three.js · Tailwind
          </p>
        </div>
      </footer>
    </section>
  )
}
