export const profile = {
  name: 'Sahibul Nuzul Firdaus',
  brand: 'Sahibul NF',
  role: 'Full-Stack Flutter Engineer',
  location: 'Aceh, Indonesia',
  email: 'sahibulnuzulfirdaus13@gmail.com',
  headline: 'I build Flutter products and Golang backends that hold up in production.',
  summary:
    'Product-minded engineer shipping multi-platform apps, realtime features, and cloud-backed workflow tools for teams that need reliable delivery.',
  availability: 'Open for freelance & remote roles',
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
    title: 'Node-based Workflow Canvas',
    year: '2024–26 · Client',
    blurb:
      'Interactive flowchart/workflow builder in Flutter: custom diagram editing, cloud function execution, credential-safe integrations, and realtime collaboration. Details shared on request.',
    tags: ['Flutter', 'Supabase', 'Edge Functions', 'Realtime', 'AWS'],
    image: '/images/canvas.svg',
    href: 'https://contra.com/sahibulnf',
    live: null,
    stars: null,
  },
  {
    id: 'nourdaily',
    title: 'Nourdaily',
    year: '2024 · Personal',
    blurb:
      'Personal Flutter product for the Muslim community: curated articles, video, and audio, plus discussions, upvotes, and personalized reading journeys (daily.dev-style discovery).',
    tags: ['Flutter', 'Muslim Community', 'Content', 'Personal'],
    image: '/images/nourdaily-og.jpg',
    href: 'https://nourdaily.com',
    live: 'https://nourdaily.com',
    stars: null,
  },
  {
    id: 'pukatflow',
    title: 'PukatFlow',
    year: '2025– · Personal · Pilot',
    blurb:
      'Android pilot ledger for Toke Boat operators: trip + vessel tracking, cash book for fuel/ice/rations/sales (paid or credit), AI-assisted entries, profit dashboard, and profit-sharing notes ready for WhatsApp. Built for use even when signal is weak.',
    tags: ['Android', 'AI Assistant', 'Ledger', 'Personal'],
    image: '/images/pukatflow.svg',
    href: 'https://pukatflow.netlify.app',
    live: 'https://pukatflow.netlify.app',
    stars: null,
  },
  {
    id: 'hiquran',
    title: 'hiQuran',
    year: '2023 · Personal',
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
    year: '2022–24 · Client · S2bc Studios',
    blurb:
      'Client sports card collection product for iOS and web — Flutter clients with Golang APIs, Supabase, caching, and marketplace data integrations.',
    tags: ['Flutter', 'Golang', 'Supabase', 'Redis'],
    image: '/images/cardx.jpg',
    href: 'https://contra.com/p/oBEBN3Os-cardx',
    live: null,
    stars: null,
  },
  {
    id: 'solo-dev-ai-kit',
    title: 'solo-dev-ai-kit',
    year: '2025– · Personal',
    blurb:
      'Portable bootstrap for solo-dev + AI workflows: issue triage, multi-agent rules (Cursor/Antigravity/etc.), and a repeatable path from approval to QA close.',
    tags: ['AI Workflow', 'Cursor', 'Shell', 'Developer Tools'],
    image: '/images/solo-dev-ai.svg',
    href: 'https://github.com/sahibul-nf/solo-dev-ai-kit',
    live: null,
    stars: null,
  },
] as const

export const experience = [
  {
    company: 'Canvas',
    role: 'Full-Stack Flutter Developer',
    period: '2024 — Present',
    points: [
      'Building a production node-based workflow canvas in Flutter with cloud execution and realtime collaboration.',
      'Working across client UI, Supabase-backed services (including secure credential handling and edge functions), and AWS deployment.',
      'Using structured AI-assisted workflows with automated tests to keep delivery fast without skipping quality checks.',
    ],
  },
  {
    company: 'Musopen',
    role: 'Flutter Developer',
    period: 'May 2024 — Jul 2025',
    points: [
      'Shipped features, fixed production bugs, and refined UI for a classical music platform.',
      'Worked iteratively with design and product feedback to improve day-to-day quality.',
    ],
  },
  {
    company: 'S2bc Studios',
    role: 'Software Developer',
    period: 'Nov 2022 — Dec 2024',
    points: [
      'Built Cardx, a full-stack sports cards collection product, with Flutter clients and Golang REST services.',
      'Integrated marketplace APIs, Supabase, Redis caching, PostgreSQL, and cloud deployment workflows.',
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
      'Built e-commerce mobile flows with realtime in-app messaging using Socket.io and Flutter.',
      'Collaborated with design and backend teammates on API integrations and responsive UI.',
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
    group: 'Mobile',
    items: ['Flutter', 'Dart', 'Riverpod', 'GetX', 'Realtime UI', 'Flutter Web'],
  },
  {
    group: 'Backend',
    items: ['Golang', 'Gin', 'REST APIs', 'Socket.io', 'JWT', 'PostgreSQL', 'Redis'],
  },
  {
    group: 'Platform',
    items: ['Supabase', 'Firebase', 'AWS', 'Docker', 'Edge Functions', 'CI/CD'],
  },
  {
    group: 'Practice',
    items: ['System Design', 'AI-assisted Engineering', 'Automated Testing', 'TypeScript', 'Vue/Nuxt', 'Figma'],
  },
] as const

export const education = {
  school: 'Universitas Islam Negeri Ar-Raniry',
  degree: 'Bachelor of Technology — Information Technology',
  period: '2018 — 2023',
  grade: 'GPA 3.68',
} as const
