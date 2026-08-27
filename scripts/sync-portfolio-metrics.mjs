#!/usr/bin/env node
/**
 * Fetches GitHub + Wakatime metrics and writes site/src/data/live-metrics.json.
 * Run locally with WAKATIME_API_KEY + GH_TOKEN, or via .github/workflows/waka.yml.
 */

import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const outPath = join(root, 'site/src/data/live-metrics.json')

const GITHUB_USER = 'sahibul-nf'
const HIGHLIGHT_REPO = 'hiQuran'
const WAKATIME_RANGE = 'last_year'

const defaultMetrics = {
  updatedAt: new Date().toISOString(),
  github: {
    contributionsYtd: 919,
    publicRepos: 61,
    hiQuranStars: 65,
    heatmap: [],
  },
  wakatime: {
    totalHours: 4683,
    totalLabel: '4,683+ hrs',
  },
  languages: [
    { name: 'Dart', percent: 44 },
    { name: 'TypeScript', percent: 20 },
    { name: 'Golang', percent: 18 },
  ],
  aiAssistedPercent: 96.7,
  ranges: {
    heatmap: 'ytd',
    languages: 'last_12_months',
    aiAssisted: 'last_12_months',
  },
}

async function loadExisting() {
  try {
    const raw = await readFile(outPath, 'utf8')
    return JSON.parse(raw)
  } catch {
    return structuredClone(defaultMetrics)
  }
}

async function fetchJson(url, headers = {}) {
  const res = await fetch(url, { headers })
  if (!res.ok) {
    throw new Error(`${url} → ${res.status}`)
  }
  return res.json()
}

/** Full calendar year-to-date, grouped into week columns (scroll horizontally in UI). */
function buildHeatmapYtd(contributions) {
  const today = new Date().toISOString().slice(0, 10)
  const past = contributions.filter((cell) => cell.date <= today)
  const columns = []

  for (let i = 0; i < past.length; i += 7) {
    const week = []
    for (let d = 0; d < 7; d++) {
      week.push(past[i + d]?.level ?? 0)
    }
    columns.push(week)
  }

  return columns
}

function computeAiAssistedPercent(statsData) {
  const ai =
    statsData?.ai_line_changes_total ??
    (statsData?.ai_additions ?? 0) + (statsData?.ai_deletions ?? 0)
  const human = (statsData?.human_additions ?? 0) + (statsData?.human_deletions ?? 0)
  const total = ai + human
  if (total <= 0) return null
  return Math.round((ai / total) * 1000) / 10
}

function formatHours(seconds) {
  const hours = Math.floor(seconds / 3600)
  return {
    totalHours: hours,
    totalLabel: `${hours.toLocaleString('en-US')}+ hrs`,
  }
}

function pickLanguages(statsLanguages) {
  const skip = new Set(['Other', 'Markdown', 'Text', 'JSON', 'YAML', 'XML'])
  const displayNames = {
    Dart: 'Dart',
    TypeScript: 'TypeScript',
    Go: 'Golang',
    Golang: 'Golang',
  }

  const picked = statsLanguages
    .filter((lang) => !skip.has(lang.name))
    .map((lang) => ({
      name: displayNames[lang.name] ?? lang.name,
      percent: Math.round(lang.percent),
    }))
    .slice(0, 3)

  return picked.length >= 3 ? picked : defaultMetrics.languages
}

async function fetchGitHubMetrics(year) {
  const headers = {}
  if (process.env.GH_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GH_TOKEN}`
  }

  const [contrib, user, hiQuran] = await Promise.all([
    fetchJson(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=${year}`),
    fetchJson(`https://api.github.com/users/${GITHUB_USER}`, headers),
    fetchJson(`https://api.github.com/repos/${GITHUB_USER}/${HIGHLIGHT_REPO}`, headers),
  ])

  const contributionsYtd = contrib.total?.[String(year)] ?? contrib.total?.lastYear ?? 0

  return {
    contributionsYtd,
    publicRepos: user.public_repos ?? defaultMetrics.github.publicRepos,
    hiQuranStars: hiQuran.stargazers_count ?? defaultMetrics.github.hiQuranStars,
    heatmap: buildHeatmapYtd(contrib.contributions ?? []),
  }
}

async function fetchWakatimeMetrics(existing) {
  const apiKey = process.env.WAKATIME_API_KEY
  if (!apiKey) {
    console.warn('WAKATIME_API_KEY not set — keeping existing Wakatime values')
    return {
      wakatime: existing.wakatime,
      languages: existing.languages,
      aiAssistedPercent: existing.aiAssistedPercent ?? existing.aiVelocityPercent,
      ranges: existing.ranges ?? defaultMetrics.ranges,
    }
  }

  const auth = `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`
  const headers = { Authorization: auth }

  const [allTime, yearStats] = await Promise.all([
    fetchJson('https://wakatime.com/api/v1/users/current/all_time_since_today', headers),
    fetchJson(`https://wakatime.com/api/v1/users/current/stats/${WAKATIME_RANGE}`, headers),
  ])

  const wakatime = formatHours(allTime.data?.total_seconds ?? existing.wakatime.totalHours * 3600)
  const languages = pickLanguages(yearStats.data?.languages ?? [])
  const aiAssistedPercent =
    computeAiAssistedPercent(yearStats.data) ??
    existing.aiAssistedPercent ??
    existing.aiVelocityPercent ??
    defaultMetrics.aiAssistedPercent

  return {
    wakatime,
    languages,
    aiAssistedPercent,
    ranges: defaultMetrics.ranges,
  }
}

async function main() {
  const existing = await loadExisting()
  const year = new Date().getFullYear()

  const github = await fetchGitHubMetrics(year)
  const wakatimeBlock = await fetchWakatimeMetrics(existing)

  const metrics = {
    updatedAt: new Date().toISOString(),
    github,
    ...wakatimeBlock,
    ranges: wakatimeBlock.ranges ?? defaultMetrics.ranges,
  }

  await writeFile(outPath, `${JSON.stringify(metrics, null, 2)}\n`, 'utf8')
  console.log(`Wrote ${outPath}`)
  console.log(JSON.stringify(metrics, null, 2))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
