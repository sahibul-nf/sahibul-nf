export const SKILL_ICON_BASE =
  'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills'

export type StackIcon = {
  name: string
  icon: string
}

export const coreStackIcons: StackIcon[] = [
  { name: 'Flutter', icon: `${SKILL_ICON_BASE}/flutter-colored.svg` },
  { name: 'Dart', icon: `${SKILL_ICON_BASE}/dart-colored.svg` },
  { name: 'Golang', icon: `${SKILL_ICON_BASE}/go-colored.svg` },
  { name: 'Supabase', icon: `${SKILL_ICON_BASE}/supabase-colored.svg` },
  { name: 'Firebase', icon: `${SKILL_ICON_BASE}/firebase-colored.svg` },
  { name: 'PostgreSQL', icon: `${SKILL_ICON_BASE}/postgresql-colored.svg` },
  { name: 'Docker', icon: `${SKILL_ICON_BASE}/docker-colored.svg` },
  { name: 'AWS', icon: `${SKILL_ICON_BASE}/aws-colored.svg` },
  { name: 'TypeScript', icon: `${SKILL_ICON_BASE}/typescript-colored.svg` },
  { name: 'Redis', icon: `${SKILL_ICON_BASE}/redis-colored.svg` },
]

export const heroFloatingIcons = [
  {
    name: 'Flutter',
    icon: `${SKILL_ICON_BASE}/flutter-colored.svg`,
    className: 'left-[4%] top-[22%] lg:left-[5%] lg:top-[20%]',
    depth: 'front' as const,
    duration: 5.5,
    delay: 0,
  },
  {
    name: 'Golang',
    icon: `${SKILL_ICON_BASE}/go-colored.svg`,
    className: 'right-[3%] top-[10%] lg:right-[4%] lg:top-[8%]',
    depth: 'front' as const,
    duration: 6.2,
    delay: 0.35,
  },
  {
    name: 'Dart',
    icon: `${SKILL_ICON_BASE}/dart-colored.svg`,
    className: 'right-[10%] top-[30%] lg:right-[12%] lg:top-[28%]',
    depth: 'back' as const,
    duration: 7,
    delay: 0.6,
  },
  {
    name: 'Supabase',
    icon: `${SKILL_ICON_BASE}/supabase-colored.svg`,
    className: 'right-[2%] top-[48%] lg:right-[3%] lg:top-[46%]',
    depth: 'front' as const,
    duration: 5.8,
    delay: 0.9,
  },
  {
    name: 'Firebase',
    icon: `${SKILL_ICON_BASE}/firebase-colored.svg`,
    className: 'right-[6%] bottom-[22%] lg:right-[8%] lg:bottom-[20%]',
    depth: 'front' as const,
    duration: 6.5,
    delay: 1.2,
  },
] as const
