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

export type ImageClip = {
  provider: 'image'
  id: string
  title: string
  src: string
}

export type VideoClip = LoomClip | YoutubeClip
export type DemoClip = VideoClip | ImageClip

export function clipKey(clip: DemoClip) {
  return `${clip.provider}:${clip.id}`
}

export function isImageGallery(clips: readonly DemoClip[]) {
  return clips.length > 0 && clips.every((clip) => clip.provider === 'image')
}

export function demoActionLabel(clips: readonly DemoClip[]) {
  return isImageGallery(clips) ? 'View screens' : 'Watch demo'
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

export function demoEmbedUrl(clip: VideoClip, autoplay: boolean) {
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
