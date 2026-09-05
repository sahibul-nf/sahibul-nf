import { useEffect, useRef, type MutableRefObject } from 'react'
import { useMotionValue, useReducedMotion, useSpring, type SpringOptions } from 'framer-motion'

/** Smooth 0→1 easing with zero slope at both ends — softer enter/exit at reach boundary. */
function smoothstep(value: number) {
  const t = Math.max(0, Math.min(1, value))
  return t * t * (3 - 2 * t)
}

const SPRING_SNAPPY: SpringOptions = { stiffness: 260, damping: 22 }
const SPRING_SMOOTH: SpringOptions = {
  stiffness: 95,
  damping: 26,
  mass: 0.72,
  restDelta: 0.05,
  restSpeed: 0.05,
}

export function useCursorSpring({
  mouseX,
  mouseY,
  reach,
  maxForce,
  enabled = true,
  spring = SPRING_SMOOTH,
  influenceScale = 1.3,
}: {
  mouseX: MutableRefObject<number>
  mouseY: MutableRefObject<number>
  reach: number
  maxForce: number
  enabled?: boolean
  spring?: SpringOptions
  /** Extends the soft falloff beyond `reach` for a gentler release. */
  influenceScale?: number
}) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, spring)
  const springY = useSpring(y, spring)

  useEffect(() => {
    if (reduceMotion || !enabled) {
      x.set(0)
      y.set(0)
      return
    }

    const influence = reach * influenceScale

    const resetPosition = () => {
      x.set(0)
      y.set(0)
    }

    const handleMouseMove = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distance = Math.hypot(mouseX.current - centerX, mouseY.current - centerY)

      if (distance < influence) {
        const proximity = 1 - distance / influence
        const force = smoothstep(proximity) * maxForce
        const angle = Math.atan2(mouseY.current - centerY, mouseX.current - centerX)
        x.set(-Math.cos(angle) * force)
        y.set(-Math.sin(angle) * force)
      } else {
        resetPosition()
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', resetPosition)
    window.addEventListener('blur', resetPosition)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.documentElement.removeEventListener('mouseleave', resetPosition)
      window.removeEventListener('blur', resetPosition)
    }
  }, [enabled, influenceScale, maxForce, mouseX, mouseY, reach, reduceMotion, x, y])

  return { ref, springX, springY, reduceMotion }
}

export { SPRING_SNAPPY, SPRING_SMOOTH }
