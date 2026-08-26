export const resumeData = {
  name: 'Sahibul Nuzul Firdaus',
  title: 'Full-Stack Flutter Engineer | Supabase, Firebase & Go',
  location: 'Aceh, Indonesia',
  email: 'sahibulnuzulfirdaus13@gmail.com',
  portfolio: 'https://sahibul-nf-portfolio.netlify.app',
  github: 'https://github.com/sahibul-nf',
  linkedin: 'https://www.linkedin.com/in/sahibul-nf',
  summary:
    'Full-stack Flutter engineer with 5 years of professional experience designing, building, and scaling cross-platform mobile apps, realtime features, and reliable cloud backends (Golang, Supabase, Firebase, AWS). Experienced in end-to-end product delivery from UI architecture to edge execution and API integrations.',
  skills: [
    {
      category: 'Mobile & Frontend',
      items: ['Flutter (iOS/Android/Web)', 'Dart', 'Riverpod', 'GetX', 'TypeScript', 'Vue/Nuxt', 'Responsive UI & Animations'],
    },
    {
      category: 'Backend & Cloud',
      items: ['Golang (Gin)', 'Supabase (BaaS, Edge Functions, Realtime)', 'Firebase (Auth, Firestore, Cloud Functions)', 'PostgreSQL', 'Redis', 'REST APIs', 'Socket.io', 'AWS', 'Docker', 'CI/CD'],
    },
    {
      category: 'Practices & Tools',
      items: ['System Design', 'AI-assisted Engineering', 'Automated Testing', 'Git/GitHub', 'Figma Slicing', 'Agile & Async Remote Delivery'],
    },
  ],
  experience: [
    {
      role: 'Full-Stack Flutter Developer',
      company: 'BonkBytes',
      companyUrl: 'https://bonkbytes.com/',
      period: '2024 — Present',
      location: 'Remote',
      highlights: [
        'Architected and built a production node-based workflow canvas application in Flutter supporting interactive diagram editing, cloud execution, and realtime collaboration.',
        'Engineered Supabase-backed microservices, secure credential handling, edge execution functions, and AWS deployment pipelines.',
        'Adopted AI-assisted delivery workflows paired with rigorous automated testing to keep shipping velocity high without compromising software quality.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'Musopen',
      period: 'May 2024 — Jul 2025',
      location: 'Remote',
      highlights: [
        'Shipped cross-platform features, performance improvements, and user-facing bug fixes for a global classical music platform.',
        'Collaborated closely with design and product leads in rapid iterative feedback loops, earning 5.0 client feedback on Upwork.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'S2bc Studios',
      period: 'Nov 2022 — Dec 2024',
      location: 'Remote',
      highlights: [
        'Full-stack development of Cardx (sports cards collection product) for iOS and Web using Flutter clients and Golang REST APIs.',
        'Integrated marketplace data APIs (eBay), Supabase database, Redis caching layers, and PostgreSQL storage for smooth catalog browsing under heavy data loads.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'DrugLift',
      period: 'Jun 2023 — Jun 2024',
      location: 'Remote',
      highlights: [
        'Led comprehensive Flutter MVP redesign and major codebase refactoring to match the updated product vision.',
        'Implemented full app localization architecture using GetX and optimized UX for intermittent/slow mobile network connectivity.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Kopwar',
      period: 'Jul 2022 — Oct 2022',
      location: 'Remote',
      highlights: [
        'Built e-commerce mobile purchasing and checkout flows with integrated realtime in-app messaging using Flutter and Socket.io.',
      ],
    },
    {
      role: 'Mobile Developer',
      company: 'LingoTalk',
      period: 'Aug 2021 — Dec 2021',
      location: 'Remote',
      highlights: [
        'Contributed key feature modules and UI slicing to an established Flutter language-learning mobile application.',
      ],
    },
  ],
  featuredProjects: [
    {
      name: 'Node-based Workflow Canvas',
      stack: 'Flutter · Supabase · Edge Functions · Realtime · AWS',
      summary:
        'Production visual flowchart/workflow builder with cloud step execution, credential management, and realtime multi-user editing (Client: BonkBytes).',
    },
    {
      name: 'Nourdaily',
      stack: 'Flutter · Dart · Content Platform · Muslim Community',
      link: 'https://nourdaily.com',
      summary:
        'Full-built daily.dev-inspired discovery and content platform for the Muslim community featuring curated audio, video, reading journeys, and upvoting.',
    },
    {
      name: 'Cardx Collectibles Platform',
      stack: 'Flutter · Golang · Supabase · Redis · PostgreSQL',
      summary:
        'Multi-platform sports card collection app with live marketplace pricing, inventory tracking, and high-performance caching (Client: S2bc Studios).',
    },
    {
      name: 'hiQuran',
      stack: 'Flutter · GetX · Supabase · Firebase (65★ GitHub)',
      link: 'https://github.com/sahibul-nf/hiQuran',
      summary:
        'Open-source digital Quran application featuring tafsir, prayer times, audio recitation, and clean minimalist typography.',
    },
  ],
  education: {
    school: 'Universitas Islam Negeri Ar-Raniry',
    degree: 'Bachelor of Technology — Information Technology (GPA 3.68)',
    period: '2018 — 2023',
  },
} as const
