import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useTilt } from '../hooks/useTilt'
import { easeOut } from '../lib/motion'

const contributionWeeks = [
  [0, 1, 2, 1, 0, 0, 1],
  [1, 2, 3, 2, 1, 0, 2],
  [2, 3, 4, 3, 2, 1, 3],
  [1, 2, 3, 4, 3, 2, 1],
  [3, 4, 4, 3, 2, 1, 2],
  [2, 3, 4, 4, 3, 2, 3],
  [1, 2, 3, 2, 1, 0, 1],
  [2, 3, 4, 3, 2, 1, 2],
  [3, 4, 4, 4, 3, 2, 3],
  [2, 3, 3, 2, 1, 1, 2],
  [1, 2, 4, 3, 2, 1, 1],
  [3, 4, 4, 4, 3, 2, 4],
] as const

const heatmapLevels = [
  'bg-ink/6',
  'bg-cyan-deep/25',
  'bg-cyan-deep/45',
  'bg-cyan-deep/70',
  'bg-cyan-deep',
] as const

const stackPills = ['Flutter', 'Golang', 'Supabase', 'Realtime'] as const

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.665-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A8.203 8.203 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function StarIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
    </svg>
  )
}

function GitHubActivityCard({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`rounded-[1.35rem] border border-white/80 bg-foam/95 p-4 shadow-[0_20px_48px_rgb(11_28_36_/_0.1)] backdrop-blur-md ${
        compact ? '' : 'md:p-5'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-ink">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/5">
            <GitHubIcon />
          </span>
          <div>
            <p className="text-xs font-semibold text-ink">GitHub Activity</p>
            <p className="text-[10px] text-muted">Active shipping · 2026</p>
          </div>
        </div>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="text-[10px] font-medium text-cyan-deep hover:underline"
        >
          View profile ↗
        </a>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { value: '919+', label: 'Commits' },
          { value: '65★', label: 'hiQuran' },
          { value: '61', label: 'Repos' },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-line/80 bg-mist/50 px-2 py-2 text-center"
          >
            <p className="font-display text-lg font-bold text-ink">{item.value}</p>
            <p className="text-[9px] text-muted">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-line/60 bg-mist/30 p-3">
        <p className="text-[10px] font-medium text-muted">Contribution heatmap</p>
        <div className="mt-2 flex gap-1 overflow-x-auto pb-1">
          {contributionWeeks.map((week, wIdx) => (
            <div key={`week-${wIdx}`} className="flex flex-col gap-1">
              {week.map((lvl, dIdx) => (
                <span
                  key={`cell-${wIdx}-${dIdx}`}
                  className={`h-2.5 w-2.5 rounded-[2px] ${heatmapLevels[lvl]}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-lg border border-cyan-deep/15 bg-cyan-deep/5 px-3 py-2 text-[11px]">
        <span className="text-muted">Wakatime tracked</span>
        <span className="font-semibold text-cyan-deep">4,683+ hrs</span>
      </div>
    </div>
  )
}

function ProofFrontCard({ compact = false }: { compact?: boolean }) {
  const tiltRef = useTilt(compact ? 6 : 9)

  return (
    <div
      ref={tiltRef}
      className="rounded-[1.35rem] border border-white/80 bg-foam/98 p-4 shadow-[0_28px_56px_rgb(11_28_36_/_0.14)] backdrop-blur-md transition-transform duration-200 will-change-transform md:p-5"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <a
            href={profile.links.upwork}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#ff69b4]/35 bg-[#ff69b4]/8 px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#d63384]"
          >
            <StarIcon className="h-3 w-3 text-[#ff69b4]" />
            Top Rated Plus
          </a>
          <p className="mt-2 font-display text-lg font-bold text-ink">Upwork · 5.0 ★</p>
          <p className="text-[11px] text-muted">100% Job Success · &lt; 24h response</p>
        </div>
        <div className="rounded-xl border border-amber/25 bg-amber/10 px-3 py-2 text-center">
          <p className="font-display text-xl font-bold text-amber">96.7%</p>
          <p className="text-[9px] text-muted">AI velocity</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {[
          { label: 'Dart & Flutter', pct: 44, color: 'bg-cyan-deep' },
          { label: 'TypeScript', pct: 20, color: 'bg-amber' },
          { label: 'Golang', pct: 18, color: 'bg-[#00ADD8]' },
        ].map((lang) => (
          <div key={lang.label}>
            <div className="flex justify-between text-[10px] text-muted">
              <span>{lang.label}</span>
              <span>{lang.pct}%</span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-ink/8">
              <div className={`h-full rounded-full ${lang.color}`} style={{ width: `${lang.pct}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-line/70 bg-mist/40">
        <div className="flex items-center justify-between border-b border-line/60 px-3 py-2">
          <span className="text-[10px] font-semibold text-ink">Daily.dev DevCard</span>
          <a
            href="https://app.daily.dev/sahibul_nf"
            target="_blank"
            rel="noreferrer"
            className="text-[10px] text-cyan-deep hover:underline"
          >
            Open ↗
          </a>
        </div>
        <img
          src="/images/devcard.png"
          alt="Sahibul NF Daily.dev DevCard"
          className="block w-full object-cover"
          loading="eager"
        />
      </div>

      <a
        href="https://holopin.io/@sahibul_nf"
        target="_blank"
        rel="noreferrer"
        className="mt-3 flex items-center justify-between rounded-lg border border-line/70 bg-foam px-3 py-2 text-[11px] text-muted transition-colors hover:border-cyan-deep/30 hover:text-cyan-deep"
      >
        <span>Holopin badge board</span>
        <span>View ↗</span>
      </a>
    </div>
  )
}

export function HeroDevHub({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <GitHubActivityCard compact />
        <ProofFrontCard compact />
        <div className="flex flex-wrap gap-2">
          {stackPills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-cyan-deep/20 bg-cyan-deep/8 px-3 py-1 text-[10px] font-semibold text-cyan-deep"
            >
              {pill}
            </span>
          ))}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="relative w-full max-w-[520px]"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: easeOut }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgb(46_196_214_/_0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgb(232_165_75_/_0.14),transparent_50%)] blur-2xl"
      />

      <div className="relative min-h-[500px]">
        <motion.div
          className="absolute right-0 top-0 w-[92%]"
          animate={{ y: [0, -10, 0], rotate: [1.5, 2.5, 1.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <GitHubActivityCard />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-[88%]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <ProofFrontCard />
        </motion.div>
      </div>

      <motion.div
        className="mt-6 flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {stackPills.map((pill) => (
          <span
            key={pill}
            className="rounded-full border border-line bg-foam/90 px-3 py-1 text-[10px] font-semibold text-ink-soft shadow-sm backdrop-blur-sm"
          >
            {pill}
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
}
