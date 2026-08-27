import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useTilt } from '../hooks/useTilt'
import { easeOut } from '../lib/motion'

/** 10 weeks — keeps back card shorter so overlap stays readable */
const contributionWeeks = [
  [1, 2, 3, 2, 1, 0, 2],
  [2, 3, 4, 3, 2, 1, 3],
  [3, 4, 4, 3, 2, 1, 2],
  [2, 3, 4, 4, 3, 2, 3],
  [1, 2, 4, 3, 2, 1, 1],
  [3, 4, 4, 4, 3, 2, 4],
  [2, 3, 4, 3, 2, 1, 2],
  [4, 4, 3, 4, 3, 2, 3],
  [3, 3, 4, 4, 3, 2, 2],
  [2, 4, 4, 3, 2, 1, 3],
] as const

const heatmapLevels = [
  'bg-ink/6',
  'bg-cyan-deep/25',
  'bg-cyan-deep/45',
  'bg-cyan-deep/70',
  'bg-cyan-deep',
] as const

const stackPills = ['Flutter', 'Golang', 'Supabase', 'Realtime'] as const

const iconSize = 20

function IconImg({ id }: { id: string }) {
  return (
    <img
      src={`https://img.icons8.com/?id=${id}&format=png&size=${iconSize}`}
      alt=""
      className="h-5 w-5 shrink-0"
      width={iconSize}
      height={iconSize}
      aria-hidden
    />
  )
}

function GitHubActivityCard() {
  return (
    <div className="rounded-[1.35rem] border border-white/80 bg-foam/95 p-4 shadow-[0_16px_40px_rgb(11_28_36_/_0.08)] backdrop-blur-md md:p-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink/5">
            <IconImg id="12599" />
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
          Profile ↗
        </a>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          { value: '919+', label: 'Commits' },
          { value: '65★', label: 'hiQuran' },
          { value: '61', label: 'Repos' },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-line/70 bg-mist/40 px-2 py-1.5 text-center"
          >
            <p className="font-display text-base font-bold text-ink">{item.value}</p>
            <p className="text-[9px] text-muted">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-line/50 bg-mist/25 p-2.5">
        <p className="text-[10px] font-medium text-muted">Contribution heatmap</p>
        <div className="mt-1.5 flex gap-0.5 overflow-x-auto pb-0.5">
          {contributionWeeks.map((week, wIdx) => (
            <div key={`week-${wIdx}`} className="flex flex-col gap-0.5">
              {week.map((lvl, dIdx) => (
                <span
                  key={`cell-${wIdx}-${dIdx}`}
                  className={`h-2 w-2 rounded-[1px] ${heatmapLevels[lvl]}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2.5 flex items-center justify-between rounded-lg border border-cyan-deep/12 bg-cyan-deep/5 px-2.5 py-1.5 text-[10px]">
        <span className="text-muted">Wakatime tracked</span>
        <span className="font-semibold text-cyan-deep">4,683+ hrs</span>
      </div>
    </div>
  )
}

function ProofFrontCard() {
  const tiltRef = useTilt(7)

  return (
    <div
      ref={tiltRef}
      className="rounded-[1.35rem] border border-white/85 bg-foam/98 p-3.5 shadow-[0_24px_48px_rgb(11_28_36_/_0.12)] backdrop-blur-md transition-transform duration-200 will-change-transform md:p-4"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <a
            href={profile.links.upwork}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#ff69b4]/35 bg-[#ff69b4]/8 px-2 py-0.5 text-[9px] font-bold tracking-wide text-[#d63384]"
          >
            <img
              src="https://img.icons8.com/?id=63306&format=png&size=16"
              alt=""
              className="h-3.5 w-3.5"
              width={14}
              height={14}
              aria-hidden
            />
            Top Rated Plus
          </a>
          <p className="mt-1.5 font-display text-base font-bold text-ink">Upwork · 5.0 ★</p>
          <p className="text-[10px] text-muted">100% Job Success · under 24h response</p>
        </div>
        <div className="shrink-0 rounded-lg border border-amber/25 bg-amber/10 px-2.5 py-1.5 text-center">
          <p className="font-display text-lg font-bold text-amber">96.7%</p>
          <p className="text-[8px] text-muted">AI velocity</p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
        {[
          { label: 'Dart', pct: '44%', color: 'text-cyan-deep' },
          { label: 'TypeScript', pct: '20%', color: 'text-amber' },
          { label: 'Golang', pct: '18%', color: 'text-[#00ADD8]' },
        ].map((lang) => (
          <div key={lang.label} className="rounded-lg border border-line/60 bg-mist/30 px-1 py-1.5">
            <p className={`font-display text-sm font-bold ${lang.color}`}>{lang.pct}</p>
            <p className="text-[8px] text-muted">{lang.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-2.5 rounded-xl border border-line/60 bg-mist/30 p-2">
        <a
          href="https://app.daily.dev/sahibul_nf"
          target="_blank"
          rel="noreferrer"
          className="block shrink-0 overflow-hidden rounded-lg border border-line/50 bg-ink/5"
        >
          <img
            src="/images/devcard.png"
            alt="Daily.dev DevCard preview"
            className="h-14 w-[4.5rem] object-cover object-top"
            loading="lazy"
          />
        </a>
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
          <p className="text-[10px] font-semibold text-ink">Daily.dev DevCard</p>
          <p className="text-[9px] leading-snug text-muted">Developer profile &amp; reading stats</p>
          <a
            href="https://app.daily.dev/sahibul_nf"
            target="_blank"
            rel="noreferrer"
            className="text-[9px] font-medium text-cyan-deep hover:underline"
          >
            Open daily.dev ↗
          </a>
        </div>
      </div>

      <a
        href="https://holopin.io/@sahibul_nf"
        target="_blank"
        rel="noreferrer"
        className="mt-2 flex items-center justify-between rounded-lg border border-line/60 bg-foam px-2.5 py-1.5 text-[10px] text-muted transition-colors hover:border-cyan-deep/25 hover:text-cyan-deep"
      >
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden />
          Holopin badges
        </span>
        <span>View ↗</span>
      </a>
    </div>
  )
}

export function HeroDevHub({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <GitHubActivityCard />
        <ProofFrontCard />
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
      className="relative w-full max-w-[460px]"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: easeOut }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-[radial-gradient(circle_at_70%_20%,rgb(46_196_214_/_0.14),transparent_55%)] blur-2xl"
      />

      {/* Layered cards — back card header stays visible above front overlap */}
      <div className="relative">
        <motion.div
          className="relative z-0 ml-auto w-[94%] pr-1"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <GitHubActivityCard />
        </motion.div>

        <motion.div
          className="relative z-10 -mt-28 ml-0 w-[86%]"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        >
          <ProofFrontCard />
        </motion.div>
      </div>

      <motion.div
        className="relative z-20 mt-5 flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        {stackPills.map((pill) => (
          <span
            key={pill}
            className="rounded-full border border-line bg-foam/95 px-3 py-1 text-[10px] font-semibold text-ink-soft shadow-sm"
          >
            {pill}
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
}
