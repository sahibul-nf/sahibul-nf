import { motion } from 'framer-motion'
import { coreStack, profile } from '../data/profile'
import { childFadeUp, easeOut, staggerChildren } from '../lib/motion'

const signals = [
  { value: '5+', label: 'Years shipping production apps' },
  { value: '5.0', label: 'Upwork client rating' },
  { value: '545', label: 'Automated tests on latest platform' },
  { value: '65+', label: 'GitHub stars · hiQuran' },
] as const

export function HeroSignal({ compact = false }: { compact?: boolean }) {
  return (
    <motion.div
      className={`relative ${compact ? 'w-full' : 'w-full max-w-md lg:max-w-none lg:justify-self-end'}`}
      variants={staggerChildren}
      initial="hidden"
      animate="show"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[conic-gradient(from_120deg,rgb(46_196_214_/_0.35),rgb(232_165_75_/_0.2),rgb(46_196_214_/_0.35))] opacity-70 blur-2xl"
      />

      <motion.div
        variants={childFadeUp}
        className={`relative overflow-hidden border border-white/70 bg-ink/92 text-foam shadow-[0_40px_80px_rgb(11_28_36_/_0.28)] backdrop-blur-md ${
          compact ? 'rounded-[1.35rem]' : 'rounded-[1.75rem]'
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgb(46_196_214_/_0.9),rgb(232_165_75_/_0.7),transparent)]" />

        <div className={compact ? 'p-5' : 'p-6 md:p-7'}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-cyan uppercase">
              Delivery signal
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/75">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              {profile.availability}
            </span>
          </div>

          <div className={`mt-5 grid grid-cols-2 ${compact ? 'gap-3' : 'gap-4 md:gap-5'}`}>
            {signals.map((item, i) => (
              <motion.div
                key={item.label}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-3 md:p-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.08, duration: 0.55, ease: easeOut }}
              >
                <p className="font-display text-[clamp(1.6rem,4vw,2.2rem)] leading-none font-extrabold tracking-[-0.04em] text-foam">
                  {item.value}
                </p>
                <p className="mt-2 text-[11px] leading-snug text-white/55">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 border-t border-white/8 pt-4">
            <p className="text-[10px] font-semibold tracking-[0.16em] text-white/40 uppercase">
              Core stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {coreStack.slice(0, compact ? 6 : 8).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-4 text-[11px] text-white/45">{profile.responseTime}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
