type AnalyticsEnv = ImportMetaEnv

function loadScript(src: string, attributes?: Record<string, string>) {
  if (document.querySelector(`script[src="${src}"]`)) {
    return
  }

  const script = document.createElement('script')
  script.src = src
  script.defer = true

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      script.setAttribute(key, value)
    }
  }

  document.head.appendChild(script)
}

function initCloudflareAnalytics(token: string) {
  loadScript('https://static.cloudflareinsights.com/beacon.min.js', {
    'data-cf-beacon': JSON.stringify({ token }),
  })
}

function initGoogleAnalytics(measurementId: string) {
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`)

  window.dataLayer = window.dataLayer ?? []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId, { anonymize_ip: true })
}

export function initAnalytics() {
  const env = import.meta.env as AnalyticsEnv
  const cfToken = env.VITE_CF_WEB_ANALYTICS_TOKEN?.trim()
  const gaId = env.VITE_GA_MEASUREMENT_ID?.trim()

  if (cfToken) {
    initCloudflareAnalytics(cfToken)
  }

  if (gaId) {
    initGoogleAnalytics(gaId)
  }
}
