import { motion } from 'framer-motion'
import { testimonials } from '../data/profile'
import { easeOut, viewportOnce } from '../lib/motion'

export function Notes() {
  return (
    <section id="notes" className="relative scroll-mt-24 bg-foam py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan-deep uppercase">
            Notes
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            From collaborations
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Anonymized notes from longer client engagements.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, delay: index * 0.08, ease: easeOut }}
              className="border-t border-line pt-8"
            >
              <p className="font-display text-2xl leading-snug font-semibold tracking-tight text-ink md:text-[1.65rem]">
                “{item.quote}”
              </p>
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
