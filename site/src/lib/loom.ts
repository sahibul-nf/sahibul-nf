export const LOOM_PLAYBACK_RATE = 1.5

export function loomEmbedUrl(loomId: string, autoplay: boolean) {
  const params = new URLSearchParams({
    hide_owner: 'true',
    hide_title: 'true',
    hide_share: 'true',
    hide_speed: 'true',
    hideEmbedTopBar: 'true',
    muted: '1',
  })
  if (autoplay) params.set('autoplay', '1')
  return `https://www.loom.com/embed/${loomId}?${params.toString()}`
}

function postLoom(iframe: HTMLIFrameElement, method: string, value?: unknown) {
  const payload =
    value === undefined
      ? { context: 'player.js', method }
      : { context: 'player.js', method, value }
  iframe.contentWindow?.postMessage(payload, 'https://www.loom.com')
}

/** Mute is supported by Loom embed params + player.js. Playback rate is requested; Loom has no official embed speed param. */
export function applySilentPlayback(iframe: HTMLIFrameElement) {
  postLoom(iframe, 'mute')
  postLoom(iframe, 'setVolume', 0)
  postLoom(iframe, 'setPlaybackRate', LOOM_PLAYBACK_RATE)
}

export function isLoomPlayerMessage(event: MessageEvent): boolean {
  if (event.origin !== 'https://www.loom.com') return false
  const data = event.data
  return Boolean(data && typeof data === 'object' && data.context === 'player.js')
}
