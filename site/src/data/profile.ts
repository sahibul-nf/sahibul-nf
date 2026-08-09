export const profile = {
  name: 'Sahibul Nuzul Firdaus',
  brand: 'Sahibul NF',
  role: 'Senior Full-Stack Engineer',
  location: 'Aceh, Indonesia',
  email: 'sahibulnuzulfirdaus13@gmail.com',
  headline: 'I architect Flutter systems that ship — canvas engines, realtime sync, and Golang backends.',
  summary:
    'Systems-minded engineer building production cross-platform apps and cloud-backed workflow tools — from node-based canvases to eBay-integrated marketplaces.',
  availability: 'Open for remote senior roles & high-impact contracts',
  links: {
    github: 'https://github.com/sahibul-nf',
    linkedin: 'https://www.linkedin.com/in/sahibul-nf',
    upwork: 'https://www.upwork.com/freelancers/~01a4cbdaeeaac4a0f3',
    contra: 'https://contra.com/sahibulnf',
    email: 'mailto:sahibulnuzulfirdaus13@gmail.com',
    portfolio: 'https://sahibul-nf-portfolio.netlify.app',
  },
} as const

export const projects = [
  {
    id: 'canvas',
    title: 'Flutter Flowchart Canvas',
    year: '2024–26',
    blurb:
      'Production node-based workflow engine (n8n/Zapier-class). Custom-forked Flutter diagram core, Supabase Vault + RLS + Edge Functions, realtime multiplayer with LERP cursor sync — live on AWS.',
    tags: ['Flutter', 'Supabase Vault', 'Edge Functions', 'AWS', 'Realtime'],
    image: '/images/canvas.svg',
    href: 'https://canvas.bonkbytes.com',
    live: 'https://canvas.bonkbytes.com',
    stars: null,
  },
  {
    id: 'hiquran',
    title: 'hiQuran',
    year: '2023',
    blurb:
      'A digital Quran experience with prayer times, tafsir, and a calm reading UI — built with Flutter, GetX, Supabase, and Firebase.',
    tags: ['Flutter', 'GetX', 'Supabase', 'Firebase'],
    image: '/images/hiquran.jpg',
    href: 'https://github.com/sahibul-nf/hiQuran',
    live: 'https://s.id/hiQuran-Amazon',
    stars: 65,
  },
  {
    id: 'cardx',
    title: 'Cardx',
    year: '2022–24',
    blurb:
      'Sports card collection product for iOS and web. Flutter client plus Golang APIs with Supabase, Redis caching, PostgreSQL, and live eBay market data.',
    tags: ['Flutter', 'Golang', 'eBay API', 'Redis', 'Supabase'],
    image: '/images/cardx.jpg',
    href: 'https://contra.com/p/oBEBN3Os-cardx',
    live: null,
    stars: null,
  },
  {
    id: 'moyu-api',
    title: 'Moyu API',
    year: '2022',
    blurb:
      'Crowdfunding REST API in Golang with Clean Architecture — Gin, GORM, JWT auth, and PostgreSQL.',
    tags: ['Golang', 'Gin', 'PostgreSQL', 'JWT'],
    image: '/images/moyu.svg',
    href: 'https://github.com/sahibul-nf/moyu-api',
    live: 'https://web-production-4d1b.up.railway.app/api/v1/campaigns',
    stars: null,
  },
  {
    id: 'quotes',
    title: 'Quotes App',
    year: '2023',
    blurb:
      'Clean quotes experience powered by Flutter and Supabase — collections, sharing, and a lightweight social feel.',
    tags: ['Flutter', 'Supabase', 'Riverpod'],
    image: '/images/quotes.svg',
    href: 'https://github.com/sahibul-nf/quotes_app',
    live: 'https://quot.codemagic.app/',
    stars: 15,
  },
] as const

export const experience = [
  {
    company: 'Canvas / Bonkbytes',
    role: 'Full-Stack Flutter Engineer',
    period: '2024 — Present',
    points: [
      'Architected a production node-based flowchart canvas from scratch as solo engineer — custom Flutter diagram engine, workflow execution, and AWS deploy (canvas.bonkbytes.com).',
      'Built secure cloud execution with Supabase Vault, Row Level Security, Edge Functions, and realtime multiplayer sync using LERP interpolation.',
      'Applied AI-native delivery (Cursor + structured agent rules, unit/widget tests) while keeping security and memory checks in the loop.',
    ],
  },
  {
    company: 'Musopen',
    role: 'Flutter Developer',
    period: 'May 2024 — Jul 2025',
    points: [
      'Shipped features, fixed production bugs, and refined UI for a classical music platform.',
      'Improved day-to-day product quality through iterative design and engineering collaboration.',
    ],
  },
  {
    company: 'S2bc Studios',
    role: 'Software Developer',
    period: 'Nov 2022 — Dec 2024',
    points: [
      'Architected a full-stack sports cards collection app with Flutter clients and Golang REST services.',
      'Integrated eBay API for live market data, plus Supabase, Redis caching, PostgreSQL, and Heroku deployments.',
    ],
  },
  {
    company: 'PT GITS Indonesia',
    role: 'Flutter Programmer',
    period: 'Aug 2022 — Aug 2023',
    points: [
      'Delivered Flutter features for client e-commerce and realtime product experiences.',
      'Integrated REST APIs and Socket.io for live in-app behavior.',
    ],
  },
  {
    company: 'Kopwar',
    role: 'Software Developer',
    period: 'Jul 2022 — Oct 2022',
    points: [
      'Built e-commerce mobile flows with realtime sales chat powered by Socket.io and Flutter.',
      'Partnered with design and backend teams on high-throughput REST integrations and responsive UI.',
    ],
  },
  {
    company: 'LingoTalk',
    role: 'Mobile Developer',
    period: 'Aug 2021 — Dec 2021',
    points: [
      'Contributed to an established Flutter language-learning product.',
      'Worked with mobile, backend, and design teams on shipped releases.',
    ],
  },
] as const

export const skills = [
  {
    group: 'Systems & Mobile',
    items: ['Flutter', 'Dart', 'Canvas / Diagram Engines', 'Riverpod', 'GetX', 'Realtime Sync'],
  },
  {
    group: 'Backend',
    items: ['Golang', 'Gin', 'REST APIs', 'Socket.io', 'JWT', 'PostgreSQL', 'Redis'],
  },
  {
    group: 'Cloud & Platform',
    items: ['Supabase (Vault, RLS, Edge)', 'AWS', 'Firebase', 'eBay API', 'Heroku', 'Docker'],
  },
  {
    group: 'Practice',
    items: ['System Design', 'AI-Native Engineering', 'Automated Testing', 'TypeScript', 'Vue/Nuxt', 'Figma'],
  },
] as const

export const education = {
  school: 'Universitas Islam Negeri Ar-Raniry',
  degree: 'Bachelor of Computer Science — Information Technology',
  period: '2018 — 2023',
  grade: 'GPA 3.68',
} as const
