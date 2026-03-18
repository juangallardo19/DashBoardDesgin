"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts"

const data = [
  { month: "JAN", value: 1800 },
  { month: "FEB", value: 4000 },
  { month: "MAR", value: 2800 },
  { month: "APR", value: 4900 },
  { month: "MAY", value: 3700 },
  { month: "JUN", value: 4200 },
]

const ACTIVE_INDEX = 3 // APR

// Barra con pill redondeada + rayas diagonales
function HatchedBar(props: {
  x?: number; y?: number; width?: number; height?: number; index?: number
}) {
  const { x = 0, y = 0, width = 0, height = 0, index = 0 } = props
  const isActive = index === ACTIVE_INDEX
  const baseColor = isActive ? "#1a7a4a" : "#7ec8a0"
  const stripeColor = isActive ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.45)"
  const r = width / 2
  const pid = `stripe-${index}`
  const cid = `clip-${index}`

  return (
    <g>
      <defs>
        <pattern id={pid} patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45 0 0)">
          <line x1="0" y1="0" x2="0" y2="7" stroke={stripeColor} strokeWidth="3" />
        </pattern>
        <clipPath id={cid}>
          <rect x={x} y={y} width={width} height={height} rx={r} ry={r} />
        </clipPath>
      </defs>
      <rect x={x} y={y} width={width} height={height} rx={r} ry={r} fill={baseColor} />
      <rect x={x} y={y} width={width} height={height} rx={r} ry={r} fill={`url(#${pid})`} clipPath={`url(#${cid})`} />
    </g>
  )
}

// Label SVG renderizado dentro del chart — posición calculada por recharts
function APRLabel(props: {
  x?: number; y?: number; width?: number; index?: number
}) {
  const { x = 0, y = 0, width = 0, index = 0 } = props
  if (index !== ACTIVE_INDEX) return null
  const cx = x + width / 2
  const pillW = 58
  const pillH = 22
  const pillX = cx - pillW / 2
  const pillY = y - pillH - 10

  return (
    <g>
      {/* Pill verde */}
      <rect x={pillX} y={pillY} width={pillW} height={pillH} rx={11} ry={11} fill="#1a7a4a" />
      <text
        x={cx}
        y={pillY + pillH / 2 + 4}
        textAnchor="middle"
        fill="white"
        fontSize={10}
        fontWeight="700"
      >
        +17.8%
      </text>
      {/* Línea conectora */}
      <line x1={cx} y1={pillY + pillH} x2={cx} y2={y - 2} stroke="#1a7a4a" strokeWidth="1" strokeDasharray="2 2" />
      {/* Punto en el tope de la barra */}
      <circle cx={cx} cy={y} r={4} fill="white" stroke="#1a7a4a" strokeWidth="2" />
    </g>
  )
}

export default function EngagementRateCard() {
  const [period, setPeriod] = useState<"monthly" | "annually">("annually")

  return (
    <div className="bg-white rounded-[1.5rem] p-5 shadow-[0_1px_6px_rgba(0,0,0,0.06)] flex flex-col gap-4 h-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#f4f5f7] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8" />
              <path d="M3 10l18 0" /><path d="M7 15l.01 0" /><path d="M11 15l2 0" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-[#1a1a2e]">Engagement Rate</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#f4f5f7] rounded-full p-1 gap-1">
            {(["monthly", "annually"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors capitalize ${
                  period === p ? "bg-[#1a7a4a] text-white" : "text-[#9ca3af] hover:text-[#1a1a2e]"
                }`}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
          <button className="w-8 h-8 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#6b7280] hover:bg-[#f4f5f7] transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-0 min-h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barCategoryGap="28%"
            maxBarSize={52}
            margin={{ top: 44, right: 4, left: -16, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="4 4" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#9ca3af" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#9ca3af" }}
              tickFormatter={(v) => (v === 0 ? "0" : `${v / 1000}k`)}
              ticks={[0, 1000, 2000, 3000, 4000, 5000]}
            />
            <Bar
              dataKey="value"
              shape={<HatchedBar />}
              label={<APRLabel />}
              isAnimationActive={false}
            >
              {data.map((_, i) => (
                <Cell key={i} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
