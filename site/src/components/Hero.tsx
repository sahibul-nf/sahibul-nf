import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useMagnetic } from '../hooks/useMagnetic'
import { childFadeUp, easeOut, staggerChildren } from '../lib/motion'

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
          className="absolute -right-24 top-8 h-[65vh] w-[50vw] max-w-xl rounded-full bg-[radial-gradient(circle_at_center,rgb(46_196_214_/_0.25),transparent_68%)] blur-3xl"
          animate={{ scale: [1, 1.06, 1], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-foam to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center px-5 py-28 md:px-8 md:py-24">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,380px)] lg:gap-16">
          <motion.div
            className="order-2 max-w-xl lg:order-1 lg:max-w-2xl"
            variants={staggerChildren}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={childFadeUp}
              className="text-sm font-semibold tracking-[0.18em] text-cyan-deep uppercase"
            >
              {profile.role}
            </motion.p>

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
              className="font-display mt-4 text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.92] font-extrabold tracking-[-0.04em] text-ink"
            >
              {profile.brand}
            </motion.p>

            <motion.h1
              variants={childFadeUp}
              className="mt-5 max-w-lg text-balance text-[clamp(1.2rem,2.8vw,1.75rem)] font-medium leading-snug text-ink-soft"
            >
              {profile.headline}
            </motion.h1>

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
              {profile.location} · {profile.availability}
            </motion.p>
          </motion.div>

          <motion.div
            className="order-1 mx-auto w-full max-w-[280px] lg:order-2 lg:mx-0 lg:max-w-none lg:justify-self-end"
            initial={{ opacity: 0, scale: 1.04, clipPath: 'inset(8% 8% 8% 8%)' }}
            animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 0.95, delay: 0.15, ease: easeOut }}
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[1.75rem] bg-[linear-gradient(145deg,rgb(46_196_214_/_0.35),rgb(232_165_75_/_0.25))] blur-xl"
              />
              <motion.figure
                className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-foam shadow-[0_32px_64px_rgb(11_28_36_/_0.18)]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.45, ease: easeOut }}
              >
                <motion.img
                  src="/images/avatar.png"
                  alt={profile.name}
                  className="aspect-[4/5] w-full object-cover object-top grayscale"
                  whileHover={{ scale: 1.03, filter: 'grayscale(0%)' }}
                  transition={{ duration: 0.7, ease: easeOut }}
                />
                <figcaption className="sr-only">{profile.name}</figcaption>
              </motion.figure>
            </div>
          </motion.div>
        </div>

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
