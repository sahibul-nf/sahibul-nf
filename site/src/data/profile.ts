export const profile = {
  name: 'Sahibul Nuzul Firdaus',
  brand: 'Sahibul NF',
  role: 'Flutter & Golang Engineer',
  location: 'Aceh, Indonesia',
  email: 'sahibulnuzulfirdaus13@gmail.com',
  headline: 'I build Flutter products that feel fast and look intentional.',
  summary:
    'Product-minded engineer shipping multi-platform apps and Golang APIs — from sports cards and e-commerce to Quran and learning tools.',
  availability: 'Open for freelance & remote roles',
  links: {
    github: 'https://github.com/sahibul-nf',
    linkedin: 'https://www.linkedin.com/in/sahibul-nf',
    upwork: 'https://www.upwork.com/freelancers/~01a4cbdaeeaac4a0f3',
    contra: 'https://contra.com/sahibulnf',
    email: 'mailto:sahibulnuzulfirdaus13@gmail.com',
  },
} as const

export const projects = [
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
    year: '2023–24',
    blurb:
      'Sports card collection app for iOS and web. Flutter + Riverpod on the client, Golang services wired to Supabase and the eBay API.',
    tags: ['Flutter', 'Riverpod', 'Golang', 'eBay API'],
    image: '/images/cardx.jpg',
    href: 'https://contra.com/p/oBEBN3Os-cardx',
    live: null,
    stars: null,
  },
  {
    id: 'educative',
    title: 'Educative Clone',
    year: '2023',
    blurb:
      'Interactive learning app inspired by educative.io — markdown lessons, progress, and Supabase-backed content in Flutter.',
    tags: ['Flutter', 'Supabase', 'Markdown'],
    image: '/images/educative.jpg',
    href: 'https://github.com/sahibul-nf/educative_app_clone',
    live: 'https://educative-clone.codemagic.app',
    stars: 6,
  },
  {
    id: 'acehnese',
    title: 'Acehnese Dictionary',
    year: '2023',
    blurb:
      'Dictionary app for the Acehnese language, paired with a Golang API using fuzzy matching for better word lookup.',
    tags: ['Flutter', 'Golang', 'REST'],
    image: '/images/acehnese.jpg',
    href: 'https://github.com/sahibul-nf/acehnese_dictionary',
    live: 'https://acehnese.codemagic.app/',
    stars: null,
  },
  {
    id: 'quotes',
    title: 'Quotes App',
    year: '2023',
    blurb:
      'Clean quotes experience powered by Flutter and Supabase — collections, sharing, and a lightweight social feel.',
    tags: ['Flutter', 'Supabase'],
    image: '/images/quotes.svg',
    href: 'https://github.com/sahibul-nf/quotes_app',
    live: 'https://quot.codemagic.app/',
    stars: 15,
  },
] as const

export const experience = [
  {
    company: 'Canvas',
    role: 'Fullstack Flutter Developer',
    period: '2025 — Present',
    points: [
      'Shipping product features across Flutter clients with a focus on polish and reliability.',
      'Collaborating on full-stack flows that keep mobile UX and backend contracts aligned.',
    ],
  },
  {
    company: 'Musopen',
    role: 'Flutter Developer',
    period: 'May 2024 — Jul 2025',
    points: [
      'Added features, fixed production bugs, and refined UI details for a classical music platform.',
      'Improved day-to-day product quality through iterative design and engineering collaboration.',
    ],
  },
  {
    company: 'S2bc Studios',
    role: 'Software Developer',
    period: 'Nov 2022 — Dec 2024',
    points: [
      'Led end-to-end work on a sports card collection product for iOS and web.',
      'Built Golang APIs integrated with Supabase and the eBay Restful API.',
    ],
  },
  {
    company: 'PT GITS Indonesia',
    role: 'Flutter Programmer',
    period: 'Aug 2022 — Aug 2023',
    points: [
      'Delivered Flutter features for client e-commerce and real-time experiences.',
      'Integrated REST APIs and Socket.io for live app behavior.',
    ],
  },
  {
    company: 'LingoTalk',
    role: 'Mobile Developer',
    period: 'Aug 2021 — Dec 2021',
    points: [
      'Contributed to an established Flutter language-learning product.',
      'Worked closely with mobile, backend, and design teams on shipped releases.',
    ],
  },
] as const

export const skills = [
  {
    group: 'Mobile',
    items: ['Flutter', 'Dart', 'Riverpod', 'GetX', 'iOS & Android', 'Flutter Web'],
  },
  {
    group: 'Backend',
    items: ['Golang', 'Gin', 'REST APIs', 'JWT', 'PostgreSQL', 'MySQL'],
  },
  {
    group: 'Platform',
    items: ['Supabase', 'Firebase', 'eBay API', 'Docker', 'Railway', 'Netlify'],
  },
  {
    group: 'Web & Design',
    items: ['TypeScript', 'Vue', 'Nuxt', 'Tailwind CSS', 'Figma'],
  },
] as const

export const education = {
  school: 'Universitas Islam Negeri Ar-Raniry',
  degree: 'Bachelor of Technology — Information Technology',
  period: '2018 — 2023',
  grade: 'GPA 3.63',
} as const
