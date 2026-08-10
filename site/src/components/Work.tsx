import { motion } from 'framer-motion'
import { projects } from '../data/profile'
import { easeOut, viewportOnce } from '../lib/motion'
import { ProjectMedia } from './ProjectMedia'

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 bg-foam py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan-deep uppercase">
            Selected work
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Selected work
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            A mix of client products and public apps — mobile-first, API-aware, and built for real
            use.
          </p>
        </motion.div>

        <div className="mt-14 space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const mediaFromRight = index % 2 === 1
            return (
              <article
                key={project.id}
                className="group grid items-center gap-8 md:grid-cols-12 md:gap-10"
              >
                <motion.a
                  href={project.live ?? project.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: mediaFromRight ? 48 : -48 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.8, ease: easeOut }}
                  whileHover={{ y: -4 }}
                  className={`relative overflow-hidden md:col-span-7 ${
                    mediaFromRight ? 'md:order-2' : ''
                  }`}
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-mist">
                    <ProjectMedia src={project.image} title={project.title} />
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, x: mediaFromRight ? -36 : 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
                  className={`md:col-span-5 ${mediaFromRight ? 'md:order-1' : ''}`}
                >
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted">{project.year}</span>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                    {project.blurb}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink-soft">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="after:ml-4 after:text-line after:content-['/'] last:after:content-none"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-deep transition-transform duration-300 hover:translate-x-1"
                    >
                      Case / repo
                      <span aria-hidden>→</span>
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted transition-colors duration-300 hover:text-ink"
                      >
                        Live demo
                      </a>
                    ) : null}
                    {project.stars ? (
                      <span className="text-muted">{project.stars}★ on GitHub</span>
                    ) : null}
                  </div>
                </motion.div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
