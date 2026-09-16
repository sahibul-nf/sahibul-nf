import { motion } from 'framer-motion'
import { caseStudies } from '../data/profile'
import { demoActionLabel } from '../lib/demo'
import { easeOut, viewportOnce } from '../lib/motion'
import type { DemoSession } from './DemoModal'

function liveCaseLabel(url: string) {
  if (url.includes('contra.com')) return 'View on Contra'
  if (url.includes('play.google.com')) return 'Play Store'
  if (url.includes('apps.apple.com')) return 'App Store'
  return 'Open live app'
}

export function CaseStudies({ onOpenDemo }: { onOpenDemo: (session: DemoSession) => void }) {
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
            How these engagements shipped
          </h2>
          <p className="mt-4 max-w-xl text-lg text-foam/70">
            Problem → approach → result for the three client products with the most depth.
            Everything else lives in selected work.
          </p>
        </motion.div>

        <ol className="mt-14 list-none p-0 md:mt-16">
          {caseStudies.map((study, index) => {
            const hasDemos = study.demos.length > 0
            const beats = [
              { label: 'Problem', body: study.problem },
              { label: 'Approach', body: study.approach },
              { label: 'Result', body: study.result },
            ] as const
            const number = String(index + 1).padStart(2, '0')

            return (
              <motion.li
                key={study.id}
                id={`case-${study.id}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.65, delay: index * 0.06, ease: easeOut }}
                className="scroll-mt-28 border-t border-foam/12 py-10 md:py-14"
              >
                <article className="grid gap-8 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[10rem_minmax(0,1fr)]">
                  <header className="md:pt-1">
                    <p className="text-3xl font-semibold tracking-tight text-cyan tabular-nums md:text-4xl">
                      {number}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-foam">{study.client}</p>
                    <p className="mt-1 text-sm text-foam/50">{study.period}</p>
                  </header>

                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-foam md:text-3xl">
                      {study.title}
                    </h3>

                    <dl className="mt-8 grid gap-8 lg:grid-cols-3 lg:gap-10">
                      {beats.map((beat) => (
                        <div key={beat.label} className="border-t border-cyan/35 pt-4">
                          <dt className="text-xs font-semibold tracking-[0.16em] text-cyan uppercase">
                            {beat.label}
                          </dt>
                          <dd className="mt-2 text-sm leading-relaxed text-foam/80">{beat.body}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                      <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-foam/50">
                        {study.stack.map((item) => (
                          <li
                            key={item}
                            className="after:ml-3 after:text-foam/25 after:content-['/'] last:after:content-none"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
                        {hasDemos ? (
                          <button
                            type="button"
                            onClick={() =>
                              onOpenDemo({ id: study.id, title: study.title, clips: study.demos })
                            }
                            className="inline-flex text-cyan transition-colors hover:text-foam"
                          >
                            {demoActionLabel(study.demos)} →
                          </button>
                        ) : null}
                        {study.liveUrl ? (
                          <a
                            href={study.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex text-cyan transition-colors hover:text-foam"
                          >
                            {liveCaseLabel(study.liveUrl)} →
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </article>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
