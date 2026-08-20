import { useState } from 'react'

type ProjectMediaProps = {
  src: string
  title: string
}

export function ProjectMedia({ src, title }: ProjectMediaProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="flex h-full w-full flex-col justify-end bg-[linear-gradient(135deg,#0b1c24_0%,#1496a8_48%,#e8a54b_100%)] p-6 md:p-8"
        role="img"
        aria-label={`${title} preview unavailable`}
      >
        <p className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
          Preview unavailable
        </p>
        <p className="font-display mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
          {title}
        </p>
      </div>
    )
  }

  return (
    <>
      <img
        src={src}
        alt={`${title} preview`}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        loading="lazy"
        onError={() => setFailed(true)}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
    </>
  )
}
