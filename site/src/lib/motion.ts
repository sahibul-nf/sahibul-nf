export const easeOut = [0.22, 1, 0.36, 1] as const
export const easeSoft = [0.16, 1, 0.3, 1] as const

export const viewportOnce = {
  once: true,
  amount: 0.28,
  margin: '0px 0px -8% 0px',
} as const

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.09, duration: 0.75, ease: easeOut },
  }),
}

export const staggerChildren = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
}

export const childFadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
}
