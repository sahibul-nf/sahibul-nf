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
const HEATMAP_WEEKS = 10

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
  aiVelocityPercent: 96.7,
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

function buildHeatmap(contributions) {
  const today = new Date().toISOString().slice(0, 10)
  const past = contributions.filter((cell) => cell.date <= today)
  const days = past.slice(-HEATMAP_WEEKS * 7)
  const columns = []

  for (let w = 0; w < HEATMAP_WEEKS; w++) {
    const week = []
    for (let d = 0; d < 7; d++) {
      const cell = days[w * 7 + d]
      week.push(cell?.level ?? 0)
    }
    columns.push(week)
  }

  return columns
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
    heatmap: buildHeatmap(contrib.contributions ?? []),
  }
}

async function fetchWakatimeMetrics(existing) {
  const apiKey = process.env.WAKATIME_API_KEY
  if (!apiKey) {
    console.warn('WAKATIME_API_KEY not set — keeping existing Wakatime values')
    return {
      wakatime: existing.wakatime,
      languages: existing.languages,
      aiVelocityPercent: existing.aiVelocityPercent,
    }
  }

  const auth = `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`
  const headers = { Authorization: auth }

  const [allTime, weekStats] = await Promise.all([
    fetchJson('https://wakatime.com/api/v1/users/current/all_time_since_today', headers),
    fetchJson('https://wakatime.com/api/v1/users/current/stats/last_7_days', headers),
  ])

  const wakatime = formatHours(allTime.data?.total_seconds ?? existing.wakatime.totalHours * 3600)
  const languages = pickLanguages(weekStats.data?.languages ?? [])

  const editors = weekStats.data?.editors ?? []
  const agentEditor = editors.find((e) => /agent|cursor|copilot|ai/i.test(e.name))
  const aiVelocityPercent = agentEditor
    ? Math.round(agentEditor.percent * 10) / 10
    : existing.aiVelocityPercent

  return { wakatime, languages, aiVelocityPercent }
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
  }

  await writeFile(outPath, `${JSON.stringify(metrics, null, 2)}\n`, 'utf8')
  console.log(`Wrote ${outPath}`)
  console.log(JSON.stringify(metrics, null, 2))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
