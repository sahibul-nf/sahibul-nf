import { motion } from 'framer-motion'
import { easeOut } from '../lib/motion'
import { NourdailyPreview } from './hero/NourdailyPreview'
import { WorkflowCanvasArt } from './hero/WorkflowCanvasArt'

const stackPills = ['Flutter', 'Supabase', 'Golang', 'Realtime'] as const

function WindowChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-line/80 bg-ink/90 px-4 py-2.5">
      <span className="h-2 w-2 rounded-full bg-cyan" />
      <span className="h-2 w-2 rounded-full bg-amber/80" />
      <span className="h-2 w-2 rounded-full bg-white/30" />
      <span className="ml-2 truncate text-[11px] font-medium text-white/70">{title}</span>
    </div>
  )
}

export function HeroVisual({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="relative mx-auto h-full max-w-sm">
        <motion.div
          className="overflow-hidden rounded-2xl border border-white/60 bg-foam/90 shadow-[0_20px_50px_rgb(11_28_36_/_0.15)] backdrop-blur-sm"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: easeOut }}
        >
          <WindowChrome title="workflow · BonkBytes" />
          <WorkflowCanvasArt className="block w-full" />
        </motion.div>
        <motion.div
          className="absolute -bottom-3 -left-1 flex flex-wrap gap-1.5"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: easeOut }}
        >
          {stackPills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-cyan-deep/25 bg-foam/95 px-2.5 py-1 text-[10px] font-semibold text-cyan-deep shadow-sm"
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full min-h-[420px]">
      <motion.div
        aria-hidden
        className="absolute right-[8%] top-[12%] h-[72%] w-[58%] rounded-full bg-[radial-gradient(circle,rgb(46_196_214_/_0.22),transparent_70%)] blur-2xl"
        animate={{ opacity: [0.5, 0.85, 0.5], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full text-cyan-deep/25"
        viewBox="0 0 400 480"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d="M40 120 C120 100, 180 140, 220 180"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: easeOut }}
        />
        <motion.path
          d="M220 180 C280 220, 320 260, 360 300"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.75, ease: easeOut }}
        />
        <motion.circle
          cx="40"
          cy="120"
          r="4"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        />
        <motion.circle
          cx="360"
          cy="300"
          r="4"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9 }}
        />
      </svg>

      <motion.figure
        className="absolute right-[6%] top-[8%] w-[min(100%,420px)] overflow-hidden rounded-[1.35rem] border border-white/70 bg-foam/40 shadow-[0_32px_64px_rgb(11_28_36_/_0.2)] backdrop-blur-md"
        initial={{ opacity: 0, y: 32, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: easeOut }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <WindowChrome title="workflow · BonkBytes" />
          <WorkflowCanvasArt className="block w-full" />
        </motion.div>
        <figcaption className="sr-only">BonkBytes workflow canvas product preview</figcaption>
      </motion.figure>

      <motion.figure
        className="absolute bottom-[10%] left-[2%] w-[min(48%,240px)] overflow-hidden rounded-[1.1rem] border border-white/80 bg-foam/90 shadow-[0_24px_48px_rgb(11_28_36_/_0.14)] backdrop-blur-md"
        initial={{ opacity: 0, x: -24, y: 16 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease: easeOut }}
      >
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [0, 0.8, 0] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        >
          <NourdailyPreview />
        </motion.div>
        <figcaption className="sr-only">Nourdaily personal product preview</figcaption>
      </motion.figure>

      <motion.div
        className="absolute right-[4%] top-[2%] flex flex-col items-end gap-2"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.85, ease: easeOut }}
      >
        {stackPills.map((pill, i) => (
          <motion.span
            key={pill}
            className="rounded-full border border-line bg-foam/95 px-3 py-1 text-[11px] font-semibold tracking-wide text-ink shadow-sm backdrop-blur-sm"
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.08, duration: 0.5 }}
          >
            {pill}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-[6%] right-[10%] flex items-center gap-2 rounded-full border border-cyan-deep/20 bg-foam/90 px-3 py-1.5 text-[11px] font-medium text-muted shadow-sm backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-deep" />
        </span>
        Production apps · remote delivery
      </motion.div>
    </div>
  )
}
