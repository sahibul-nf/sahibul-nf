import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useMagnetic } from '../hooks/useMagnetic'
import { childFadeUp, easeOut, staggerChildren } from '../lib/motion'
import { HeroDevHub } from './HeroDevHub'

export function Hero() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.22)
  const secondaryRef = useMagnetic<HTMLAnchorElement>(0.18)

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_0%,#9fe7f0_0%,#e7f3f6_38%,#f5fafb_68%,#efe4d4_100%)]" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.2] [background-image:linear-gradient(rgb(11_28_36_/_0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(11_28_36_/_0.05)_1px,transparent_1px)] [background-size:40px_40px]"
        />
        <div className="absolute inset-0 opacity-[0.35] mix-blend-multiply grain" />
        <motion.div
          aria-hidden
          className="absolute -right-24 top-10 h-[70vh] w-[70vw] max-w-3xl rounded-full bg-[radial-gradient(circle_at_center,rgb(46_196_214_/_0.3),transparent_68%)] blur-3xl"
          animate={{ scale: [1, 1.06, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-foam to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center px-5 py-28 md:px-8 md:py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div
            className="max-w-xl lg:max-w-none"
            variants={staggerChildren}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={childFadeUp} className="flex items-center gap-2">
              <span className="rounded-full border border-cyan-deep/30 bg-cyan-deep/10 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-deep uppercase">
                {profile.role}
              </span>
            </motion.div>

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
              className="font-display mt-4 text-[clamp(2.8rem,8.5vw,5.5rem)] leading-[0.92] font-extrabold tracking-[-0.04em] text-ink"
            >
              {profile.brand}
            </motion.p>

            <motion.h1
              variants={childFadeUp}
              className="mt-6 max-w-xl text-balance text-[clamp(1.3rem,2.8vw,1.9rem)] font-medium leading-snug text-ink-soft"
            >
              {profile.headline}
            </motion.h1>

            <motion.p
              variants={childFadeUp}
              className="mt-4 max-w-lg text-base leading-relaxed break-words text-muted md:text-lg"
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

            <motion.div variants={childFadeUp} className="mt-8 flex items-center gap-3 text-sm text-muted">
              <span>{profile.location}</span>
              <span className="text-line">·</span>
              <span className="text-cyan-deep font-medium">{profile.availability}</span>
            </motion.div>

            {/* Mobile View Dev Hub */}
            <motion.div
              variants={childFadeUp}
              className="mt-10 lg:hidden"
            >
              <HeroDevHub mobile />
            </motion.div>
          </motion.div>

          {/* Right Column: Desktop Dev Hub Bento */}
          <div className="hidden lg:flex lg:justify-end">
            <HeroDevHub />
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
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
