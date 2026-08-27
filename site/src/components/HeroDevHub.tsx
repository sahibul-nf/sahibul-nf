import { useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'
import {
  buildHeatmapMonthLabels,
  formatContributionTooltip,
  formatStat,
  liveMetrics,
  normalizeHeatmap,
  type HeatmapCell,
} from '../data/live-metrics'
import { useTilt } from '../hooks/useTilt'
import { easeOut } from '../lib/motion'
import { Tooltip } from './Tooltip'

const heatmapLevels = [
  'bg-ink/6',
  'bg-cyan-deep/25',
  'bg-cyan-deep/45',
  'bg-cyan-deep/70',
  'bg-cyan-deep',
] as const

const stackPills = ['Flutter', 'Golang', 'Supabase', 'Realtime'] as const

const langColors: Record<string, string> = {
  Dart: 'text-cyan-deep',
  TypeScript: 'text-amber',
  Golang: 'text-[#00ADD8]',
}

const iconSize = 20
const currentYear = new Date().getFullYear()

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

function FloatingLayer({
  children,
  className = '',
  paused = false,
  delay = 0,
  amplitude = 4,
  duration = 11,
}: {
  children: ReactNode
  className?: string
  paused?: boolean
  delay?: number
  amplitude?: number
  duration?: number
}) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion || paused) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [-amplitude, amplitude] }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

function ContributionHeatmap() {
  const weeks = normalizeHeatmap(liveMetrics.github.heatmap)
  const monthLabels = buildHeatmapMonthLabels(weeks)
  const [hovered, setHovered] = useState<HeatmapCell | null>(null)

  if (weeks.length === 0) {
    return (
      <div className="mt-3 rounded-xl border border-line/50 bg-mist/25 p-2.5">
        <p className="text-[10px] font-medium text-muted">Contribution heatmap</p>
        <p className="mt-1 text-[9px] text-muted">No contribution data yet</p>
      </div>
    )
  }

  return (
    <div className="mt-3 overflow-visible rounded-xl border border-line/50 bg-mist/25 p-2.5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[10px] font-medium text-muted">Contribution heatmap</p>
        <p className="text-[9px] text-muted">{currentYear} YTD</p>
      </div>

      <div className="mt-1 overflow-x-auto overflow-y-visible pb-0.5 [scrollbar-width:thin]">
        <div className="inline-flex min-w-0 flex-col gap-0.5">
          <div className="flex h-3 gap-px">
            {monthLabels.map((month, idx) => (
              <div key={`month-${idx}`} className="relative w-1.5 shrink-0">
                {month.show ? (
                  <span className="absolute left-0 top-0 whitespace-nowrap text-[8px] leading-none text-muted">
                    {month.label}
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex gap-px">
            {weeks.map((week, wIdx) => (
              <div key={`week-${wIdx}`} className="flex flex-col gap-px">
                {week.map((cell, dIdx) => {
                  const level = Math.min(cell.level, 4)
                  const tip = formatContributionTooltip(cell.date, cell.count)
                  const isActive = hovered?.date === cell.date
                  const tooltipSide = dIdx < 3 ? 'bottom' : 'top'

                  return (
                    <Tooltip
                      key={cell.date || `cell-${wIdx}-${dIdx}`}
                      content={tip}
                      side={tooltipSide}
                    >
                      <button
                        type="button"
                        className={`h-1.5 w-1.5 rounded-[1px] transition-shadow hover:ring-1 hover:ring-cyan-deep/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-deep ${heatmapLevels[level]} ${isActive ? 'ring-1 ring-cyan-deep' : ''}`}
                        aria-label={tip}
                        onMouseEnter={() => setHovered(cell)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(cell)}
                        onBlur={() => setHovered(null)}
                      />
                    </Tooltip>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-1.5 min-h-[1.1rem] text-[9px] text-muted" aria-live="polite">
        {hovered
          ? formatContributionTooltip(hovered.date, hovered.count)
          : 'Hover a square for contribution details'}
      </p>
    </div>
  )
}

function GitHubActivityCard() {
  const { github, wakatime } = liveMetrics
  const updated = new Date(liveMetrics.updatedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="rounded-[1.35rem] border border-white/80 bg-foam/95 p-4 shadow-[0_16px_40px_rgb(11_28_36_/_0.08)] backdrop-blur-md md:p-4">
      <div className="flex items-center justify-between gap-2">
        <Tooltip content={`Public GitHub profile · synced ${updated}`}>
          <div className="flex cursor-default items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink/5">
              <IconImg id="12599" />
            </span>
            <div>
              <p className="text-xs font-semibold text-ink">GitHub Activity</p>
              <p className="text-[10px] text-muted">Active shipping · {currentYear}</p>
            </div>
          </div>
        </Tooltip>
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
        <Tooltip
          fullWidth
          content={`${formatStat(github.contributionsYtd)} contributions on GitHub in ${currentYear}`}
        >
          <div className="w-full cursor-default rounded-lg border border-line/70 bg-mist/40 px-2 py-1.5 text-center">
            <p className="font-display text-base font-bold text-ink">
              {formatStat(github.contributionsYtd)}+
            </p>
            <p className="text-[9px] text-muted">Contributions</p>
          </div>
        </Tooltip>

        <Tooltip
          fullWidth
          content={`hiQuran open-source project · ${github.hiQuranStars} GitHub stars`}
        >
          <div className="w-full cursor-default rounded-lg border border-line/70 bg-mist/40 px-2 py-1.5 text-center">
            <p className="font-display text-base font-bold text-ink">{github.hiQuranStars}★</p>
            <p className="text-[9px] text-muted">hiQuran</p>
          </div>
        </Tooltip>

        <Tooltip fullWidth content={`${github.publicRepos} public repositories on GitHub`}>
          <div className="w-full cursor-default rounded-lg border border-line/70 bg-mist/40 px-2 py-1.5 text-center">
            <p className="font-display text-base font-bold text-ink">{github.publicRepos}</p>
            <p className="text-[9px] text-muted">Repos</p>
          </div>
        </Tooltip>
      </div>

      <ContributionHeatmap />

      <Tooltip
        content={`All-time coding hours tracked by Wakatime · last synced ${updated}`}
        className="mt-2.5 block w-full"
      >
        <div className="flex cursor-default items-center justify-between rounded-lg border border-cyan-deep/12 bg-cyan-deep/5 px-2.5 py-1.5 text-[10px]">
          <span className="text-muted">Wakatime tracked</span>
          <span className="font-semibold text-cyan-deep">{wakatime.totalLabel}</span>
        </div>
      </Tooltip>
    </div>
  )
}

function ProofFrontCard({ tiltEnabled }: { tiltEnabled: boolean }) {
  const tiltRef = useTilt(7, tiltEnabled)
  const { languages, aiAssistedPercent } = liveMetrics

  return (
    <div className="rounded-[1.35rem] border border-white/85 bg-foam/98 p-3.5 shadow-[0_24px_48px_rgb(11_28_36_/_0.12)] backdrop-blur-md md:p-4">
      <div
        ref={tiltRef}
        className="transition-[transform] duration-200 will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Tooltip content="Upwork Top Rated Plus — among the highest-rated freelancers on Upwork">
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
            </Tooltip>
            <Tooltip content="5.0 average client rating · 100% Job Success · typically responds within 24 hours">
              <div className="mt-1.5 cursor-default">
                <p className="font-display text-base font-bold text-ink">Upwork · 5.0 ★</p>
                <p className="text-[10px] text-muted">100% Job Success · under 24h response</p>
              </div>
            </Tooltip>
          </div>

          <Tooltip content="Share of line changes written by AI tools vs manual typing over the last 12 months (Wakatime)">
            <div className="shrink-0 cursor-default rounded-lg border border-amber/25 bg-amber/10 px-2.5 py-1.5 text-center">
              <p className="font-display text-lg font-bold text-amber">
                {aiAssistedPercent != null ? `${aiAssistedPercent}%` : '—'}
              </p>
              <p className="text-[8px] text-muted">AI-assisted</p>
              <p className="text-[7px] text-muted/80">12 mo · lines</p>
            </div>
          </Tooltip>
        </div>

        <p className="mt-2 text-[9px] text-muted">Top languages · last 12 months</p>
        <div className="mt-1 grid grid-cols-3 gap-1.5 text-center">
          {languages.map((lang) => (
            <Tooltip
              key={lang.name}
              fullWidth
              content={`${lang.percent}% of coding time in ${lang.name} over the last 12 months (Wakatime)`}
            >
              <div className="w-full cursor-default rounded-lg border border-line/60 bg-mist/30 px-1 py-1.5">
                <p
                  className={`font-display text-sm font-bold ${langColors[lang.name] ?? 'text-ink'}`}
                >
                  {lang.percent}%
                </p>
                <p className="text-[8px] text-muted">{lang.name}</p>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  )
}

function LayeredCardStack() {
  const [activeCard, setActiveCard] = useState<ActiveCard>(null)

  const githubOnTop = activeCard === 'github'
  const proofOnTop = activeCard === 'proof' || activeCard === null
  const floatPaused = activeCard !== null

  return (
    <div className="relative">
      <FloatingLayer
        className={`relative ml-auto w-[94%] pr-1 transition-[filter,z-index] duration-300 ease-out ${
          githubOnTop ? 'z-30' : 'z-10'
        } ${activeCard === 'proof' ? 'brightness-[0.97]' : ''}`}
        paused={floatPaused}
        amplitude={5}
        duration={12}
        delay={0}
      >
        <div
          className={`transition-transform duration-300 ease-out ${
            githubOnTop ? 'scale-[1.02] -translate-y-1' : ''
          }`}
          onPointerEnter={() => setActiveCard('github')}
          onPointerLeave={() => setActiveCard(null)}
        >
          <GitHubActivityCard />
        </div>
      </FloatingLayer>

      <FloatingLayer
        className={`pointer-events-none relative -mt-28 ml-0 w-[86%] transition-[filter,z-index] duration-300 ease-out ${
          proofOnTop ? (activeCard === 'proof' ? 'z-30' : 'z-20') : 'z-10'
        } ${githubOnTop ? 'brightness-[0.96]' : ''}`}
        paused={floatPaused}
        amplitude={4}
        duration={10}
        delay={0.6}
      >
        <div
          className={`pointer-events-auto transition-transform duration-300 ease-out ${
            githubOnTop ? 'scale-[0.99]' : ''
          }`}
          onPointerEnter={() => setActiveCard('proof')}
          onPointerLeave={() => setActiveCard(null)}
        >
          <ProofFrontCard tiltEnabled={activeCard === 'proof'} />
        </div>
      </FloatingLayer>
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
          <Tooltip key={pill} content={`Core stack · ${pill}`}>
            <span className="cursor-default rounded-full border border-line bg-foam/95 px-3 py-1 text-[10px] font-semibold text-ink-soft shadow-sm">
              {pill}
            </span>
          </Tooltip>
        ))}
      </motion.div>
    </motion.div>
  )
}
