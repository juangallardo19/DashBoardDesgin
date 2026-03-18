"use client"

import { ArrowUpRight } from "lucide-react"

export default function PaymentGoalCard() {
  return (
    <div className="bg-white rounded-[1.5rem] p-5 flex flex-col gap-4 shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
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

      {/* VISA Card */}
      <div className="bg-[#1a7a4a] rounded-2xl p-3 text-white relative overflow-hidden">
        {/* Círculos decorativos de fondo */}
        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/5" />
        <div className="absolute -bottom-8 -right-2 w-36 h-36 rounded-full bg-white/5" />

        {/* VISA + contactless */}
        <div className="flex items-center justify-between relative z-10">
          <span className="text-lg font-bold tracking-widest">VISA</span>
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 opacity-80 scale-x-[-1]">
            <path d="M5 12.5c0-3.5 3-6 7-6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M3 12.5c0-4.5 4-8 9-8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M7 12.5c0-2 2-3.5 5-3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="12" cy="12.5" r="1.2" fill="white"/>
          </svg>
        </div>

        {/* Credit Card label */}
        <p className="text-xs text-white/60 mt-3 relative z-10">Credit Card</p>

        {/* Amount */}
        <p className="text-2xl font-semibold mt-1 relative z-10">$ 78,989.09</p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-3 relative z-10">
          <span className="text-xs text-white/70 tracking-widest">•••• 909090</span>
          <span className="text-xs text-white/70">EXP 09/26</span>
        </div>
      </div>
    </div>
  )
}
