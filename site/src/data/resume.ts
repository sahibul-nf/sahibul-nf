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
  portfolio: 'https://sahibul.dev',
  github: 'https://github.com/sahibul-nf',
  linkedin: 'https://www.linkedin.com/in/sahibul-nf',
  education: {
    school: 'Universitas Islam Negeri Ar-Raniry',
    degree: 'Bachelor of Technology, Information Technology',
    grade: 'GPA 3.68',
    period: '2018 — 2023',
  },
} as const

/** Default export for quick imports — 1-page version */
export const resumeData = {
  ...contact,
  subtitle: 'Flutter · Golang · Supabase · Firebase · AWS',
  summary:
    'Full-stack Flutter engineer with 5+ years shipping production mobile apps (iOS, Android, Web), Golang APIs, and cloud systems on Supabase, Firebase, and AWS. Strong in cross-platform architecture, realtime features, PostgreSQL, Redis, CI/CD, and remote product delivery. Open to freelance and full-time remote roles.',
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
        'Architected a real-time visual workflow engine across 102K+ LOC (Dart/Flutter and TypeScript), with an 18-policy canvas system, bidirectional IaC/DBML sync, and live multi-user collaboration.',
        'Engineered secure Deno/Supabase edge execution with 38 PostgreSQL migrations, RLS, Vault, SSRF guards, and 545 automated tests in GitHub Actions CI/CD.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'Musopen',
      period: 'May 2024 — Jul 2025',
      location: 'Remote',
      highlights: [
        'Shipped cross-platform features, performance fixes, and UI refinements for a global classical music platform.',
        'Earned a 5.0 client rating on Upwork through fast iteration with design and product stakeholders.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'S2bc Studios',
      period: 'Nov 2022 — Dec 2024',
      location: 'Remote',
      highlights: [
        'Built Cardx (Flutter + Golang) with eBay API, Supabase, PostgreSQL, and Redis for high-volume catalog workflows.',
        'Owned iOS/Web clients and backend integrations for marketplace data, caching, and inventory tracking.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'DrugLift',
      period: 'Jun 2023 — Jun 2024',
      location: 'Remote',
      highlights: [
        'Led MVP redesign and codebase refactor aligned with an updated product vision and release roadmap.',
        'Implemented app-wide localization with GetX and offline-friendly UX for slow mobile networks.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Kopwar',
      period: 'Jul 2022 — Oct 2022',
      location: 'Remote',
      highlights: [
        'Built Flutter e-commerce checkout flows and realtime in-app messaging via Socket.io.',
      ],
    },
    {
      role: 'Mobile Developer',
      company: 'LingoTalk',
      period: 'Aug 2021 — Dec 2021',
      location: 'Remote',
      highlights: [
        'Contributed Flutter feature modules and UI implementation for a language-learning mobile app.',
      ],
    },
  ],
  selectedProjects: [
    {
      name: 'Node-based Workflow Canvas',
      stack: 'Flutter · Supabase · Edge Functions · AWS',
      summary:
        'Real-time visual orchestration platform: 102K+ LOC, 18-policy canvas, 5 Deno edge functions, 545 tests (BonkBytes).',
    },
    {
      name: 'Nourdaily',
      stack: 'Flutter · Content Platform',
      summary: 'Daily.dev-inspired discovery platform for the Muslim community.',
      link: 'https://nourdaily.com',
    },
    {
      name: 'hiQuran',
      stack: 'Flutter · GetX · Supabase · Firebase',
      summary: 'Open-source digital Quran app with 65+ GitHub stars.',
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
        'Architected and delivered a full-stack workflow platform with 90K+ LOC Dart/Flutter frontend and 12K+ LOC TypeScript/Deno edge backend; built an 18-policy canvas engine with bidirectional IaC/DBML sync and live multi-user collaboration.',
        'Designed a serverless DAG orchestrator across 5 Deno microservices with script sandboxing, SSRF defense, and signed artifact generation for workflow execution.',
        'Hardened the data layer with 38 PostgreSQL migrations, Row-Level Security for multi-tenant collaboration, and Supabase Vault for encrypted credential isolation.',
        'Scaled automated testing to 545 test cases and instituted a 2-stage GitHub Actions CI/CD pipeline deploying to AWS S3/CloudFront.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'Musopen',
      period: 'May 2024 — Jul 2025',
      location: 'Remote',
      highlights: [
        'Delivered cross-platform Flutter features, performance improvements, and production bug fixes for a global classical music platform.',
        'Partnered with design and product stakeholders in fast iteration cycles; earned a 5.0 client rating on Upwork.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'S2bc Studios',
      period: 'Nov 2022 — Dec 2024',
      location: 'Remote',
      highlights: [
        'Built Cardx, a cross-platform sports card collection product for iOS and Web using Flutter clients and Golang REST APIs.',
        'Integrated eBay marketplace APIs, Supabase, PostgreSQL, and Redis caching for high-volume catalog browsing and inventory workflows.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'DrugLift',
      period: 'Jun 2023 — Jun 2024',
      location: 'Remote',
      highlights: [
        'Led a full Flutter MVP redesign and major codebase refactor aligned with an updated product vision.',
        'Implemented app-wide localization with GetX and optimized UX for slow or intermittent mobile network conditions.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Kopwar',
      period: 'Jul 2022 — Oct 2022',
      location: 'Remote',
      highlights: [
        'Developed e-commerce checkout flows and realtime in-app messaging in Flutter with Socket.io backend integration.',
      ],
    },
    {
      role: 'Mobile Developer',
      company: 'LingoTalk',
      period: 'Aug 2021 — Dec 2021',
      location: 'Remote',
      highlights: [
        'Contributed Flutter feature modules and UI implementation for a language-learning mobile application.',
      ],
    },
  ],
  selectedProjects: [
    {
      name: 'Node-based Workflow Canvas',
      stack: 'Flutter, Supabase, Edge Functions, Realtime, AWS',
      summary:
        'Real-time visual orchestration and IaC platform: 102K+ LOC, 18-policy canvas, 5 Deno edge functions, 545 automated tests, AWS CI/CD (BonkBytes).',
    },
    {
      name: 'Nourdaily',
      stack: 'Flutter, Dart, Content Platform',
      summary:
        'Daily.dev-inspired content discovery platform for the Muslim community with curated audio, video, reading journeys, and upvoting.',
      link: 'https://nourdaily.com',
    },
    {
      name: 'Cardx Collectibles Platform',
      stack: 'Flutter, Golang, Supabase, Redis, PostgreSQL',
      summary:
        'Multi-platform sports card collection app with live marketplace pricing, inventory tracking, and performance-focused caching.',
    },
    {
      name: 'hiQuran',
      stack: 'Flutter, GetX, Supabase, Firebase',
      summary:
        'Open-source digital Quran app with tafsir, prayer times, and audio recitation; 65+ GitHub stars.',
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
