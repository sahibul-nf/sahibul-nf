import { useId, type ReactNode } from 'react'

type TooltipProps = {
  content: ReactNode
  children: ReactNode
  className?: string
  side?: 'top' | 'bottom'
  fullWidth?: boolean
}

export function Tooltip({
  content,
  children,
  className = '',
  side = 'top',
  fullWidth = false,
}: TooltipProps) {
  const id = useId()

  const position =
    side === 'top'
      ? 'bottom-full left-1/2 mb-1.5 -translate-x-1/2'
      : 'top-full left-1/2 mt-1.5 -translate-x-1/2'

  const wrapperClass = fullWidth
    ? `group/tooltip relative flex w-full min-w-0 ${className}`
    : `group/tooltip relative inline-flex ${className}`

  const triggerClass = fullWidth ? 'flex w-full min-w-0' : 'inline-flex'

  return (
    <span className={wrapperClass}>
      <span aria-describedby={id} className={triggerClass}>
        {children}
      </span>
      <span
        id={id}
        role="tooltip"
        className={`pointer-events-none absolute ${position} z-50 w-max max-w-[14rem] rounded-lg border border-line/80 bg-ink px-2 py-1.5 text-center text-[10px] leading-snug font-medium text-foam opacity-0 shadow-lg transition-opacity duration-150 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100`}
      >
        {content}
      </span>
    </span>
  )
}
