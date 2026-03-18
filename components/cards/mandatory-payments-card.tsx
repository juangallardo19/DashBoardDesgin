"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const avatars = [
  { src: "/perfil.jpeg", alt: "User 1", bg: "bg-[#fbbf24]" },
  { src: null, alt: "User 2", bg: "bg-[#f87171]" },
  { src: null, alt: "User 3", bg: "bg-[#60a5fa]" },
  { src: null, alt: "User 4", bg: "bg-[#a78bfa]" },
]

export default function MandatoryPaymentsCard() {
  return (
    <div className="bg-white rounded-[1.5rem] p-5 shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-semibold text-[#1a1a2e]">Mandatory Payments</p>
          <p className="text-xs text-[#9ca3af] mt-0.5">Recent payments</p>
        </div>
        <button className="w-8 h-8 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#6b7280] hover:bg-[#f4f5f7] transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Avatars */}
      <div className="flex items-center">
        {avatars.map((avatar, i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-full overflow-hidden border-2 border-white ${avatar.bg} flex items-center justify-center flex-shrink-0 ${i > 0 ? "-ml-3" : ""}`}
          >
            {avatar.src ? (
              <Image src={avatar.src} alt={avatar.alt} width={40} height={40} className="w-full h-full object-cover" />
            ) : (
              <span className="text-white text-xs font-bold">
                {avatar.alt.split(" ")[1]}
              </span>
            )}
          </div>
        ))}
        {/* +2 badge */}
        <div className="-ml-3 w-10 h-10 rounded-full bg-[#1a7a4a] border-2 border-white flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">+2</span>
        </div>
      </div>
    </div>
  )
}
