import { useState } from 'react'
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

const devCardWideSrc =
  'https://api.daily.dev/devcards/v2/6FVDo-ttT.png?type=wide&r=rp7'

const iconSize = 20

type ActiveCard = 'github' | 'proof' | null

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

function ProofFrontCard({ tiltEnabled }: { tiltEnabled: boolean }) {
  const tiltRef = useTilt(7, tiltEnabled)

  return (
    <div
      ref={tiltRef}
      className="rounded-[1.35rem] border border-white/85 bg-foam/98 p-3.5 shadow-[0_24px_48px_rgb(11_28_36_/_0.12)] backdrop-blur-md transition-[box-shadow,transform] duration-300 will-change-transform md:p-4"
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

      <a
        href="https://daily.dev/sahibul_nf"
        target="_blank"
        rel="noreferrer"
        className="mt-3 block overflow-hidden rounded-xl border border-line/60 bg-mist/20 transition-opacity hover:opacity-95"
      >
        <img
          src={devCardWideSrc}
          alt="Sahibul NF's Dev Card"
          className="h-auto w-full"
          width={652}
          loading="lazy"
        />
      </a>
    </div>
  )
}

function LayeredCardStack() {
  const [activeCard, setActiveCard] = useState<ActiveCard>(null)

  const githubOnTop = activeCard === 'github'
  const proofOnTop = activeCard === 'proof' || activeCard === null

  return (
    <div className="relative">
      <div
        className={`relative ml-auto w-[94%] pr-1 transition-[transform,filter,z-index] duration-300 ease-out ${
          githubOnTop ? 'z-30 scale-[1.02] -translate-y-1' : 'z-10'
        } ${activeCard === 'proof' ? 'brightness-[0.97]' : ''}`}
        onPointerEnter={() => setActiveCard('github')}
        onPointerLeave={() => setActiveCard(null)}
      >
        <GitHubActivityCard />
      </div>

      <div
        className={`pointer-events-none relative -mt-28 ml-0 w-[86%] transition-[transform,filter,z-index] duration-300 ease-out ${
          proofOnTop ? (activeCard === 'proof' ? 'z-30' : 'z-20') : 'z-10'
        } ${githubOnTop ? 'scale-[0.99] brightness-[0.96]' : ''}`}
      >
        <div
          className="pointer-events-auto"
          onPointerEnter={() => setActiveCard('proof')}
          onPointerLeave={() => setActiveCard(null)}
        >
          <ProofFrontCard tiltEnabled={activeCard === 'proof'} />
        </div>
      </div>
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
        <ProofFrontCard tiltEnabled={false} />
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

      <LayeredCardStack />

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
