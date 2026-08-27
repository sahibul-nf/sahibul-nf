import type { ResumeContent } from '../data/resume'

export function ResumeDocument({
  data,
  variant,
}: {
  data: ResumeContent
  variant: 'compact' | 'extended'
}) {
  return (
    <article
      className={`resume-document resume-document--${variant} mx-auto max-w-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:rounded-xl sm:p-10 md:p-12 text-ink`}
    >
      <div className="resume-header border-b border-line pb-4 text-left">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {data.name}
        </h1>
        <p className="mt-1 text-base font-semibold text-ink sm:text-lg">
          {data.title} · {data.subtitle}
        </p>
        <p className="resume-contact mt-2 text-xs text-muted sm:text-sm">
          {data.location} · {data.email} · {data.portfolio} · {data.linkedin} · {data.github}
        </p>
      </div>

      <section className="resume-section mt-4 border-b border-line pb-4">
        <h2 className="resume-section-title text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
          Professional Summary
        </h2>
        <p className="resume-body mt-1.5 text-sm leading-snug text-ink/80">{data.summary}</p>
      </section>

      <section className="resume-section mt-4 border-b border-line pb-4">
        <h2 className="resume-section-title text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
          Core Competencies
        </h2>
        <p className="resume-body mt-1.5 text-sm leading-snug text-ink/80">
          {data.coreCompetencies.join(' · ')}
        </p>
      </section>

      {data.skills && data.skills.length > 0 ? (
        <section className="resume-section mt-4 border-b border-line pb-4">
          <h2 className="resume-section-title text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
            Core Technical Skills
          </h2>
          <div className="resume-skills mt-2 space-y-1.5 text-sm">
            {data.skills.map((skillGroup) => (
              <div key={skillGroup.category} className="grid grid-cols-1 sm:grid-cols-4 sm:gap-4">
                <span className="font-semibold text-ink sm:col-span-1">{skillGroup.category}:</span>
                <span className="text-muted sm:col-span-3">{skillGroup.items.join(', ')}</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="resume-section mt-4 border-b border-line pb-4">
        <h2 className="resume-section-title text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
          Professional Experience
        </h2>
        <div className="resume-experience mt-2 space-y-3">
          {data.experience.map((exp) => (
            <div key={`${exp.company}-${exp.period}`} className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h3 className="text-sm font-bold text-ink">
                  {exp.role} — {exp.company} ({exp.location})
                </h3>
                <span className="text-[11px] font-medium text-muted">{exp.period}</span>
              </div>
              <ul className="list-outside list-disc pl-4 space-y-0.5 text-xs text-muted sm:text-sm">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="leading-snug">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {data.earlierExperience ? (
            <p className="resume-earlier text-xs leading-snug text-muted italic">{data.earlierExperience}</p>
          ) : null}
        </div>
      </section>

      <section className="resume-section mt-4 border-b border-line pb-4">
        <h2 className="resume-section-title text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
          Selected Projects
        </h2>
        <div className="resume-projects mt-2 space-y-2">
          {data.selectedProjects.map((project) => (
            <div key={project.name} className="space-y-0.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-bold text-ink">{project.name}</h3>
                {project.link ? <span className="text-[11px] text-muted">{project.link}</span> : null}
              </div>
              <p className="text-xs font-medium text-muted">{project.stack}</p>
              <p className="text-xs leading-snug text-muted">{project.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section mt-4">
        <h2 className="resume-section-title text-xs font-bold tracking-[0.16em] uppercase text-cyan-deep">
          Education
        </h2>
        <div className="resume-education mt-2 flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-sm font-bold text-ink">
            {data.education.degree} — {data.education.school} · {data.education.grade}
          </p>
          <span className="text-[11px] text-muted">{data.education.period}</span>
        </div>
      </section>
    </article>
  )
}
