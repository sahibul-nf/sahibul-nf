import { motion } from 'framer-motion'
import { caseStudies } from '../data/profile'
import { easeOut, viewportOnce } from '../lib/motion'

export function CaseStudies() {
  return (
    <section id="cases" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#0b1c24_0%,#1a3340_42%,#1496a8_120%)]" />
      <div className="absolute inset-0 opacity-20 grain" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan uppercase">
            Case studies
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-foam md:text-5xl">
            How the work actually shipped
          </h2>
          <p className="mt-4 max-w-xl text-lg text-foam/70">
            Short problem → approach → result notes from longer client engagements.
          </p>
        </motion.div>

        <div className="mt-16 space-y-20">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.75, delay: index * 0.06, ease: easeOut }}
              className="border-t border-foam/15 pt-10"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h3 className="font-display text-3xl font-bold tracking-tight text-foam md:text-4xl">
                  {study.title}
                </h3>
                <span className="text-sm text-foam/55">
                  {study.client} · {study.period}
                </span>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-cyan uppercase">
                    Problem
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-foam/80">{study.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-cyan uppercase">
                    Approach
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-foam/80">{study.approach}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-cyan uppercase">
                    Result
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-foam/80">{study.result}</p>
                </div>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-foam/55">
                {study.stack.map((item) => (
                  <li
                    key={item}
                    className="after:ml-4 after:text-foam/25 after:content-['/'] last:after:content-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
