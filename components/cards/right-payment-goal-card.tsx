"use client"

import { ArrowUpRight, ArrowUp, ArrowDown } from "lucide-react"
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  { v: 28000 },
  { v: 30500 },
  { v: 27000 },
  { v: 32000 },
  { v: 29000 },
  { v: 33500 },
  { v: 31000 },
  { v: 34000 },
  { v: 32678 },
]

export default function RightPaymentGoalCard() {
  return (
    <div className="bg-white rounded-[1.5rem] p-5 shadow-[0_1px_6px_rgba(0,0,0,0.06)] flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-[#1a1a2e]">Payment Goal</p>
          <p className="text-xs text-[#9ca3af] mt-0.5">Total amount goal</p>
        </div>
        <button className="w-8 h-8 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#6b7280] hover:bg-[#f4f5f7] transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Balance */}
      <div>
        <p className="text-xs text-[#9ca3af]">Total Balance</p>
        <p className="text-2xl font-semibold text-[#1a1a2e] mt-0.5">$32,678.90</p>
      </div>

      {/* Area chart */}
      <div className="h-[90px] -mx-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="balanceGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a7a4a" stopOpacity={0.18} />
                <stop offset="100%" stopColor="#1a7a4a" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <XAxis hide />
            <YAxis hide domain={["auto", "auto"]} />
            <Tooltip
              contentStyle={{ display: "none" }}
              cursor={{ stroke: "#1a7a4a", strokeWidth: 1, strokeDasharray: "4 4" }}
            />
            <Area
              type="monotone"
              dataKey="v"
              stroke="#1a7a4a"
              strokeWidth={2}
              fill="url(#balanceGrad)"
              dot={false}
              activeDot={{ r: 4, fill: "#1a7a4a", stroke: "white", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Send / Receive — botón combinado centrado */}
      <div className="flex justify-center mt-1">
        <div className="flex items-center bg-[#f4f5f7] rounded-full overflow-hidden border border-[#e5e7eb]">
          <button className="flex items-center gap-1.5 bg-[#1a7a4a] text-white text-xs font-semibold px-5 py-2.5 hover:bg-[#155f3a] transition-colors">
            <ArrowUp className="w-3.5 h-3.5" />
            Send
          </button>
          <div className="w-px h-5 bg-[#d1d5db]" />
          <button className="flex items-center gap-1.5 text-[#1a1a2e] text-xs font-semibold px-5 py-2.5 hover:bg-[#e9eaec] transition-colors">
            <ArrowDown className="w-3.5 h-3.5" />
            Receive
          </button>
        </div>
      </div>
    </div>
  )
}
