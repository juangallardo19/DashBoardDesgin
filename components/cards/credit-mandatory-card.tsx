"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const avatars = [
  { src: "/perfil.jpeg", alt: "User 1", bg: "bg-[#fbbf24]" },
  { src: null, alt: "U2", bg: "bg-[#f87171]" },
  { src: null, alt: "U3", bg: "bg-[#60a5fa]" },
  { src: null, alt: "U4", bg: "bg-[#a78bfa]" },
]

export default function CreditMandatoryCard() {
  return (
    <div className="bg-white rounded-[1.5rem] p-5 shadow-[0_1px_6px_rgba(0,0,0,0.06)] flex flex-col gap-5 pb-6">
      {/* Amount of credit */}
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-[#f4f5f7] flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8" />
            <path d="M3 10l18 0" />
            <path d="M7 15l.01 0" />
            <path d="M11 15l2 0" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1a1a2e]">Amount of credit</p>
          <p className="text-xs text-[#9ca3af]">Total refund amount with fee</p>
        </div>
      </div>

      {/* Amount */}
      <div className="flex items-end gap-2 py-1">
        <p className="text-3xl font-semibold text-[#1a1a2e]">$8,945.89</p>
        <span className="mb-0.5 bg-[#bbf7d0] text-[#14532d] text-xs font-semibold px-2.5 py-1 rounded-full">
          +12.8%
        </span>
      </div>

      {/* Mandatory Payments — card gris interna */}
      <div className="bg-[#f4f5f7] rounded-[1.2rem] p-5 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-[#1a1a2e]">Mandatory Payments</p>
            <p className="text-xs text-[#9ca3af] mt-0.5">Recent payments</p>
          </div>
          <button className="w-8 h-8 rounded-full border border-[#e0e0e0] bg-white flex items-center justify-center text-[#6b7280] hover:bg-white/80 transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Avatars */}
        <div className="flex items-center">
          {avatars.map((a, i) => (
            <div
              key={i}
              className={`w-9 h-9 rounded-full overflow-hidden border-2 border-[#f4f5f7] ${a.bg} flex items-center justify-center flex-shrink-0 ${i > 0 ? "-ml-2.5" : ""}`}
            >
              {a.src ? (
                <Image src={a.src} alt={a.alt} width={36} height={36} className="w-full h-full object-cover" />
              ) : (
                <span className="text-white text-[10px] font-bold">{a.alt}</span>
              )}
            </div>
          ))}
          <div className="-ml-2.5 w-9 h-9 rounded-full bg-[#1a7a4a] border-2 border-[#f4f5f7] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[10px] font-bold">+2</span>
          </div>
        </div>
      </div>
    </div>
  )
}
