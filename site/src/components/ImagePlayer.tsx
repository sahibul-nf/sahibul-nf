import type { ImageClip } from '../lib/demo'

export function ImagePlayer({ clip }: { clip: ImageClip }) {
  return (
    <img
      src={clip.src}
      alt={clip.title}
      className="h-full w-full object-contain bg-[#061016]"
    />
  )
}
