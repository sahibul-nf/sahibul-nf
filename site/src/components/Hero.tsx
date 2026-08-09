import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useMagnetic } from '../hooks/useMagnetic'

const easeOut = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.1, duration: 0.7, ease: easeOut },
  }),
}

export function Hero() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.22)
  const secondaryRef = useMagnetic<HTMLAnchorElement>(0.18)

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_0%,#9fe7f0_0%,#e7f3f6_38%,#f5fafb_68%,#efe4d4_100%)]" />
        <div className="absolute inset-0 opacity-[0.35] mix-blend-multiply grain" />
        <div className="absolute -right-24 top-10 h-[70vh] w-[70vw] max-w-3xl rounded-full bg-[radial-gradient(circle_at_center,rgb(46_196_214_/_0.35),transparent_68%)] blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-foam to-transparent" />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] md:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgb(11_28_36_/_0.04)_40%,transparent_70%)]" />
          <DeviceStage />
        </motion.div>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-24">
        <div className="max-w-xl md:max-w-2xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-[clamp(2.8rem,9vw,6.5rem)] leading-[0.9] font-extrabold tracking-[-0.04em] text-ink"
          >
            {profile.brand}
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-balance text-[clamp(1.35rem,3.2vw,2rem)] font-medium leading-snug text-ink-soft"
          >
            {profile.headline}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
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
              className="inline-flex items-center rounded-full border border-line bg-foam/70 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-sm transition-colors duration-300 hover:border-cyan-deep/40 hover:bg-foam"
              style={{ transition: 'transform 180ms ease, background-color 300ms ease, border-color 300ms ease' }}
            >
              Email me
            </a>
          </motion.div>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 text-sm text-muted"
          >
            {profile.role} · {profile.location}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

function DeviceStage() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute top-[18%] right-[18%] h-[58%] w-[42%] max-w-[280px] rounded-[2rem] border border-white/50 bg-ink/90 p-3 shadow-[0_40px_80px_rgb(11_28_36_/_0.28)]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-full overflow-hidden rounded-[1.45rem] bg-[linear-gradient(160deg,#123040_0%,#1d4d5c_45%,#2ec4d6_140%)]">
          <div className="flex h-full flex-col justify-between p-5">
            <div>
              <div className="h-2 w-16 rounded-full bg-white/25" />
              <div className="mt-6 space-y-2">
                <div className="h-3 w-28 rounded-full bg-white/80" />
                <div className="h-3 w-20 rounded-full bg-white/35" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-16 rounded-2xl bg-white/12 backdrop-blur" />
              <div className="h-16 rounded-2xl bg-amber/80" />
              <div className="h-10 rounded-full bg-cyan" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[34%] right-[46%] h-[46%] w-[34%] max-w-[220px] rounded-[1.7rem] border border-white/60 bg-foam/80 p-2.5 shadow-[0_30px_60px_rgb(11_28_36_/_0.18)] backdrop-blur-md"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      >
        <div className="h-full overflow-hidden rounded-[1.25rem] bg-[linear-gradient(180deg,#f5fafb_0%,#efe4d4_100%)]">
          <div className="p-4">
            <div className="mb-4 h-8 w-8 rounded-full bg-cyan-deep/90" />
            <div className="space-y-2">
              <div className="h-2.5 w-24 rounded-full bg-ink/20" />
              <div className="h-2.5 w-16 rounded-full bg-ink/12" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <div className="aspect-square rounded-xl bg-cyan/40" />
              <div className="aspect-square rounded-xl bg-ink/10" />
              <div className="aspect-square rounded-xl bg-amber/50" />
              <div className="aspect-square rounded-xl bg-cyan-deep/30" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
