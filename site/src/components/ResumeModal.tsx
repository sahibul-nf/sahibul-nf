import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { resumeData } from '../data/resume'
import { easeOut } from '../lib/motion'

export function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [isPrinting, setIsPrinting] = useState(false)

  const handlePrint = () => {
    setIsPrinting(true)
    setTimeout(() => {
      window.print()
      setIsPrinting(false)
    }, 100)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col rounded-2xl bg-foam shadow-2xl shadow-ink/40"
          >
            {/* Modal Header Actions */}
            <div className="flex items-center justify-between border-b border-line bg-foam/90 px-5 py-4 backdrop-blur-sm sm:px-8">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-cyan-deep animate-pulse" />
                <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                  Resume / Curriculum Vitae
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrint}
                  disabled={isPrinting}
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-deep px-4 py-2 text-xs font-semibold text-foam shadow-sm transition-all hover:bg-cyan-deep/90 hover:shadow sm:text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download / Print PDF</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="rounded-full p-2 text-muted transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Resume Document Content (Scrollable) */}
            <div className="overflow-y-auto p-5 sm:p-8 md:p-12">
              <article className="mx-auto max-w-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:rounded-xl sm:p-10 md:p-12 text-ink">
                {/* Header */}
                <header className="border-b border-line pb-6 text-center sm:text-left">
                  <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                    {resumeData.name}
                  </h1>
                  <p className="mt-2 text-base font-semibold text-cyan-deep sm:text-lg">
                    {resumeData.title}
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted sm:justify-start sm:text-sm">
                    <span>{resumeData.location}</span>
                    <span>•</span>
                    <a
                      href={`mailto:${resumeData.email}`}
                      className="underline decoration-line underline-offset-2 hover:text-cyan-deep"
                    >
                      {resumeData.email}
                    </a>
                    <span>•</span>
                    <a
                      href={resumeData.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-line underline-offset-2 hover:text-cyan-deep"
                    >
                      Portfolio
                    </a>
                    <span>•</span>
                    <a
                      href={resumeData.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-line underline-offset-2 hover:text-cyan-deep"
                    >
                      LinkedIn
                    </a>
                    <span>•</span>
                    <a
                      href={resumeData.github}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-line underline-offset-2 hover:text-cyan-deep"
                    >
                      GitHub
                    </a>
                  </div>
                </header>

                {/* Professional Summary */}
                <section className="mt-6 border-b border-line pb-6">
                  <h2 className="text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
                    Professional Summary
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80 sm:text-base">
                    {resumeData.summary}
                  </p>
                </section>

                {/* Core Technical Skills */}
                <section className="mt-6 border-b border-line pb-6">
                  <h2 className="text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
                    Core Technical Skills
                  </h2>
                  <div className="mt-3 space-y-2 text-sm">
                    {resumeData.skills.map((skillGroup) => (
                      <div key={skillGroup.category} className="grid grid-cols-1 sm:grid-cols-4 sm:gap-4">
                        <span className="font-semibold text-ink sm:col-span-1">
                          {skillGroup.category}:
                        </span>
                        <span className="text-muted sm:col-span-3">
                          {skillGroup.items.join(' • ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Work Experience */}
                <section className="mt-6 border-b border-line pb-6">
                  <h2 className="text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
                    Professional Experience
                  </h2>
                  <div className="mt-4 space-y-6">
                    {resumeData.experience.map((exp) => {
                      const hasUrl = 'companyUrl' in exp && exp.companyUrl
                      return (
                        <div key={`${exp.company}-${exp.period}`} className="space-y-2">
                          <div className="flex flex-wrap items-baseline justify-between gap-1">
                            <h3 className="text-base font-bold text-ink">
                              {exp.role}{' '}
                              <span className="font-normal text-muted">
                                at{' '}
                                {hasUrl ? (
                                  <a
                                    href={exp.companyUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-medium text-cyan-deep underline decoration-cyan-deep/40 underline-offset-2 hover:text-ink"
                                  >
                                    {exp.company}
                                  </a>
                                ) : (
                                  <span className="font-medium text-ink">{exp.company}</span>
                                )}
                              </span>
                            </h3>
                            <span className="text-xs font-medium text-muted">{exp.period}</span>
                          </div>
                          <ul className="list-outside list-disc pl-4 space-y-1 text-xs text-muted sm:text-sm">
                            {exp.highlights.map((highlight, idx) => (
                              <li key={idx} className="leading-relaxed">
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </section>

                {/* Key Featured Projects */}
                <section className="mt-6 border-b border-line pb-6">
                  <h2 className="text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
                    Featured Projects & Products
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {resumeData.featuredProjects.map((proj) => {
                      const hasLink = 'link' in proj && proj.link
                      return (
                        <div
                          key={proj.name}
                          className="rounded-lg border border-line bg-foam/50 p-4 transition-colors"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-bold text-sm text-ink">{proj.name}</h3>
                            {hasLink && (
                              <a
                                href={proj.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-semibold text-cyan-deep underline underline-offset-2"
                              >
                                Link ↗
                              </a>
                            )}
                          </div>
                          <p className="mt-1 text-[11px] font-semibold text-cyan-deep">
                            {proj.stack}
                          </p>
                          <p className="mt-2 text-xs leading-relaxed text-muted">
                            {proj.summary}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </section>

                {/* Education */}
                <section className="mt-6">
                  <h2 className="text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
                    Education
                  </h2>
                  <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-ink">
                        {resumeData.education.degree}
                      </h3>
                      <p className="text-xs text-muted">{resumeData.education.school}</p>
                    </div>
                    <span className="text-xs text-muted">{resumeData.education.period}</span>
                  </div>
                </section>
              </article>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
