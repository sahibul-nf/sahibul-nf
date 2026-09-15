import type { DemoClip } from '../lib/demo'
import { LoomPlayer } from './LoomPlayer'
import { YoutubePlayer } from './YoutubePlayer'

export function DemoPlayer({ clip }: { clip: DemoClip }) {
  switch (clip.provider) {
    case 'loom':
      return <LoomPlayer clip={clip} />
    case 'youtube':
      return <YoutubePlayer clip={clip} />
    default: {
      const _exhaustive: never = clip
      return _exhaustive
    }
  }
}
