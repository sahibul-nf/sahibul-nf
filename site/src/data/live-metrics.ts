import metrics from './live-metrics.json'

export type HeatmapCell = {
  date: string
  count: number
  level: number
}

export type HeatmapWeek = HeatmapCell[]

export type LiveMetrics = {
  updatedAt: string
  github: {
    contributionsYtd: number
    publicRepos: number
    hiQuranStars: number
    heatmap: HeatmapWeek[] | number[][]
  }
  wakatime: {
    totalHours: number
    totalLabel: string
  }
  languages: Array<{ name: string; percent: number }>
  aiAssistedPercent: number | null
  ranges?: {
    heatmap: string
    languages: string
    aiAssisted: string
  }
}

export const liveMetrics = metrics as LiveMetrics

export function formatStat(value: number, suffix = ''): string {
  return `${value.toLocaleString('en-US')}${suffix}`
}

/** Supports legacy number[][] heatmaps until the next metrics sync. */
export function normalizeHeatmap(heatmap: LiveMetrics['github']['heatmap']): HeatmapWeek[] {
  if (heatmap.length === 0) return []

  const first = heatmap[0]
  if (first.length > 0 && typeof first[0] === 'number') {
    return (heatmap as number[][]).map((week) =>
      week.map((level) => ({ date: '', count: 0, level })),
    )
  }

  return heatmap as HeatmapWeek[]
}

export function formatContributionTooltip(date: string, count: number): string {
  if (!date) return 'Contribution data'

  const formatted = new Date(`${date}T12:00:00`).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  if (count === 0) return `No contributions on ${formatted}`
  const noun = count === 1 ? 'contribution' : 'contributions'
  return `${count} ${noun} on ${formatted}`
}

export function buildHeatmapMonthLabels(weeks: HeatmapWeek[]): Array<{ label: string; show: boolean }> {
  let prevMonth = -1

  return weeks.map((week) => {
    const firstDate = week[0]?.date
    if (!firstDate) return { label: '', show: false }

    const month = new Date(`${firstDate}T12:00:00`).getMonth()
    const show = month !== prevMonth
    prevMonth = month

    const label = show
      ? new Date(`${firstDate}T12:00:00`).toLocaleDateString('en-US', { month: 'short' })
      : ''

    return { label, show }
  })
}
