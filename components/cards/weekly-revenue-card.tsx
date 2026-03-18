"use client"

export default function WeeklyRevenueCard() {
  return (
    <div className="bg-white rounded-[1.5rem] px-5 py-4 shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
      <p className="text-xs text-[#9ca3af] mb-1">Weekly Revenue</p>
      <div className="flex items-center gap-3">
        <span className="text-2xl font-semibold text-[#1a1a2e]">+3,945 USD</span>
        <span className="bg-[#dcfce7] text-[#16a34a] text-xs font-semibold px-2.5 py-1 rounded-full">
          +12.8%
        </span>
      </div>
    </div>
  )
}
