import { motion } from 'framer-motion'
import { experience } from '../data/profile'
import { easeOut, viewportOnce } from '../lib/motion'

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f5fafb_0%,#e7f3f6_45%,#efe4d4_100%)]" />
      <div className="absolute inset-0 opacity-30 grain" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan-strong uppercase">
            Experience
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Where the craft got sharper
          </h2>
        </motion.div>

        <ol className="mt-14 space-y-0">
          {experience.map((job, index) => (
            <motion.li
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: easeOut }}
              className="group relative grid min-w-0 gap-4 overflow-x-clip border-t border-line py-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10 md:py-10"
            >
              <motion.span
                aria-hidden
                className="absolute top-0 left-0 h-px origin-left bg-cyan-deep"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, delay: 0.1 + index * 0.04, ease: easeOut }}
                style={{ width: '100%' }}
              />

              <div>
                <p className="text-sm text-muted">{job.period}</p>
                {'companyUrl' in job && job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block font-semibold text-ink underline-offset-4 transition-colors hover:text-cyan-strong hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  <p className="mt-1 font-semibold text-ink">{job.company}</p>
                )}
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-cyan-strong">
                  {job.role}
                </h3>
                <ul className="mt-3 space-y-2 text-muted">
                  {job.points.map((point, pointIndex) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: 0.12 + pointIndex * 0.05,
                        ease: easeOut,
                      }}
                      className="leading-relaxed"
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
