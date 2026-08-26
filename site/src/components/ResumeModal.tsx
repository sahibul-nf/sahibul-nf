import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getResumeContent, type ResumeVariant } from '../data/resume'
import { easeOut } from '../lib/motion'
import { ResumeDocument } from './ResumeDocument'

const variantMeta = {
  compact: {
    label: 'Standard',
    hint: '1-page PDF with balanced page fill',
    printLabel: 'Print 1-page PDF',
  },
  extended: {
    label: 'Extended',
    hint: '2-page CV with full work history',
    printLabel: 'Print 2-page CV',
  },
} as const

export function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [variant, setVariant] = useState<ResumeVariant>('compact')
  const [isPrinting, setIsPrinting] = useState(false)

  const handlePrint = () => {
    setIsPrinting(true)
    document.body.dataset.resumePrint = variant
    setTimeout(() => {
      window.print()
      delete document.body.dataset.resumePrint
      setIsPrinting(false)
    }, 100)
  }

  const content = getResumeContent(variant)

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col rounded-2xl bg-foam shadow-2xl shadow-ink/40"
          >
            <div className="resume-modal-header border-b border-line bg-foam/90 px-5 py-4 backdrop-blur-sm sm:px-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-cyan-deep animate-pulse" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                      Resume / Curriculum Vitae
                    </h3>
                    <p className="mt-0.5 text-xs text-muted">{variantMeta[variant].hint}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <div
                    className="inline-flex rounded-full border border-line bg-foam p-1"
                    role="tablist"
                    aria-label="Resume version"
                  >
                    {(Object.keys(variantMeta) as ResumeVariant[]).map((key) => (
                      <button
                        key={key}
                        type="button"
                        role="tab"
                        aria-selected={variant === key}
                        onClick={() => setVariant(key)}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors sm:px-4 sm:text-sm ${
                          variant === key
                            ? 'bg-ink text-foam'
                            : 'text-muted hover:text-ink'
                        }`}
                      >
                        {variantMeta[key].label}
                      </button>
                    ))}
                  </div>

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
                    <span>{variantMeta[variant].printLabel}</span>
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
            </div>

            <div className="overflow-y-auto p-5 sm:p-8 md:p-12">
              <ResumeDocument data={content} variant={variant} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
