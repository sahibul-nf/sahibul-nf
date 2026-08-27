import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/profile'
import { easeOut } from '../lib/motion'

type HubTab = 'overview' | 'upwork' | 'wakatime' | 'badges'

// Generated stylized 16-week contribution matrix reflecting real activity
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
  [2, 3, 4, 3, 2, 1, 2],
  [4, 4, 3, 4, 3, 2, 3],
  [3, 3, 4, 4, 3, 2, 2],
  [2, 4, 4, 3, 2, 1, 3],
]

const levelColors = [
  'bg-white/5',
  'bg-[#1496a8]/35',
  'bg-[#2ec4d6]/60',
  'bg-[#2ec4d6]/85',
  'bg-[#2ec4d6]',
]

const stackBadges = [
  { name: 'Flutter & Dart', color: 'border-cyan/30 text-cyan bg-cyan/10' },
  { name: 'Golang', color: 'border-[#00ADD8]/30 text-[#00ADD8] bg-[#00ADD8]/10' },
  { name: 'Supabase & SQL', color: 'border-[#3ECF8E]/30 text-[#3ECF8E] bg-[#3ECF8E]/10' },
  { name: 'Realtime & AWS', color: 'border-amber/30 text-amber bg-amber/10' },
] as const

export function HeroDevHub({ mobile = false }: { mobile?: boolean }) {
  const [activeTab, setActiveTab] = useState<HubTab>('overview')

  return (
    <div className={`relative w-full ${mobile ? 'max-w-md mx-auto' : 'max-w-[540px]'}`}>
      {/* Background ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_top_right,rgb(46_196_214_/_0.25),rgb(232_165_75_/_0.15),transparent_70%)] blur-2xl"
      />

      {/* Main Glassmorphic Card */}
      <motion.div
        className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-[#0b1c24]/95 text-foam shadow-[0_32px_64px_rgb(11_28_36_/_0.35)] backdrop-blur-xl"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3 md:px-5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan" />
            </span>
            <span className="font-display text-xs font-semibold tracking-wide text-foam/90">
              Live Engineering Hub
            </span>
          </div>

          {/* Upwork Top Rated Plus Badge Pill */}
          <a
            href={profile.links.upwork}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-[#ff69b4]/40 bg-[#ff69b4]/10 px-2.5 py-1 text-[10px] font-semibold text-[#ff8ac4] transition-colors duration-200 hover:border-[#ff69b4]/70 hover:bg-[#ff69b4]/20"
            title="Top Rated Plus Freelancer on Upwork (Top 3%)"
          >
            <svg
              className="h-3 w-3 text-[#ff8ac4]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
            </svg>
            <span>Top Rated Plus</span>
            <span className="text-white/40 group-hover:text-white/70">↗</span>
          </a>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 overflow-x-auto border-b border-white/10 bg-black/20 p-1.5 scrollbar-none">
          {[
            { id: 'overview', label: 'GitHub Activity' },
            { id: 'upwork', label: 'Upwork Proof' },
            { id: 'wakatime', label: 'Wakatime Stats' },
            { id: 'badges', label: 'DevCard & Badges' },
          ].map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as HubTab)}
                className={`relative shrink-0 rounded-xl px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                  isActive ? 'text-foam' : 'text-white/60 hover:text-white/90'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 rounded-xl bg-white/12 border border-white/15"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="p-4 md:p-5">
          <AnimatePresence mode="wait">
            {/* 1. OVERVIEW: GitHub Activity & Heatmap */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {/* Metric Summary Bar */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-center">
                    <p className="font-display text-xl font-bold text-cyan">919+</p>
                    <p className="text-[10px] text-white/60">Commits in 2026</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-center">
                    <p className="font-display text-xl font-bold text-amber">65★</p>
                    <p className="text-[10px] text-white/60">hiQuran Stars</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-center">
                    <p className="font-display text-xl font-bold text-foam">61</p>
                    <p className="text-[10px] text-white/60">Public Repos</p>
                  </div>
                </div>

                {/* Heatmap Contribution Matrix */}
                <div className="rounded-2xl border border-white/10 bg-black/40 p-3">
                  <div className="mb-2 flex items-center justify-between text-[11px]">
                    <span className="font-medium text-white/70">Contribution Velocity</span>
                    <span className="text-[10px] text-cyan">Active shipping daily</span>
                  </div>
                  <div className="flex gap-1 overflow-x-auto pb-1">
                    {contributionWeeks.map((week, wIdx) => (
                      <div key={`w-${wIdx}`} className="flex flex-col gap-1">
                        {week.map((lvl, dIdx) => (
                          <span
                            key={`d-${wIdx}-${dIdx}`}
                            className={`h-2.5 w-2.5 rounded-[2px] transition-transform duration-200 hover:scale-125 ${levelColors[lvl]}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-white/45">
                    <span>Less active</span>
                    <div className="flex items-center gap-1">
                      {levelColors.map((col, idx) => (
                        <span key={`legend-${idx}`} className={`h-2 w-2 rounded-[2px] ${col}`} />
                      ))}
                    </div>
                    <span>Highly active</span>
                  </div>
                </div>

                {/* Wakatime Mini Insight */}
                <div className="flex items-center justify-between rounded-xl border border-cyan/20 bg-cyan/5 px-3 py-2 text-xs">
                  <span className="text-white/80">⏱️ Total Tracked Code Time</span>
                  <span className="font-display font-semibold text-cyan">4,683+ Hours</span>
                </div>
              </motion.div>
            )}

            {/* 2. UPWORK PROOF: Top Rated Plus & 5.0 Rating */}
            {activeTab === 'upwork' && (
              <motion.div
                key="upwork"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3.5"
              >
                {/* Top Rated Plus Card */}
                <div className="rounded-2xl border border-[#ff69b4]/30 bg-gradient-to-br from-[#ff69b4]/15 via-black/40 to-black/60 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-[#ff69b4]/20 px-2.5 py-0.5 text-[10px] font-bold text-[#ff8ac4]">
                        🏆 UPWORK TOP RATED PLUS
                      </div>
                      <h4 className="mt-2 font-display text-lg font-bold text-foam">
                        Top 3% Global Talent
                      </h4>
                      <p className="mt-1 text-xs text-white/70 leading-relaxed">
                        Recognized by Upwork for sustained enterprise results, high contract values, and 100% client satisfaction.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-center">
                      <p className="font-display text-xl font-extrabold text-amber">5.0 ★</p>
                      <p className="text-[9px] text-white/60">Rating</p>
                    </div>
                  </div>
                </div>

                {/* Proof Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <p className="text-[10px] uppercase tracking-wider text-white/50">Job Success</p>
                    <p className="font-display mt-0.5 text-base font-bold text-cyan">100% Score</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <p className="text-[10px] uppercase tracking-wider text-white/50">Response Time</p>
                    <p className="font-display mt-0.5 text-base font-bold text-amber">&lt; 24 Hours</p>
                  </div>
                </div>

                <a
                  href={profile.links.upwork}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-deep/90 py-2.5 text-xs font-semibold text-foam shadow-md transition-all hover:bg-cyan-deep"
                >
                  <span>View Verified Upwork Profile</span>
                  <span>↗</span>
                </a>
              </motion.div>
            )}

            {/* 3. WAKATIME & CODING STATS */}
            {activeTab === 'wakatime' && (
              <motion.div
                key="wakatime"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3.5"
              >
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/50">Wakatime Code Time</p>
                      <p className="font-display mt-1 text-2xl font-bold text-foam">
                        4,683 <span className="text-sm font-normal text-white/60">hrs</span> 19 <span className="text-sm font-normal text-white/60">mins</span>
                      </p>
                    </div>
                    <div className="rounded-xl border border-cyan/30 bg-cyan/10 px-3 py-1.5 text-right">
                      <p className="text-[9px] uppercase tracking-wide text-cyan">AI Velocity</p>
                      <p className="font-display text-sm font-bold text-foam">96.7%</p>
                    </div>
                  </div>

                  {/* Language Distribution Progress Bars */}
                  <div className="mt-4 space-y-2">
                    <div>
                      <div className="flex justify-between text-[11px] text-white/80">
                        <span>Dart & Flutter</span>
                        <span className="font-mono text-cyan">44.0%</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[44%] rounded-full bg-cyan" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-white/80">
                        <span>TypeScript / Web</span>
                        <span className="font-mono text-amber">20.2%</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[20%] rounded-full bg-amber" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-white/80">
                        <span>Golang & Cloud Services</span>
                        <span className="font-mono text-[#00ADD8]">18.5%</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[18.5%] rounded-full bg-[#00ADD8]" />
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-white/60 leading-relaxed text-center">
                  ⚡ 545 automated test suites &amp; production CI/CD deployments shipped.
                </p>
              </motion.div>
            )}

            {/* 4. DEVCARD & HOLOPIN BADGES */}
            {activeTab === 'badges' && (
              <motion.div
                key="badges"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3.5"
              >
                <div className="rounded-2xl border border-white/10 bg-black/40 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-foam">Daily.dev Developer Card</span>
                    <a
                      href="https://app.daily.dev/sahibul_nf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] text-cyan hover:underline"
                    >
                      Open daily.dev ↗
                    </a>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-black/60">
                    <img
                      src="/images/devcard.png"
                      alt="Sahibul NF Daily.dev DevCard"
                      className="w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                      loading="eager"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🎖️</span>
                    <div>
                      <p className="text-xs font-semibold text-foam">Holopin Badge Board</p>
                      <p className="text-[10px] text-white/50">Verified open-source achievements</p>
                    </div>
                  </div>
                  <a
                    href="https://holopin.io/@sahibul_nf"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/20 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/80 hover:bg-white/10"
                  >
                    View Holopin ↗
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Core Stack Tags */}
          <div className="mt-4 border-t border-white/10 pt-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {stackBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={`rounded-lg border px-2 py-0.5 text-[10px] font-semibold tracking-wide ${badge.color}`}
                >
                  {badge.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
