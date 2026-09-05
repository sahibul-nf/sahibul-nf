import { useEffect, useRef, type MutableRefObject } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { heroFloatingIcons } from '../data/stack-icons'
import { easeOut } from '../lib/motion'
import { Tooltip } from './Tooltip'

type FloatingIcon = (typeof heroFloatingIcons)[number]

function FloatingIconChip({
  icon,
  mouseX,
  mouseY,
  index,
  iconData,
}: {
  icon: FloatingIcon
  mouseX: MutableRefObject<number>
  mouseY: MutableRefObject<number>
  index: number
  iconData: FloatingIcon
}) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 22 })
  const springY = useSpring(y, { stiffness: 260, damping: 22 })

  const isBack = iconData.depth === 'back'
  const chipSize = isBack ? 'h-11 w-11 md:h-12 md:w-12' : 'h-12 w-12 md:h-14 md:w-14'
  const imageSize = isBack ? 'h-6 w-6 md:h-7 md:w-7' : 'h-7 w-7 md:h-8 md:w-8'

  useEffect(() => {
    if (reduceMotion) return

    const handleMouseMove = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distance = Math.hypot(mouseX.current - centerX, mouseY.current - centerY)
      const reach = isBack ? 110 : 140

      if (distance < reach) {
        const angle = Math.atan2(mouseY.current - centerY, mouseX.current - centerX)
        const force = (1 - distance / reach) * (isBack ? 18 : 28)
        x.set(-Math.cos(angle) * force)
        y.set(-Math.sin(angle) * force)
      } else {
        x.set(0)
        y.set(0)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isBack, mouseX, mouseY, reduceMotion, x, y])

  const chip = (
    <span
      className={`pointer-events-auto flex ${chipSize} cursor-default items-center justify-center rounded-2xl border border-white/90 bg-foam/90 shadow-[0_10px_28px_rgb(11_28_36_/_0.1)] transition-[transform,box-shadow] duration-200 hover:scale-105 hover:shadow-[0_12px_32px_rgb(46_196_214_/_0.2)] ${
        isBack ? 'opacity-45 blur-[0.3px] md:opacity-50' : 'opacity-95'
      }`}
    >
      <img
        src={icon.icon}
        alt=""
        className={imageSize}
        width={32}
        height={32}
        aria-hidden
      />
    </span>
  )

  if (reduceMotion) {
    return (
      <div ref={ref} className={`absolute ${iconData.className}`}>
        <Tooltip content={`Core stack · ${icon.name}`} side="bottom">
          {chip}
        </Tooltip>
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={`absolute ${iconData.className}`}
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.35 + index * 0.08,
        duration: 0.55,
        ease: easeOut,
      }}
    >
      <motion.div
        className="transform-gpu [backface-visibility:hidden]"
        animate={{
          y: [0, isBack ? -5 : -8, 0, isBack ? 5 : 8, 0],
          x: [0, isBack ? 4 : 6, 0, isBack ? -4 : -6, 0],
          rotate: [0, isBack ? 3 : 5, 0, isBack ? -3 : -5, 0],
        }}
        transition={{
          delay: iconData.delay,
          duration: iconData.duration,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        <Tooltip content={`Core stack · ${icon.name}`} side="bottom">
          {chip}
        </Tooltip>
      </motion.div>
    </motion.div>
  )
}

export function HeroFloatingIcons() {
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.current = event.clientX
    mouseY.current = event.clientY
  }

  return (
    <div
      aria-hidden={false}
      onMouseMove={handleMouseMove}
      className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
    >
      {heroFloatingIcons.map((icon, index) => (
        <FloatingIconChip
          key={icon.name}
          icon={icon}
          iconData={icon}
          index={index}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
    </div>
  )
}
