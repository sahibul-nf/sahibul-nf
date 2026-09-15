import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { clipKey, type DemoClip } from '../lib/demo'
import { easeOut } from '../lib/motion'
import { DemoPlayer } from './DemoPlayer'

export type DemoSession = {
  id: string
  title: string
  clips: readonly DemoClip[]
}

function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconChevron({ dir }: { dir: 'prev' | 'next' }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={dir === 'prev' ? 'rotate-180' : undefined}
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DemoModal({
  session,
  onClose,
}: {
  session: DemoSession | null
  onClose: () => void
}) {
  const [clipIndex, setClipIndex] = useState(0)
  const closeRef = useRef<HTMLButtonElement>(null)
  const clipCount = session?.clips.length ?? 0

  useEffect(() => {
    setClipIndex(0)
  }, [session?.id])

  useEffect(() => {
    if (!session) return
    const html = document.documentElement
    const { overflow: htmlOverflow } = html.style
    const { overflow: bodyOverflow } = document.body.style
    html.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key === 'ArrowRight' && clipCount > 1) {
        event.preventDefault()
        setClipIndex((index) => (index + 1) % clipCount)
      }
      if (event.key === 'ArrowLeft' && clipCount > 1) {
        event.preventDefault()
        setClipIndex((index) => (index - 1 + clipCount) % clipCount)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      html.style.overflow = htmlOverflow
      document.body.style.overflow = bodyOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [session, onClose, clipCount])

  const clip = session?.clips[clipIndex]
  const hasMultiple = clipCount > 1
  const goPrev = () => setClipIndex((index) => (index - 1 + clipCount) % clipCount)
  const goNext = () => setClipIndex((index) => (index + 1) % clipCount)

  return (
    <AnimatePresence>
      {session && clip ? (
        <div className="fixed inset-0 z-[110] overflow-hidden overscroll-none">
          <motion.button
            type="button"
            aria-label="Close demo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#061016]/92"
          />

          <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-5 sm:gap-5 sm:px-8 sm:py-8">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-modal-title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.28, ease: easeOut }}
              className="flex w-full max-w-5xl flex-col items-center"
            >
              <div className="mb-3 flex w-full items-end justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-cyan uppercase">
                    Demo
                    {hasMultiple ? ` · ${clipIndex + 1} / ${clipCount}` : null}
                  </p>
                  <h3
                    id="demo-modal-title"
                    className="font-display mt-1 truncate text-xl font-bold text-foam sm:text-2xl"
                  >
                    {session.title}
                  </h3>
                  <p className="mt-0.5 truncate text-sm text-foam/55">{clip.title}</p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close demo"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-foam/15 bg-foam/8 text-foam/80 transition-colors hover:bg-foam/14 hover:text-foam"
                >
                  <IconClose />
                </button>
              </div>

              <div className="relative w-full">
                {hasMultiple ? (
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous clip"
                    className="absolute top-1/2 left-0 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foam/15 bg-ink/80 text-foam shadow-lg backdrop-blur-sm transition-colors hover:bg-ink hover:text-cyan md:inline-flex"
                  >
                    <IconChevron dir="prev" />
                  </button>
                ) : null}

                <div className="loom-stage overflow-hidden rounded-xl bg-black shadow-[0_24px_80px_rgb(0_0_0_/_0.45)] ring-1 ring-foam/10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={clipKey(clip)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="relative aspect-video w-full"
                    >
                      <DemoPlayer clip={clip} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {hasMultiple ? (
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next clip"
                    className="absolute top-1/2 right-0 z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foam/15 bg-ink/80 text-foam shadow-lg backdrop-blur-sm transition-colors hover:bg-ink hover:text-cyan md:inline-flex"
                  >
                    <IconChevron dir="next" />
                  </button>
                ) : null}
              </div>

              {hasMultiple ? (
                <div className="mt-4 flex w-full items-center justify-center gap-2">
                  {session.clips.map((item, index) => (
                    <button
                      key={clipKey(item)}
                      type="button"
                      onClick={() => setClipIndex(index)}
                      aria-current={index === clipIndex}
                      aria-label={item.title}
                      className={`h-1.5 rounded-full transition-all ${
                        index === clipIndex
                          ? 'w-8 bg-cyan'
                          : 'w-2.5 bg-foam/25 hover:bg-foam/45'
                      }`}
                    />
                  ))}
                </div>
              ) : null}

              {hasMultiple ? (
                <div className="mt-3 flex gap-2 md:hidden">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="inline-flex h-10 items-center gap-1 rounded-full border border-foam/15 px-4 text-sm font-semibold text-foam/80"
                  >
                    <IconChevron dir="prev" />
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex h-10 items-center gap-1 rounded-full border border-foam/15 px-4 text-sm font-semibold text-foam/80"
                  >
                    Next
                    <IconChevron dir="next" />
                  </button>
                </div>
              ) : null}
            </motion.div>
          </div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
