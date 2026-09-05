import { profile } from '../data/profile'

const siteUrl = profile.links.portfolio

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}/images/avatar.png`,
  jobTitle: profile.role,
  email: profile.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Aceh',
    addressCountry: 'ID',
  },
  sameAs: [
    profile.links.github,
    profile.links.linkedin,
    profile.links.upwork,
    profile.links.contra,
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${profile.brand} — Portfolio`,
  url: siteUrl,
  description: profile.summary,
  author: {
    '@type': 'Person',
    name: profile.name,
  },
}

export function SeoJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
