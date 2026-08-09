import { motion } from 'framer-motion'
import { education, profile, skills } from '../data/profile'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-foam py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        <div className="md:col-span-5">
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan-deep uppercase">
            About
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Engineer from Aceh with a product eye
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 overflow-hidden"
          >
            <img
              src="/images/avatar.png"
              alt={profile.name}
              className="aspect-[4/5] w-full max-w-sm object-cover grayscale transition-[filter,transform] duration-700 hover:scale-[1.02] hover:grayscale-0"
            />
          </motion.div>
        </div>

        <div className="md:col-span-7 md:pt-14">
          <p className="text-lg leading-relaxed text-muted md:text-xl">
            I started in frontend web in 2018, then found my lane in Flutter. Since 2021 I’ve shipped
            production apps across e-commerce, learning, sports collectibles, and faith tools —
            often owning both the mobile experience and the Golang services behind it.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted md:text-xl">
            I care about clean architecture, thoughtful UI, and APIs that stay boringly reliable.
            Currently open for freelance projects and remote roles.
          </p>

          <div className="mt-10 border-t border-line pt-8">
            <p className="text-sm font-semibold text-ink">{education.degree}</p>
            <p className="mt-1 text-muted">
              {education.school} · {education.period} · {education.grade}
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.group}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <h3 className="font-display text-lg font-bold text-ink">{skill.group}</h3>
                <ul className="mt-3 space-y-1.5 text-muted">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
