import metrics from './live-metrics.json'

export type LiveMetrics = {
  updatedAt: string
  github: {
    contributionsYtd: number
    publicRepos: number
    hiQuranStars: number
    heatmap: number[][]
  }
  wakatime: {
    totalHours: number
    totalLabel: string
  }
  languages: Array<{ name: string; percent: number }>
  aiVelocityPercent: number
}

export const liveMetrics = metrics as LiveMetrics

export function formatStat(value: number, suffix = ''): string {
  return `${value.toLocaleString('en-US')}${suffix}`
}
