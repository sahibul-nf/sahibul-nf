import { loomEmbedUrl } from './loom'

export const DEMO_PLAYBACK_RATE = 1.5

export type LoomClip = {
  provider: 'loom'
  id: string
  title: string
}

export type YoutubeClip = {
  provider: 'youtube'
  id: string
  title: string
}

export type DemoClip = LoomClip | YoutubeClip

export function clipKey(clip: DemoClip) {
  return `${clip.provider}:${clip.id}`
}

export function youtubeEmbedUrl(videoId: string, autoplay: boolean) {
  const params = new URLSearchParams({
    mute: '1',
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
    controls: '1',
    enablejsapi: '1',
  })
  if (autoplay) params.set('autoplay', '1')
  if (typeof window !== 'undefined') params.set('origin', window.location.origin)
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`
}

export function demoEmbedUrl(clip: DemoClip, autoplay: boolean) {
  switch (clip.provider) {
    case 'loom':
      return loomEmbedUrl(clip.id, autoplay)
    case 'youtube':
      return youtubeEmbedUrl(clip.id, autoplay)
    default: {
      const _exhaustive: never = clip
      return _exhaustive
    }
  }
}

function postYoutube(iframe: HTMLIFrameElement, func: string, args: unknown[] = []) {
  iframe.contentWindow?.postMessage(
    JSON.stringify({ event: 'command', func, args }),
    '*',
  )
}

export function applySilentYoutubePlayback(iframe: HTMLIFrameElement) {
  postYoutube(iframe, 'mute')
  postYoutube(iframe, 'setVolume', [0])
  postYoutube(iframe, 'setPlaybackRate', [DEMO_PLAYBACK_RATE])
}
