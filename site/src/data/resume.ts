export type ResumeExperience = {
  role: string
  company: string
  period: string
  location: string
  highlights: readonly string[]
}

export type ResumeProjectLine = {
  name: string
  stack: string
  summary: string
  link?: string
}

export type ResumeContent = {
  name: string
  title: string
  subtitle: string
  location: string
  email: string
  portfolio: string
  github: string
  linkedin: string
  summary: string
  coreCompetencies: readonly string[]
  skills?: readonly { category: string; items: readonly string[] }[]
  experience: readonly ResumeExperience[]
  earlierExperience?: string
  selectedProjects: readonly ResumeProjectLine[]
  education: {
    school: string
    degree: string
    grade: string
    period: string
  }
}

const contact = {
  name: 'Sahibul Nuzul Firdaus',
  title: 'Full-Stack Flutter Engineer',
  location: 'Aceh, Indonesia',
  email: 'sahibulnuzulfirdaus13@gmail.com',
  portfolio: 'https://sahibul-nf-portfolio.netlify.app',
  github: 'https://github.com/sahibul-nf',
  linkedin: 'https://www.linkedin.com/in/sahibul-nf',
  education: {
    school: 'Universitas Islam Negeri Ar-Raniry',
    degree: 'Bachelor of Technology, Information Technology',
    grade: 'GPA 3.68',
    period: '2018 — 2023',
  },
} as const

/** Default export for quick imports — 1-page version with quantifiable impact */
export const resumeData = {
  ...contact,
  subtitle: 'Flutter · Golang · Supabase · Firebase · AWS',
  summary:
    'Full-stack Flutter engineer with 5+ years shipping 6+ production mobile apps (iOS, Android, Web), Golang APIs, and cloud systems on Supabase, Firebase, and AWS. Strong in cross-platform architecture, realtime features, PostgreSQL, Redis, CI/CD, and remote product delivery. Open to freelance and full-time remote roles.',
  coreCompetencies: [
    'Flutter',
    'Dart',
    'Golang',
    'Supabase',
    'Firebase',
    'PostgreSQL',
    'Redis',
    'REST APIs',
    'Realtime Systems',
    'AWS',
    'Docker',
    'CI/CD',
    'Mobile Architecture',
    'System Design',
    'Automated Testing',
    'Riverpod',
    'GetX',
    'Edge Functions',
  ],
  experience: [
    {
      role: 'Full-Stack Flutter Developer',
      company: 'BonkBytes',
      period: '2024 — Present',
      location: 'Remote',
      highlights: [
        'Architected and shipped a production node-based workflow canvas in Flutter with 10+ custom node types, cloud execution, and realtime collaboration.',
        'Delivered 8+ Supabase microservices, edge functions, secure credential handling, and AWS deployment pipelines with 99.9% uptime.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'Musopen',
      period: 'May 2024 — Jul 2025',
      location: 'Remote',
      highlights: [
        'Shipped cross-platform features, performance fixes, and UI refinements for a global classical music platform serving 100k+ monthly active users.',
        'Earned a 5.0 client rating on Upwork across 10+ shipped milestone releases with fast turnaround times.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'S2bc Studios',
      period: 'Nov 2022 — Dec 2024',
      location: 'Remote',
      highlights: [
        'Built Cardx (Flutter + Golang) with eBay API, Supabase, PostgreSQL, and Redis, reducing catalog query latency by 45% under 10k+ items.',
        'Owned iOS/Web clients and backend integrations for live marketplace pricing, caching layers, and inventory management.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'DrugLift',
      period: 'Jun 2023 — Jun 2024',
      location: 'Remote',
      highlights: [
        'Led MVP redesign and refactored 25+ screens, reducing crash rates by 35% and improving launch time by 40%.',
        'Implemented app-wide localization across 2 languages with GetX and offline-friendly caching for low-bandwidth users.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Kopwar',
      period: 'Jul 2022 — Oct 2022',
      location: 'Remote',
      highlights: [
        'Built Flutter e-commerce checkout flows and realtime messaging via Socket.io with sub-second message delivery latency.',
      ],
    },
    {
      role: 'Mobile Developer',
      company: 'LingoTalk',
      period: 'Aug 2021 — Dec 2021',
      location: 'Remote',
      highlights: [
        'Developed 15+ interactive learning feature modules and responsive UI components for a 50k+ download language-learning mobile app.',
      ],
    },
  ],
  selectedProjects: [
    {
      name: 'Node-based Workflow Canvas',
      stack: 'Flutter · Supabase · Edge Functions · AWS',
      summary: 'Production visual workflow builder with cloud step execution and realtime collaboration (BonkBytes).',
    },
    {
      name: 'Nourdaily',
      stack: 'Flutter · Content Platform',
      summary: 'Daily.dev-inspired content discovery platform for Muslim community with 1000+ curated entries.',
      link: 'https://nourdaily.com',
    },
    {
      name: 'hiQuran',
      stack: 'Flutter · GetX · Supabase · Firebase',
      summary: 'Open-source digital Quran application with 65+ GitHub stars and 114 surahs with full tafsir.',
      link: 'https://github.com/sahibul-nf/hiQuran',
    },
  ],
  education: contact.education,
} satisfies ResumeContent

/** Full history — optimized for a 2-page PDF export */
export const resumeExtended: ResumeContent = {
  ...contact,
  subtitle: 'Mobile Development · Golang · Supabase · Firebase · AWS',
  summary:
    'Full-stack Flutter engineer with 5+ years of experience designing, building, and scaling cross-platform mobile apps (iOS, Android, Web), Golang REST APIs, and cloud-backed systems on Supabase, Firebase, and AWS. Experienced in end-to-end product delivery — UI architecture, realtime collaboration, edge execution, PostgreSQL, Redis caching, CI/CD, and async remote delivery. Open to freelance and full-time remote roles.',
  coreCompetencies: [
    'Flutter',
    'Dart',
    'Golang',
    'Supabase',
    'Firebase',
    'PostgreSQL',
    'Redis',
    'REST APIs',
    'Realtime Systems',
    'AWS',
    'Docker',
    'CI/CD',
    'Mobile Architecture',
    'Cross-Platform Development',
    'System Design',
    'Automated Testing',
    'TypeScript',
    'Riverpod',
    'GetX',
    'Socket.io',
    'Edge Functions',
    'Agile Delivery',
  ],
  skills: [
    {
      category: 'Mobile & Frontend',
      items: [
        'Flutter (iOS, Android, Web)',
        'Dart',
        'Riverpod',
        'GetX',
        'TypeScript',
        'Vue/Nuxt',
        'Responsive UI',
        'Animations',
      ],
    },
    {
      category: 'Backend & Cloud',
      items: [
        'Golang (Gin)',
        'Supabase (Auth, Realtime, Edge Functions)',
        'Firebase (Auth, Firestore, Cloud Functions)',
        'PostgreSQL',
        'Redis',
        'REST APIs',
        'Socket.io',
        'AWS',
        'Docker',
        'CI/CD',
      ],
    },
    {
      category: 'Practices & Tools',
      items: [
        'System Design',
        'AI-assisted Engineering',
        'Automated Testing',
        'Git/GitHub',
        'Figma',
        'Agile',
        'Async Remote Delivery',
      ],
    },
  ],
  experience: [
    {
      role: 'Full-Stack Flutter Developer',
      company: 'BonkBytes',
      period: '2024 — Present',
      location: 'Remote',
      highlights: [
        'Architected and shipped a production node-based workflow canvas in Flutter with 10+ custom node types, cloud step execution, and realtime multi-user collaboration.',
        'Built 8+ Supabase-backed microservices, secure credential handling, edge execution functions, and AWS deployment pipelines with 99.9% uptime.',
        'Adopted AI-assisted delivery workflows with automated testing to maintain shipping velocity, delivering 15+ production iterations with zero critical regressions.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'Musopen',
      period: 'May 2024 — Jul 2025',
      location: 'Remote',
      highlights: [
        'Delivered cross-platform Flutter features, performance improvements, and production bug fixes for a global classical music platform serving 100k+ monthly active users.',
        'Partnered with design and product stakeholders in fast iteration cycles; earned a 5.0 client rating on Upwork across 10+ milestones.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'S2bc Studios',
      period: 'Nov 2022 — Dec 2024',
      location: 'Remote',
      highlights: [
        'Built Cardx, a cross-platform sports card collection product for iOS and Web using Flutter clients and Golang REST APIs, indexing 10k+ collectible cards.',
        'Integrated eBay marketplace APIs, Supabase, PostgreSQL, and Redis caching, reducing catalog query latency by 45% under heavy load.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'DrugLift',
      period: 'Jun 2023 — Jun 2024',
      location: 'Remote',
      highlights: [
        'Led a full Flutter MVP redesign and refactored 25+ screens, reducing crash rates by 35% and improving cold launch speed by 40%.',
        'Implemented app-wide localization across 2 languages with GetX and optimized UX caching for slow or intermittent mobile networks.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Kopwar',
      period: 'Jul 2022 — Oct 2022',
      location: 'Remote',
      highlights: [
        'Developed e-commerce checkout flows and realtime in-app messaging in Flutter with Socket.io backend integration and sub-second message sync.',
      ],
    },
    {
      role: 'Mobile Developer',
      company: 'LingoTalk',
      period: 'Aug 2021 — Dec 2021',
      location: 'Remote',
      highlights: [
        'Contributed 15+ Flutter feature modules and UI components for a language-learning mobile application with 50k+ downloads.',
      ],
    },
  ],
  selectedProjects: [
    {
      name: 'Node-based Workflow Canvas',
      stack: 'Flutter, Supabase, Edge Functions, Realtime, AWS',
      summary:
        'Production visual workflow builder with cloud execution, credential management, and realtime collaboration (BonkBytes).',
    },
    {
      name: 'Nourdaily',
      stack: 'Flutter, Dart, Content Platform',
      summary:
        'Daily.dev-inspired content discovery platform for the Muslim community with 1000+ curated articles, audio, and video.',
      link: 'https://nourdaily.com',
    },
    {
      name: 'Cardx Collectibles Platform',
      stack: 'Flutter, Golang, Supabase, Redis, PostgreSQL',
      summary:
        'Multi-platform sports card collection app with live marketplace pricing, inventory tracking, and performance-focused caching for 10k+ cards.',
    },
    {
      name: 'hiQuran',
      stack: 'Flutter, GetX, Supabase, Firebase',
      summary:
        'Open-source digital Quran app with tafsir, prayer times, and audio recitation; 65+ GitHub stars and 114 surahs.',
      link: 'https://github.com/sahibul-nf/hiQuran',
    },
    {
      name: 'PukatFlow',
      stack: 'Android, AI Assistant, Ledger',
      summary:
        'Pilot ledger app for boat operators with trip tracking, cash book, AI-assisted entries, and offline-friendly workflows.',
      link: 'https://pukatflow.netlify.app',
    },
  ],
  education: contact.education,
}

export type ResumeVariant = 'compact' | 'extended'

export function getResumeContent(variant: ResumeVariant): ResumeContent {
  return variant === 'extended' ? resumeExtended : resumeData
}
