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
  subtitle: 'Flutter · Golang · Supabase · Cursor · Claude · Codex',
  summary:
    'Full-stack Flutter engineer with 5+ years shipping production apps (iOS, Android, Web), Golang APIs, and cloud systems. I own features through release for product teams and Upwork clients — using Cursor, Claude, and Codex to move faster, with automated tests to keep quality high. Open to freelance and remote roles.',
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
    'Cursor',
    'Claude',
    'Codex',
    'Automated Testing',
    'Mobile Architecture',
    'System Design',
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
        'Architected a Flutter Web visual workflow studio (102K+ LOC) with an 18-policy canvas, 20+ node types, subflows, Deno-isolated JS sandbox, and live multi-user presence.',
        'Built 5 Deno edge functions with SSRF guards, round-trip YAML workflow blueprints and DBML ERD sync, 38 PostgreSQL migrations (RLS, Vault), and 545 tests deploying to AWS S3/CloudFront.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'Musopen',
      period: 'May 2024 — Jul 2025',
      location: 'Remote',
      highlights: [
        'Shipped iOS WidgetKit and Android Glance home widgets plus Dynamic Island / Live Activities with lock-screen timer drift correction for Musopen Practice.',
        'Built the practice session engine (timer, metronome, waveform recording, S3 attachments) and HTTP/2 networking; 5.0 Upwork rating from the client.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'S2bc Studios',
      period: 'Nov 2022 — Dec 2024',
      location: 'Remote',
      highlights: [
        'Built Cardx (appcardx.com) with Flutter iOS/web, Golang APIs, eBay Browse, collections, wishlist, and sales-history tracking.',
        'Owned Redis caching, PostgreSQL, and Supabase integrations for catalog and marketplace workflows.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'DrugLift',
      period: 'Jun 2023 — Jun 2024',
      location: 'Remote',
      highlights: [
        'Redesigned the DrugLift Flutter driver app for last-mile pharmacy deliveries: 4-tab shell, design system, shimmer loaders, and Flutter 3.10.6.',
        'Built a Hive offline sync queue for signatures, photos, and failed-delivery retries; shipped GetX English/Indonesian localization (260+ strings).',
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
        'Visual workflow studio in Flutter Web: 102K+ LOC, 18-policy canvas, YAML blueprints, Deno sandbox, 545 tests (BonkBytes).',
    },
    {
      name: 'Musopen Practice',
      stack: 'Flutter · WidgetKit · Glance · Live Activities',
      summary:
        'Practice companion for classical musicians: native home widgets, Dynamic Island timer, session recording.',
      link: 'https://play.google.com/store/apps/details?id=com.musopen.practice',
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
  subtitle: 'Flutter · Golang · Supabase · Cursor · Claude · Codex',
  summary:
    'Full-stack Flutter engineer with 5+ years designing, building, and scaling cross-platform apps (iOS, Android, Web), Golang REST APIs, and cloud-backed systems. End-to-end product delivery for remote teams — realtime collaboration, edge execution, PostgreSQL, Redis, CI/CD. Ships faster with Cursor, Claude, and Codex; quality locked with automated tests. Open to freelance and full-time remote roles.',
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
        'Cursor',
        'Claude',
        'Codex',
        'System Design',
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
        'Architected and delivered a full-stack visual workflow studio with 90K+ LOC Dart/Flutter frontend and 12K+ LOC TypeScript/Deno edge backend; built an 18-policy canvas engine, 20+ node types, subflows, and live multi-user presence.',
        'Designed a serverless DAG orchestrator across 5 Deno microservices with an isolate-sandboxed JavaScript runtime, PDF artifact generation, and SSRF guards blocking private CIDRs and cloud metadata.',
        'Built round-trip YAML workflow blueprints and DBML ERD visualization; hardened data isolation with 38 PostgreSQL migrations, Row-Level Security, and Supabase Vault.',
        'Scaled automated testing to 545 test cases and instituted a 2-stage GitHub Actions CI/CD pipeline deploying to AWS S3/CloudFront.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'Musopen',
      period: 'May 2024 — Jul 2025',
      location: 'Remote',
      highlights: [
        'Shipped native home widgets (iOS WidgetKit / SwiftUI, Android Jetpack Glance) and iOS Dynamic Island / Live Activities with lock-screen timer drift correction for Musopen Practice, a practice companion for classical musicians.',
        'Built the Flutter practice engine: count-up/count-down timer, metronome, waveform recording, and S3 session attachments; added Cronet/Cupertino HTTP/2 clients and a Page Object Model integration-test suite.',
        'Prepared TestFlight builds; the client submitted Play Store and App Store production. 5.0 client rating on Upwork.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'S2bc Studios',
      period: 'Nov 2022 — Dec 2024',
      location: 'Remote',
      highlights: [
        'Built Cardx (appcardx.com): Flutter iOS/web clients and Golang REST APIs for collections, wishlist, comments, and marketplace search.',
        'Integrated eBay Browse, Supabase, PostgreSQL, Redis caching, and crawlers for sales history and top-selling cards.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'DrugLift',
      period: 'Jun 2023 — Jun 2024',
      location: 'Remote',
      highlights: [
        'Redesigned the DrugLift Flutter driver app (Android/iOS) for last-mile pharmacy and medical-supply couriers: unified 4-tab shell, centralized theme/typography, shimmer loaders, and a Flutter 3.0 → 3.10.6 upgrade (~18k lines added / 14k deleted across 160+ files).',
        'Built a Hive-backed offline request queue so proof-of-delivery signatures, doorstep photos, and failed-delivery reports persist and auto-retry on reconnect; added a driver-facing queue screen.',
        'Shipped GetX localization from scratch (English / Indonesian, 260+ strings) and tightened barcode/QR scanning with a viewport overlay, debounce, and grouped-package scans.',
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
        'Visual workflow studio in Flutter Web: 102K+ LOC, 18-policy canvas, YAML blueprint + DBML sync, 5 Deno edge functions, 545 tests, AWS CI/CD (BonkBytes).',
    },
    {
      name: 'Musopen Practice',
      stack: 'Flutter, WidgetKit, Glance, ActivityKit',
      summary:
        'Practice companion for classical musicians: iOS/Android home widgets, Dynamic Island Live Activities, session timer, metronome, and practice recordings.',
      link: 'https://play.google.com/store/apps/details?id=com.musopen.practice',
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
        'Multi-platform sports card collection app with eBay marketplace data, inventory tracking, comments, wishlist, and sales-history crawlers.',
      link: 'https://appcardx.com',
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
