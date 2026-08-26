import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useMagnetic } from '../hooks/useMagnetic'
import { childFadeUp, easeOut, staggerChildren } from '../lib/motion'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.22)
  const secondaryRef = useMagnetic<HTMLAnchorElement>(0.18)

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_0%,#9fe7f0_0%,#e7f3f6_38%,#f5fafb_68%,#efe4d4_100%)]" />
        <div className="absolute inset-0 opacity-[0.35] mix-blend-multiply grain" />
        <motion.div
          aria-hidden
          className="absolute -right-24 top-10 h-[70vh] w-[70vw] max-w-3xl rounded-full bg-[radial-gradient(circle_at_center,rgb(46_196_214_/_0.35),transparent_68%)] blur-2xl"
          animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-foam to-transparent" />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] md:block"
          initial={{ opacity: 0, x: 56, rotate: 1.5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: easeOut }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgb(11_28_36_/_0.04)_40%,transparent_70%)]" />
          <HeroVisual />
        </motion.div>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-24">
        <motion.div
          className="max-w-xl md:max-w-2xl"
          variants={staggerChildren}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 36, clipPath: 'inset(0 0 100% 0)' },
              show: {
                opacity: 1,
                y: 0,
                clipPath: 'inset(0 0 0% 0)',
                transition: { duration: 0.95, ease: easeOut },
              },
            }}
            className="font-display text-[clamp(2.8rem,9vw,6.5rem)] leading-[0.9] font-extrabold tracking-[-0.04em] text-ink"
          >
            {profile.brand}
          </motion.p>

          <motion.h1
            variants={childFadeUp}
            className="mt-6 max-w-xl text-balance text-[clamp(1.35rem,3.2vw,2rem)] font-medium leading-snug text-ink-soft"
          >
            {profile.headline}
          </motion.h1>

          <motion.p
            variants={childFadeUp}
            className="mt-4 max-w-md text-base leading-relaxed break-words text-muted md:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={childFadeUp} className="mt-8 flex flex-wrap items-center gap-5">
            <a
              ref={ctaRef}
              href="#work"
              className="inline-flex items-center rounded-full bg-cyan-deep px-6 py-3 text-sm font-semibold text-foam shadow-[0_10px_30px_rgb(20_150_168_/_0.28)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgb(20_150_168_/_0.38)]"
              style={{ transition: 'transform 180ms ease, box-shadow 300ms ease' }}
            >
              View selected work
            </a>

            <a
              ref={secondaryRef}
              href={profile.links.email}
              className="inline-flex items-center text-sm font-semibold text-ink underline decoration-cyan-deep/35 decoration-2 underline-offset-[6px] transition-colors duration-300 hover:text-cyan-deep hover:decoration-cyan-deep"
              style={{ transition: 'transform 180ms ease, color 300ms ease' }}
            >
              Email me
            </a>
          </motion.div>

          <motion.p variants={childFadeUp} className="mt-8 text-sm text-muted">
            {profile.role} · {profile.location}
          </motion.p>

          <motion.div
            variants={childFadeUp}
            className="relative mt-12 h-64 overflow-hidden md:hidden"
            aria-hidden
          >
            <HeroVisual mobile />
          </motion.div>
        </motion.div>

        <motion.a
          href="#work"
          aria-label="Scroll to selected work"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] tracking-[0.18em] text-muted uppercase md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <span>Scroll</span>
          <motion.span
            aria-hidden
            className="block h-8 w-px origin-top bg-cyan-deep/70"
            animate={{ scaleY: [0.35, 1, 0.35], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.a>
      </div>
    </section>
  )
}
