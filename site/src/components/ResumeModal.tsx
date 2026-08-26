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
            <div className="resume-modal-header flex items-center justify-between border-b border-line bg-foam/90 px-5 py-4 backdrop-blur-sm sm:px-8">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-cyan-deep animate-pulse" />
                <div>
                  <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                    Resume / Curriculum Vitae
                  </h3>
                  <p className="mt-0.5 text-xs text-muted">Optimized for a single-page PDF export</p>
                </div>
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
              <article className="resume-document mx-auto max-w-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:rounded-xl sm:p-10 md:p-12 text-ink">
                <div className="resume-header border-b border-line pb-4 text-left">
                  <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                    {resumeData.name}
                  </h1>
                  <p className="mt-1 text-base font-semibold text-ink sm:text-lg">
                    {resumeData.title} · {resumeData.subtitle}
                  </p>
                  <p className="resume-contact mt-2 text-xs text-muted sm:text-sm">
                    {resumeData.location} · {resumeData.email} · {resumeData.portfolio} ·{' '}
                    {resumeData.linkedin} · {resumeData.github}
                  </p>
                </div>

                <section className="resume-section mt-4 border-b border-line pb-4">
                  <h2 className="resume-section-title text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
                    Professional Summary
                  </h2>
                  <p className="resume-body mt-1.5 text-sm leading-snug text-ink/80">
                    {resumeData.summary}
                  </p>
                </section>

                <section className="resume-section mt-4 border-b border-line pb-4">
                  <h2 className="resume-section-title text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
                    Core Competencies
                  </h2>
                  <p className="resume-body mt-1.5 text-sm leading-snug text-ink/80">
                    {resumeData.coreCompetencies.join(' · ')}
                  </p>
                </section>

                <section className="resume-section mt-4 border-b border-line pb-4">
                  <h2 className="resume-section-title text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
                    Professional Experience
                  </h2>
                  <div className="resume-experience mt-2 space-y-3">
                    {resumeData.experience.map((exp) => (
                      <div key={`${exp.company}-${exp.period}`} className="space-y-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <h3 className="text-sm font-bold text-ink">
                            {exp.role} — {exp.company} ({exp.location})
                          </h3>
                          <span className="text-[11px] font-medium text-muted">{exp.period}</span>
                        </div>
                        <ul className="list-outside list-disc pl-4 space-y-0.5 text-xs text-muted sm:text-sm">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="leading-snug">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <p className="resume-earlier text-xs leading-snug text-muted italic">
                      {resumeData.earlierExperience}
                    </p>
                  </div>
                </section>

                <section className="resume-section mt-4 border-b border-line pb-4">
                  <h2 className="resume-section-title text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
                    Selected Projects
                  </h2>
                  <ul className="resume-projects mt-2 list-disc space-y-0.5 pl-4 text-xs text-muted sm:text-sm">
                    {resumeData.selectedProjects.map((project) => (
                      <li key={project} className="leading-snug">
                        {project}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="resume-section mt-4">
                  <h2 className="resume-section-title text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
                    Education
                  </h2>
                  <div className="resume-education mt-2 flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-bold text-ink">
                      {resumeData.education.degree} — {resumeData.education.school} ·{' '}
                      {resumeData.education.grade}
                    </p>
                    <span className="text-[11px] text-muted">{resumeData.education.period}</span>
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
