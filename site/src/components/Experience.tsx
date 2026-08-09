import { motion } from 'framer-motion'
import { experience } from '../data/profile'

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f5fafb_0%,#e7f3f6_45%,#efe4d4_100%)]" />
      <div className="absolute inset-0 opacity-30 grain" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan-deep uppercase">
            Experience
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Where the craft got sharper
          </h2>
        </div>

        <ol className="mt-14 space-y-0">
          {experience.map((job, index) => (
            <motion.li
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="group grid gap-4 border-t border-line py-8 md:grid-cols-[220px_1fr] md:gap-10 md:py-10"
            >
              <div>
                <p className="text-sm text-muted">{job.period}</p>
                <p className="mt-1 font-semibold text-ink">{job.company}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-cyan-deep">
                  {job.role}
                </h3>
                <ul className="mt-3 space-y-2 text-muted">
                  {job.points.map((point) => (
                    <li key={point} className="leading-relaxed">
                      {point}
                    </li>
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
