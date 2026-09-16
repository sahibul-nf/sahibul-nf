import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/profile'
import type { DemoSession } from './DemoModal'
import { demoActionLabel } from '../lib/demo'
import { easeOut, viewportOnce } from '../lib/motion'
import { ProjectMedia } from './ProjectMedia'

const featured: Array<(typeof projects)[number]> = projects.filter((project) => project.featured)
const moreWork = projects.filter((project) => !project.featured)

function PlayDemoBadge({ compact = false, label }: { compact?: boolean; label: string }) {
  if (compact) {
    return (
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/25">
        <span
          aria-hidden
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/85 shadow-lg ring-1 ring-foam/15 transition-transform duration-300 group-hover:scale-[1.04]"
        >
          <span className="ml-0.5 inline-block border-y-[5px] border-l-[8px] border-y-transparent border-l-foam" />
        </span>
      </span>
    )
  }

  return (
    <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/25">
      <span className="inline-flex items-center gap-2 rounded-full bg-ink/85 px-4 py-2.5 text-sm font-semibold text-foam shadow-lg ring-1 ring-foam/15 transition-transform duration-300 group-hover:scale-[1.04]">
        <span
          aria-hidden
          className="ml-0.5 inline-block border-y-[6px] border-l-[10px] border-y-transparent border-l-foam"
        />
        {label}
      </span>
    </span>
  )
}

function liveLinkLabel(url: string) {
  if (url.includes('play.google.com')) return 'Play Store'
  if (url.includes('apps.apple.com')) return 'App Store'
  return 'Live'
}

function moreWorkHref(project: (typeof projects)[number]) {
  return project.live ?? project.href
}

function MoreWorkStrip({ onOpenDemo }: { onOpenDemo: (session: DemoSession) => void }) {
  const stripRef = useRef<HTMLDivElement>(null)
  const [showFade, setShowFade] = useState(false)

  const updateFade = useCallback(() => {
    const el = stripRef.current
    if (!el) return
    setShowFade(el.scrollWidth > el.clientWidth + 1)
  }, [])

  useEffect(() => {
    const el = stripRef.current
    if (!el) return

    updateFade()
    const observer = new ResizeObserver(updateFade)
    observer.observe(el)
    el.addEventListener('scroll', updateFade, { passive: true })

    return () => {
      observer.disconnect()
      el.removeEventListener('scroll', updateFade)
    }
  }, [updateFade])

  const handleStripKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return

    const el = stripRef.current
    if (!el) return

    event.preventDefault()
    const firstCard = el.querySelector<HTMLElement>('[data-more-work-card]')
    const cardStep = firstCard ? firstCard.offsetWidth + 16 : 280
    const delta = event.key === 'ArrowRight' ? cardStep : -cardStep
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <div
      ref={stripRef}
      role="region"
      aria-label="More work"
      tabIndex={0}
      onKeyDown={handleStripKeyDown}
      className={`scrollbar-hide mt-8 flex gap-4 overflow-x-auto overscroll-x-contain scroll-px-5 snap-x snap-mandatory pb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-strong/40 focus-visible:ring-offset-2 focus-visible:ring-offset-foam md:scroll-px-8 ${
        showFade ? 'more-work-strip-fade' : ''
      }`}
    >
      {moreWork.map((project) => {
        const hasDemos = project.demos.length > 0
        const openDemo = () =>
          onOpenDemo({ id: project.id, title: project.title, clips: project.demos })
        const cardClass =
          'group w-[min(72vw,16.5rem)] shrink-0 snap-start rounded-xl text-left transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-strong/50 focus-visible:ring-offset-2 focus-visible:ring-offset-foam'

        const media = (
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-mist">
            <ProjectMedia src={project.image} title={project.title} />
            {hasDemos ? <PlayDemoBadge compact label={demoActionLabel(project.demos)} /> : null}
          </div>
        )

        const label = (
          <div className="mt-3 px-0.5">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="font-display text-lg font-bold text-ink">{project.title}</span>
              <span className="text-xs text-muted">{project.year}</span>
            </div>
          </div>
        )

        if (hasDemos) {
          return (
            <button
              key={project.id}
              type="button"
              data-more-work-card
              onClick={openDemo}
              className={cardClass}
              aria-label={`${project.title}, watch demo`}
            >
              {media}
              {label}
            </button>
          )
        }

        const href = moreWorkHref(project)
        const isExternal = href.startsWith('http')

        return (
          <a
            key={project.id}
            href={href}
            data-more-work-card
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            className={cardClass}
            aria-label={`${project.title}, ${isExternal ? 'open live site' : 'view project'}`}
          >
            {media}
            {label}
          </a>
        )
      })}
    </div>
  )
}

function ProjectLinks({
  project,
  onOpenDemo,
}: {
  project: (typeof projects)[number]
  onOpenDemo: (session: DemoSession) => void
}) {
  const hasDemos = project.demos.length > 0
  const caseHref = project.caseStudyId ? `#case-${project.caseStudyId}` : null
  const externalHref =
    project.href.startsWith('http') && project.href !== project.live ? project.href : null

  return (
    <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold">
      {caseHref ? (
        <a
          href={caseHref}
          className="inline-flex items-center gap-2 text-cyan-strong transition-transform duration-300 hover:translate-x-1"
        >
          Case study
          <span aria-hidden>→</span>
        </a>
      ) : null}
      {externalHref && !caseHref ? (
        <a
          href={externalHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-cyan-strong transition-transform duration-300 hover:translate-x-1"
        >
          {project.live ? 'Repo' : 'View'}
          <span aria-hidden>→</span>
        </a>
      ) : null}
      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="text-muted transition-colors duration-300 hover:text-ink"
        >
          {liveLinkLabel(project.live)}
        </a>
      ) : null}
      {hasDemos ? (
        <button
          type="button"
          onClick={() => onOpenDemo({ id: project.id, title: project.title, clips: project.demos })}
          className="text-muted transition-colors duration-300 hover:text-ink"
        >
          {demoActionLabel(project.demos)}
        </button>
      ) : null}
      {project.stars ? <span className="text-muted">{project.stars}★ on GitHub</span> : null}
    </div>
  )
}

export function Work({ onOpenDemo }: { onOpenDemo: (session: DemoSession) => void }) {
  return (
    <section id="work" className="relative scroll-mt-24 overflow-x-clip bg-foam py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan-strong uppercase">
            Selected work
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Client products first
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Three client products up front. Personal apps scroll in a compact row below.
          </p>
        </motion.div>

        <div className="mt-12 space-y-14 md:mt-14 md:space-y-16">
          {featured.map((project, index) => {
            const mediaFromRight = index % 2 === 1
            const hasDemos = project.demos.length > 0
            const openDemo = () =>
              onOpenDemo({ id: project.id, title: project.title, clips: project.demos })

            return (
              <article
                key={project.id}
                className="group grid items-center gap-6 md:grid-cols-12 md:gap-10"
              >
                {hasDemos ? (
                  <motion.button
                    type="button"
                    onClick={openDemo}
                    initial={{ opacity: 0, x: mediaFromRight ? 48 : -48 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.8, ease: easeOut }}
                    whileHover={{ y: -4 }}
                    className={`relative min-w-0 overflow-hidden text-left md:col-span-7 ${
                      mediaFromRight ? 'md:order-2' : ''
                    }`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                      <ProjectMedia
                        src={project.image}
                        title={project.title}
                        fit={project.id === 'musopen' ? 'contain' : 'cover'}
                      />
                      <PlayDemoBadge label={demoActionLabel(project.demos)} />
                    </div>
                  </motion.button>
                ) : (
                  <motion.a
                    href={project.caseStudyId ? `#case-${project.caseStudyId}` : project.href}
                    target={project.href.startsWith('http') ? '_blank' : undefined}
                    rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
                    initial={{ opacity: 0, x: mediaFromRight ? 48 : -48 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.8, ease: easeOut }}
                    whileHover={{ y: -4 }}
                    className={`relative min-w-0 overflow-hidden md:col-span-7 ${
                      mediaFromRight ? 'md:order-2' : ''
                    }`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                      <ProjectMedia
                        src={project.image}
                        title={project.title}
                        fit={project.id === 'musopen' ? 'contain' : 'cover'}
                      />
                    </div>
                  </motion.a>
                )}

                <motion.div
                  initial={{ opacity: 0, x: mediaFromRight ? -36 : 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
                  className={`min-w-0 md:col-span-5 ${mediaFromRight ? 'md:order-1' : ''}`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted">{project.year}</span>
                  </div>
                  <p className="mt-3 text-base leading-relaxed break-words text-muted">
                    {project.blurb}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink-soft">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="after:ml-4 after:text-line after:content-['/'] last:after:content-none"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <ProjectLinks project={project} onOpenDemo={onOpenDemo} />
                </motion.div>
              </article>
            )
          })}
        </div>

        <div className="mt-16 border-t border-line pt-10 md:mt-20">
          <h3 className="font-display text-2xl font-bold tracking-tight text-ink">More work</h3>
          <p className="mt-2 max-w-xl text-muted">
            Personal products and smaller shipped apps — swipe or scroll for more.
          </p>
          <MoreWorkStrip onOpenDemo={onOpenDemo} />
        </div>
      </div>
    </section>
  )
}
