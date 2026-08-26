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
  responseTime: 'Usually reply within 24 hours',
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
    year: '2024–26 · Client · BonkBytes',
    blurb:
      'Real-time visual workflow platform in Flutter Web: 102K+ LOC, 18-policy canvas engine, bidirectional IaC/DBML sync, Deno edge execution, and multi-user collaboration. Details shared on request.',
    tags: ['Flutter', 'Supabase', 'Edge Functions', 'Realtime', 'AWS'],
    image: '/images/workflow-canvas.svg',
    href: 'https://bonkbytes.com/',
    live: null,
    stars: null,
  },
  {
    id: 'nourdaily',
    title: 'Nourdaily',
    year: '2024 · Personal',
    blurb:
      'Flutter content platform for the Muslim community (daily.dev-style discovery): curated articles, video, and audio, plus discussions, upvotes, and personalized reading journeys.',
    tags: ['Flutter', 'Muslim Community', 'Content Platform'],
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
    company: 'BonkBytes',
    companyUrl: 'https://bonkbytes.com/',
    role: 'Full-Stack Flutter Developer',
    period: '2024 — Present',
    points: [
      'Architecting a real-time workflow canvas (102K+ LOC) with an 18-policy diagram engine, bidirectional IaC/DBML sync, and live multi-user collaboration.',
      'Building Supabase/Deno backend services: 38 PostgreSQL migrations, 5 edge functions, RLS, Vault, SSRF hardening, and 545 automated tests.',
      'Maintaining GitHub Actions CI/CD with test gates on dev and AWS S3/CloudFront deploys on master.',
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
    company: 'DrugLift',
    role: 'Flutter Developer',
    period: 'Jun 2023 — Jun 2024',
    points: [
      'Redesigned the DrugLift Flutter MVP with substantial refactoring to match the new product design.',
      'Shipped localization as a net-new feature (GetX).',
      'Improved and fixed bugs in existing features alongside the redesign.',
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

/** Quick-scan core stack shown in About (keep short). */
export const coreStack = [
  'Flutter',
  'Dart',
  'Golang',
  'Supabase',
  'Firebase',
  'PostgreSQL',
  'Redis',
  'AWS',
] as const

export const caseStudies = [
  {
    id: 'bonkbytes-canvas',
    client: 'BonkBytes',
    title: 'Node-based workflow canvas',
    period: '2024 — Present',
    problem:
      'The product needed a production Flutter canvas where non-engineers could design workflows, run cloud steps safely, and collaborate without fragile desktop-only tooling.',
    approach:
      'Built an 18-policy Flutter Web canvas engine with bidirectional IaC/DBML sync, Supabase Realtime collaboration, and 5 Deno edge microservices with SSRF hardening and Vault-backed secrets.',
    result:
      'A production workflow platform spanning 102K+ LOC with 545 automated tests, multi-tenant RLS, and CI/CD deploys to AWS. Demo available on request.',
    stack: ['Flutter', 'Supabase', 'Edge Functions', 'Realtime', 'AWS'],
  },
  {
    id: 'cardx',
    client: 'S2bc Studios',
    title: 'Cardx collectibles platform',
    period: '2022 — 2024',
    problem:
      'The team needed a multi-platform sports-card product with reliable APIs, marketplace data, and a client experience that stayed fast as collections grew.',
    approach:
      'Owned Flutter clients for iOS/web and Golang REST services, integrating Supabase, Redis caching, PostgreSQL, and third-party marketplace APIs end to end.',
    result:
      'A full-stack collectibles product shipped across client and backend layers, with caching and API integrations that held up for real marketplace use.',
    stack: ['Flutter', 'Golang', 'Supabase', 'Redis', 'PostgreSQL'],
  },
] as const

/**
 * Real client feedback only.
 * Do not publish rates, earnings, or private contract terms.
 * Leo Gjoni left a 5.0 rating; no public written review text was available in the source screenshot.
 */
export const testimonials = [
  {
    id: 'aaron-dunn',
    quote: 'Great work.',
    rating: '5.0',
    role: 'Aaron Dunn',
    context: 'Musopen · Upwork · 2024–2025',
  },
  {
    id: 'leo-gjoni',
    quote: null,
    rating: '5.0',
    role: 'Leo Gjoni',
    context: 'DrugLift · Upwork · 2023–2024',
  },
  {
    id: 'wilfried',
    quote: 'I am satisfied with this glossary.',
    rating: null,
    role: 'Wilfried',
    context: 'Client · Flashcard app · Germany',
  },
] as const

export const education = {
  school: 'Universitas Islam Negeri Ar-Raniry',
  degree: 'Bachelor of Technology — Information Technology',
  period: '2018 — 2023',
  grade: 'GPA 3.68',
} as const
