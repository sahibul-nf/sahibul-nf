import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useMagnetic } from '../hooks/useMagnetic'
import { easeOut, viewportOnce } from '../lib/motion'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const buttonRef = useMagnetic<HTMLButtonElement>(0.2)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const body = new URLSearchParams()
    data.forEach((value, key) => {
      body.append(key, String(value))
    })

    setStatus('sending')
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error('Failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_80%_10%,#9fe7f0_0%,#e7f3f6_40%,#f5fafb_100%)]" />
      <div className="absolute inset-0 opacity-25 grain" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan-deep uppercase">
            Contact
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Let’s build the next release
          </h2>
          <p className="mt-4 text-lg text-muted">
            {profile.availability}. Tell me about the product, the stack, and the timeline.
          </p>

          <div className="mt-8 space-y-3 text-sm">
            <a
              href={profile.links.email}
              className="block font-semibold text-ink transition-colors hover:text-cyan-deep"
            >
              {profile.email}
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block text-muted transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.upwork}
              target="_blank"
              rel="noreferrer"
              className="block text-muted transition-colors hover:text-ink"
            >
              Upwork
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="block text-muted transition-colors hover:text-ink"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: 0.08, ease: easeOut }}
          className="md:col-span-7"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-ink">Name</span>
              <input
                required
                name="name"
                type="text"
                className="w-full border-b border-line bg-transparent px-0 py-3 outline-none transition-[border-color] duration-300 focus:border-cyan-deep"
                placeholder="Your name"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-ink">Email</span>
              <input
                required
                name="email"
                type="email"
                className="w-full border-b border-line bg-transparent px-0 py-3 outline-none transition-[border-color] duration-300 focus:border-cyan-deep"
                placeholder="you@company.com"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-ink">Project</span>
            <textarea
              required
              name="message"
              rows={5}
              className="w-full resize-y border-b border-line bg-transparent px-0 py-3 outline-none transition-[border-color] duration-300 focus:border-cyan-deep"
              placeholder="What are we building?"
            />
          </label>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.button
              ref={buttonRef}
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-foam hover:bg-ink-soft disabled:opacity-60"
              style={{
                transition: 'transform 180ms ease, background-color 300ms ease, opacity 300ms ease',
              }}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </motion.button>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.p
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="text-sm text-cyan-deep"
                >
                  Thanks — I’ll get back to you soon.
                </motion.p>
              ) : null}
              {status === 'error' ? (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="text-sm text-amber"
                >
                  Couldn’t send via form — email me at {profile.email}.
                </motion.p>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
