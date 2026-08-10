import { motion } from 'framer-motion'
import { coreStack, education, profile, skills } from '../data/profile'
import { childFadeUp, easeOut, staggerChildren, viewportOnce } from '../lib/motion'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-foam py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            <p className="text-sm font-semibold tracking-[0.18em] text-cyan-deep uppercase">
              About
            </p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Engineer from Aceh with a product eye
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04, clipPath: 'inset(8% 8% 8% 8%)' }}
            whileInView={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: easeOut }}
            className="mt-8 overflow-hidden"
          >
            <motion.img
              src="/images/avatar.png"
              alt={profile.name}
              className="aspect-[4/5] w-full max-w-sm object-cover object-top grayscale"
              whileHover={{ scale: 1.03, filter: 'grayscale(0%)' }}
              transition={{ duration: 0.7, ease: easeOut }}
            />
          </motion.div>
        </div>

        <motion.div
          className="md:col-span-7 md:pt-14"
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p variants={childFadeUp} className="text-lg leading-relaxed text-muted md:text-xl">
            I started in frontend web in 2018, then found my lane in Flutter and Golang backends.
            Since 2021 I’ve shipped production apps across e-commerce, collectibles, learning tools,
            and a node-based workflow canvas — often owning both the client and the services behind
            it.
          </motion.p>
          <motion.p
            variants={childFadeUp}
            className="mt-5 text-lg leading-relaxed text-muted md:text-xl"
          >
            I care about clean architecture, thoughtful UI, and APIs that stay reliable. I also use
            AI-assisted workflows with tests when it helps delivery. Open to freelance and remote
            roles.
          </motion.p>

          <motion.div variants={childFadeUp} className="mt-10 border-t border-line pt-8">
            <p className="text-sm font-semibold text-ink">{education.degree}</p>
            <p className="mt-1 text-muted">
              {education.school} · {education.period} · {education.grade}
            </p>
          </motion.div>

          <motion.div variants={childFadeUp} className="mt-10 border-t border-line pt-8">
            <p className="text-sm font-semibold tracking-[0.16em] text-cyan-deep uppercase">
              Core stack
            </p>
            <p className="font-display mt-4 text-xl leading-relaxed font-semibold tracking-tight text-ink break-words md:text-2xl">
              {coreStack.map((item, index) => (
                <span key={item} className="inline">
                  {item}
                  {index < coreStack.length - 1 ? (
                    <span className="mx-2 font-normal text-line" aria-hidden>
                      /
                    </span>
                  ) : null}
                </span>
              ))}
            </p>
          </motion.div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {skills.map((skill) => (
              <motion.div key={skill.group} variants={childFadeUp}>
                <h3 className="font-display text-lg font-bold text-ink">{skill.group}</h3>
                <ul className="mt-3 space-y-1.5 text-muted">
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
