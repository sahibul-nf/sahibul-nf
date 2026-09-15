import { useEffect, useRef } from 'react'
import { applySilentYoutubePlayback, youtubeEmbedUrl, type YoutubeClip } from '../lib/demo'

export function YoutubePlayer({ clip }: { clip: YoutubeClip }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const enforce = () => applySilentYoutubePlayback(iframe)

    const onMessage = (event: MessageEvent) => {
      if (typeof event.origin !== 'string' || !event.origin.includes('youtube')) return
      enforce()
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
        src={youtubeEmbedUrl(clip.id, true)}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="loom-embed-frame"
      />
    </div>
  )
}
