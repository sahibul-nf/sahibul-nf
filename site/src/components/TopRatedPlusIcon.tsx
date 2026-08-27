type TopRatedPlusIconProps = {
  className?: string
  size?: number
}

/** Official-style Upwork Top Rated Plus hexagon badge */
export function TopRatedPlusIcon({ className = '', size = 14 }: TopRatedPlusIconProps) {
  return (
    <img
      src="/images/top-rated-plus.png"
      alt=""
      className={`shrink-0 ${className}`}
      width={size}
      height={size}
      aria-hidden
    />
  )
}
