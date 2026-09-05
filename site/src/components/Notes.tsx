import { motion } from 'framer-motion'
import { testimonials } from '../data/profile'
import { easeOut, viewportOnce } from '../lib/motion'

export function Notes() {
  return (
    <section id="notes" className="relative scroll-mt-24 overflow-x-clip bg-foam py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan-strong uppercase">
            Notes
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            From clients
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Real feedback from Upwork and direct client work.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, delay: index * 0.08, ease: easeOut }}
              className="border-t border-line pt-8"
            >
              {item.rating ? (
                <p className="text-sm font-semibold tracking-[0.14em] text-amber-strong uppercase">
                  {item.rating}★ Upwork
                </p>
              ) : null}

              {item.quote ? (
                <p className="font-display mt-4 text-2xl leading-snug font-semibold tracking-tight text-ink break-words md:text-[1.45rem]">
                  “{item.quote}”
                </p>
              ) : (
                <p className="font-display mt-4 text-2xl leading-snug font-semibold tracking-tight text-ink md:text-[1.45rem]">
                  Five-star feedback after a year-long engagement.
                </p>
              )}

              <footer className="mt-6 text-sm text-muted">
                <span className="font-semibold text-ink">{item.role}</span>
                <span className="mx-2 text-line">·</span>
                <span>{item.context}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
