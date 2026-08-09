import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line bg-foam">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-display text-sm font-bold tracking-[0.14em] uppercase text-ink">
          {profile.brand}
        </p>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with intention in {profile.location}.
        </p>
        <div className="flex gap-5 text-sm text-muted">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
          <a href={profile.links.upwork} target="_blank" rel="noreferrer" className="hover:text-ink">
            Upwork
          </a>
        </div>
      </div>
    </footer>
  )
}
