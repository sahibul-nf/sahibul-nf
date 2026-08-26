import { motion } from 'framer-motion'

const tiles = [
  { label: 'Articles', tone: 'bg-[#C4A574]/90' },
  { label: 'Video', tone: 'bg-[#2F6B4F]/85' },
  { label: 'Audio', tone: 'bg-[#2F6B4F]/70' },
  { label: 'Community', tone: 'bg-[#1B2E24]/20' },
] as const

export function NourdailyPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`overflow-hidden bg-[linear-gradient(165deg,#F7F1E8_0%,#E8D5B5_100%)] ${
        compact ? 'rounded-[1rem] p-3' : 'rounded-[1.1rem] p-4'
      }`}
      role="img"
      aria-label="Nourdaily Flutter content platform for the Muslim community"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[9px] font-semibold tracking-[0.14em] text-[#2F6B4F] uppercase">
            Personal product
          </p>
          <p
            className={`font-display mt-1 font-bold text-[#1B2E24] ${
              compact ? 'text-lg leading-none' : 'text-xl leading-none'
            }`}
          >
            Nourdaily
          </p>
        </div>
        <span className="rounded-full bg-[#2F6B4F] px-2 py-0.5 text-[8px] font-semibold text-[#F7F1E8]">
          Flutter
        </span>
      </div>

      <p className={`mt-2 text-[#5A6F78] ${compact ? 'text-[9px] leading-snug' : 'text-[10px] leading-snug'}`}>
        Muslim community content platform
      </p>

      <div className={`grid grid-cols-2 gap-1.5 ${compact ? 'mt-2.5' : 'mt-3'}`}>
        {tiles.map((tile, i) => (
          <motion.div
            key={tile.label}
            className={`flex aspect-[1.35/1] items-end rounded-lg p-1.5 ${tile.tone}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.07, duration: 0.45 }}
          >
            <span className="text-[8px] font-semibold text-[#F7F1E8]">{tile.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
