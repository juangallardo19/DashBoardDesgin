"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const payments = [
  {
    name: "Dribbble Design",
    change: "+18.67%",
    date: "16 Jun 2025",
    time: "10:30 PM",
    status: "Successful",
    amount: "89,345.23 USD",
    logo: "/dribbbleDesgin.png",
  },
  {
    name: "Google Pay",
    change: "+9.34%",
    date: "15 Jun 2025",
    time: "11:45 PM",
    status: "Successful",
    amount: "12,345.89 USD",
    logo: "/google.png",
  },
  {
    name: "Amazon Shopping",
    change: "+12.23%",
    date: "14 Jun 2025",
    time: "10:15 PM",
    status: "Successful",
    amount: "32,123.67 USD",
    logo: "/amazon.png",
  },
]

export default function PaymentHistoryCard() {
  return (
    <div className="bg-white rounded-[1.5rem] p-4 shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-sm font-semibold text-[#1a1a2e]">Payment History</p>
          <p className="text-xs text-[#9ca3af] mt-0.5">Recent payments history</p>
        </div>
        <button className="w-8 h-8 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#6b7280] hover:bg-[#f4f5f7] transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-2 px-1 mb-2">
        {["Name", "Date", "Time", "Status", "Amount"].map((h) => (
          <span key={h} className="text-xs text-[#9ca3af] font-medium">{h}</span>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-[#f3f4f6] mb-2" />

      {/* Rows */}
      <div className="flex flex-col divide-y divide-[#f3f4f6]">
        {payments.map((p) => (
          <div key={p.name} className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-2 items-center py-2 px-1">
            {/* Name */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 bg-[#f4f5f7]">
                <Image src={p.logo} alt={p.name} width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#1a1a2e] leading-tight">{p.name}</p>
                <p className="text-[10px] text-[#14532d]">{p.change}</p>
              </div>
            </div>
            {/* Date */}
            <span className="text-xs text-[#6b7280]">{p.date}</span>
            {/* Time */}
            <span className="text-xs text-[#6b7280]">{p.time}</span>
            {/* Status */}
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] flex-shrink-0" />
              <span className="text-xs text-[#6b7280]">{p.status}</span>
            </div>
            {/* Amount */}
            <span className="text-xs font-medium text-[#1a1a2e]">{p.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
