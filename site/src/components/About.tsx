import { motion } from 'framer-motion'
import { coreStack, education, profile, skills } from '../data/profile'
import { childFadeUp, easeOut, staggerChildren, viewportOnce } from '../lib/motion'

export function About({ onOpenResume }: { onOpenResume?: () => void }) {
  return (
    <section id="about" className="scroll-mt-24 overflow-x-clip bg-foam py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12 md:gap-10 md:px-8 md:gap-y-14">
        <div className="min-w-0 md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            <p className="text-sm font-semibold tracking-[0.18em] text-cyan-strong uppercase">
              About
            </p>
            <h2 className="font-display mt-3 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Flutter owner for teams that need production work
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04, clipPath: 'inset(8% 8% 8% 8%)' }}
            whileInView={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: easeOut }}
            className="mt-8 max-w-[280px] overflow-hidden sm:max-w-sm"
          >
            <motion.img
              src="/images/avatar.png"
              alt={profile.name}
              className="aspect-[4/5] w-full object-cover object-top grayscale"
              whileHover={{ scale: 1.03, filter: 'grayscale(0%)' }}
              transition={{ duration: 0.7, ease: easeOut }}
            />
          </motion.div>
        </div>

        <motion.div
          className="min-w-0 md:col-span-7 md:pt-14"
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p
            variants={childFadeUp}
            className="text-base leading-relaxed text-muted sm:text-lg md:text-xl"
          >
            I help founders and product teams ship Flutter apps end to end — new builds, feature
            work, refactors, widgets, Golang APIs, and canvas-style editors. Typical engagements:
            scoped features through full product ownership on iOS, Android, and Web.
          </motion.p>
          <motion.p
            variants={childFadeUp}
            className="mt-5 text-base leading-relaxed text-muted sm:text-lg md:text-xl"
          >
            I work with Cursor, Claude, and Codex to move faster, then use tests and clean
            architecture so the codebase stays maintainable after handoff. Based in Aceh; remote
            across time zones. {profile.availability}.
          </motion.p>

          <motion.div variants={childFadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            {onOpenResume && (
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-deep bg-cyan-deep/5 px-5 py-2.5 text-sm font-semibold text-cyan-strong transition-all hover:bg-cyan-deep hover:text-foam"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download Resume / CV</span>
              </button>
            )}
          </motion.div>

          <motion.div variants={childFadeUp} className="mt-10 border-t border-line pt-8">
            <p className="text-sm font-semibold text-ink">{education.degree}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              <span className="block sm:inline">{education.school}</span>
              <span className="mx-2 hidden text-line sm:inline" aria-hidden>
                ·
              </span>
              <span className="mt-1 block sm:mt-0 sm:inline">
                {education.period} · {education.grade}
              </span>
            </p>
          </motion.div>

          <motion.div variants={childFadeUp} className="mt-10 border-t border-line pt-8">
            <p className="text-sm font-semibold tracking-[0.16em] text-cyan-strong uppercase">
              Core stack
            </p>
            <ul className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
              {coreStack.map((item, index) => (
                <li key={item} className="flex items-center gap-x-2">
                  <span className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl md:text-2xl">
                    {item}
                  </span>
                  {index < coreStack.length - 1 ? (
                    <span className="font-display text-lg font-normal text-line sm:text-xl md:text-2xl" aria-hidden>
                      /
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {skills.map((skill) => (
              <motion.div key={skill.group} variants={childFadeUp} className="min-w-0">
                <h3 className="font-display text-lg font-bold text-ink">{skill.group}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted sm:text-base">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
