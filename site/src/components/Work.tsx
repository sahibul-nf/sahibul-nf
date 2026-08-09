import { motion } from 'framer-motion'
import { projects } from '../data/profile'

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 bg-foam py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan-deep uppercase">
            Selected work
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Systems shipped to production
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Flagship canvas architecture, marketplace backends, and polished Flutter products — built for real users.
          </p>
        </div>

        <div className="mt-14 space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group grid items-center gap-8 md:grid-cols-12 md:gap-10"
            >
              <a
                href={project.live ?? project.href}
                target="_blank"
                rel="noreferrer"
                className={`relative overflow-hidden md:col-span-7 ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-mist">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                </div>
              </a>

              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
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
                    <li key={tag} className="after:ml-4 after:text-line after:content-['/'] last:after:content-none">
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
