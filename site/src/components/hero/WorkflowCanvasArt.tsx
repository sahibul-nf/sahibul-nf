import { motion } from 'framer-motion'
import { easeOut } from '../../lib/motion'

const nodes = [
  { x: 48, y: 72, w: 92, h: 54, title: 'Trigger', sub: 'Event start', stroke: '#2EC4D6' },
  { x: 168, y: 98, w: 92, h: 54, title: 'Transform', sub: 'Map + filter', stroke: '#E8A54B' },
  { x: 288, y: 72, w: 92, h: 54, title: 'Edge Fn', sub: 'Cloud exec', stroke: '#2EC4D6' },
  { x: 108, y: 188, w: 92, h: 54, title: 'Branch', sub: 'Policy gate', stroke: '#9FE7F0' },
  { x: 228, y: 188, w: 92, h: 54, title: 'Notify', sub: 'Realtime', stroke: '#E8A54B' },
] as const

const edges = [
  'M140 99 C154 99, 158 108, 168 118',
  'M260 125 C272 115, 280 99, 288 99',
  'M214 152 C200 168, 170 180, 154 188',
  'M260 152 C252 168, 248 180, 252 188',
] as const

export function WorkflowCanvasArt({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 428 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Node-based workflow canvas with cloud execution and realtime collaboration"
    >
      <rect width="428" height="260" fill="#0B1C24" />
      <circle cx="380" cy="28" r="72" fill="#2EC4D6" fillOpacity="0.14" />
      <circle cx="36" cy="228" r="64" fill="#E8A54B" fillOpacity="0.12" />

      {edges.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke={i % 2 === 0 ? '#2EC4D6' : '#E8A54B'}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.35 + i * 0.12, ease: easeOut }}
        />
      ))}

      {nodes.map((node, i) => (
        <g key={node.title}>
          <motion.rect
            x={node.x}
            y={node.y}
            width={node.w}
            height={node.h}
            rx="12"
            fill="#1A3340"
            stroke={node.stroke}
            strokeWidth="1.5"
            initial={{ opacity: 0, y: node.y + 10 }}
            animate={{ opacity: 1, y: node.y }}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.08, ease: easeOut }}
          />
          <motion.circle
            cx={node.x + node.w - 10}
            cy={node.y + 10}
            r="3"
            fill={node.stroke}
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
          />
          <text
            x={node.x + 12}
            y={node.y + 22}
            fill="#F5FAFB"
            fontSize="11"
            fontWeight="700"
            fontFamily="Figtree, ui-sans-serif, system-ui, sans-serif"
          >
            {node.title}
          </text>
          <text
            x={node.x + 12}
            y={node.y + 38}
            fill="#9FB4BC"
            fontSize="9"
            fontFamily="Figtree, ui-sans-serif, system-ui, sans-serif"
          >
            {node.sub}
          </text>
        </g>
      ))}

      <text
        x="24"
        y="248"
        fill="#2EC4D6"
        fontSize="11"
        fontWeight="700"
        fontFamily="Syne, ui-sans-serif, system-ui, sans-serif"
      >
        Workflow engine
      </text>
      <text
        x="132"
        y="248"
        fill="#5A6F78"
        fontSize="9"
        fontFamily="Figtree, ui-sans-serif, system-ui, sans-serif"
      >
        18 policies · cloud steps · live sync
      </text>
    </svg>
  )
}
