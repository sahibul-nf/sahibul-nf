import { motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data/profile'
import { easeOut } from '../lib/motion'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#cases', label: 'Cases' },
  { href: '#notes', label: 'Notes' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Nav({ onOpenResume }: { onOpenResume: () => void }) {
  const { scrollY } = useScroll()
  const background = useTransform(
    scrollY,
    [0, 72],
    ['rgba(245, 250, 251, 0)', 'rgba(245, 250, 251, 0.84)'],
  )
  const blur = useTransform(scrollY, [0, 72], ['blur(0px)', 'blur(14px)'])
  const border = useTransform(
    scrollY,
    [0, 72],
    ['rgba(11, 28, 36, 0)', 'rgba(11, 28, 36, 0.08)'],
  )
  const style = {
    backgroundColor: background,
    backdropFilter: blur,
    WebkitBackdropFilter: blur,
    borderBottomColor: border,
  }

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: easeOut }}
      style={style}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a
          href="#top"
          className="font-display shrink-0 text-sm font-bold tracking-[0.14em] uppercase text-ink md:text-base"
        >
          {profile.brand}
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 + index * 0.05, duration: 0.45, ease: easeOut }}
              className="relative text-sm text-muted transition-colors duration-300 hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan-deep after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-5">
          <motion.button
            type="button"
            onClick={onOpenResume}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 24 }}
            className="shrink-0 text-xs font-medium text-muted transition-colors hover:text-ink sm:text-sm"
          >
            Resume
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 24 }}
            className="shrink-0 rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-foam hover:bg-ink-soft sm:px-4 sm:py-2 sm:text-sm"
          >
            Hire me
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}
