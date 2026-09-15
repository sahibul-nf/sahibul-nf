import { useEffect, useRef } from 'react'
import type { LoomClip } from '../lib/demo'
import { applySilentPlayback, isLoomPlayerMessage, loomEmbedUrl } from '../lib/loom'

export function LoomPlayer({ clip }: { clip: LoomClip }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const enforce = () => applySilentPlayback(iframe)

    const onMessage = (event: MessageEvent) => {
      if (!isLoomPlayerMessage(event)) return
      const eventName = (event.data as { event?: string }).event
      if (eventName === 'ready' || eventName === 'play') {
        enforce()
      }
    }

    window.addEventListener('message', onMessage)
    const interval = window.setInterval(enforce, 800)
    const stop = window.setTimeout(() => window.clearInterval(interval), 8000)

    return () => {
      window.removeEventListener('message', onMessage)
      window.clearInterval(interval)
      window.clearTimeout(stop)
    }
  }, [clip.id])

  return (
    <div className="loom-embed-shell absolute inset-0 bg-black">
      <iframe
        ref={iframeRef}
        title={`${clip.title} — silent demo`}
        src={loomEmbedUrl(clip.id, true)}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="loom-embed-frame"
      />
    </div>
  )
}
