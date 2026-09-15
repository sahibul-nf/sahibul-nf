import { motion } from 'framer-motion'
import { caseStudies } from '../data/profile'
import { easeOut, viewportOnce } from '../lib/motion'
import type { DemoSession } from './DemoModal'

export function CaseStudies({ onOpenDemo }: { onOpenDemo: (session: DemoSession) => void }) {
  return (
    <section id="cases" className="relative scroll-mt-24 overflow-hidden py-20 md:py-24">
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
            How two longer engagements shipped
          </h2>
          <p className="mt-4 max-w-xl text-lg text-foam/70">
            Problem → approach → result for the two projects with the most depth. Everything else
            lives in selected work.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
          {caseStudies.map((study, index) => {
            const hasDemos = study.demos.length > 0
            return (
              <motion.article
                key={study.id}
                id={`case-${study.id}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.65, delay: index * 0.06, ease: easeOut }}
                className="scroll-mt-28 rounded-2xl border border-foam/12 bg-ink/25 p-6 md:p-8"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-foam">
                    {study.title}
                  </h3>
                  <span className="text-sm text-foam/50">
                    {study.client} · {study.period}
                  </span>
                </div>

                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="text-xs font-semibold tracking-[0.16em] text-cyan uppercase">
                      Problem
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foam/80">{study.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-[0.16em] text-cyan uppercase">
                      Approach
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foam/80">{study.approach}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-[0.16em] text-cyan uppercase">
                      Result
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foam/80">{study.result}</dd>
                  </div>
                </dl>

                <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-xs text-foam/50">
                  {study.stack.map((item) => (
                    <li
                      key={item}
                      className="after:ml-3 after:text-foam/25 after:content-['/'] last:after:content-none"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold">
                  {hasDemos ? (
                    <button
                      type="button"
                      onClick={() =>
                        onOpenDemo({ id: study.id, title: study.title, clips: study.demos })
                      }
                      className="inline-flex text-cyan hover:text-foam"
                    >
                      Watch demo →
                    </button>
                  ) : null}
                  {study.liveUrl ? (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex text-cyan hover:text-foam"
                    >
                      {study.liveUrl.includes('contra.com') ? 'View on Contra →' : 'Open live app →'}
                    </a>
                  ) : null}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
