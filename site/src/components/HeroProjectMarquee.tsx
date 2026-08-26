import { projects } from '../data/profile'

const marqueeLabels: Record<(typeof projects)[number]['id'], string> = {
  canvas: 'Workflow Canvas',
  nourdaily: 'Nourdaily',
  pukatflow: 'PukatFlow',
  hiquran: 'hiQuran',
  cardx: 'Cardx',
  'solo-dev-ai-kit': 'solo-dev-ai-kit',
}

function MarqueeTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-6 pr-6 md:gap-10 md:pr-10"
      aria-hidden={ariaHidden || undefined}
    >
      {projects.map((project, index) => (
        <span key={`${project.id}-${ariaHidden ? 'clone' : 'live'}`} className="inline-flex items-center gap-6 md:gap-10">
          <a
            href="#work"
            className="font-display whitespace-nowrap text-[clamp(1.75rem,4.5vw,3.25rem)] font-bold tracking-[-0.03em] text-ink/24 transition-colors duration-300 hover:text-cyan-deep"
            tabIndex={ariaHidden ? -1 : undefined}
          >
            {marqueeLabels[project.id]}
          </a>
          <span
            className={`text-[clamp(1rem,2vw,1.35rem)] ${index % 2 === 0 ? 'text-cyan/35' : 'text-amber/45'}`}
            aria-hidden
          >
            ✦
          </span>
        </span>
      ))}
    </div>
  )
}

export function HeroProjectMarquee() {
  const projectNames = projects.map((project) => marqueeLabels[project.id]).join(', ')

  return (
    <div
      className="relative mt-8 w-full overflow-hidden py-2 md:mt-10 md:py-3"
      aria-label={`Selected projects: ${projectNames}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f5fafb] to-transparent md:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f5fafb] to-transparent md:w-24"
      />

      <div className="hero-marquee-track flex w-max items-center">
        <MarqueeTrack />
        <MarqueeTrack ariaHidden />
      </div>
    </div>
  )
}
