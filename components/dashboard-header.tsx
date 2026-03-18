"use client"

import { ChevronDown, Plus } from "lucide-react"

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6b7280]">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M4 11h16" />
      <path d="M7 14h.013" />
      <path d="M10.01 14h.005" />
      <path d="M13.01 14h.005" />
      <path d="M16.015 14h.005" />
      <path d="M13.015 17h.005" />
      <path d="M7.01 17h.005" />
      <path d="M10.01 17h.005" />
    </svg>
  )
}

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between px-1">
      {/* Título */}
      <h1 className="text-4xl tracking-tight">
        <span className="font-normal text-[#1a1a2e]">Welcome Back, </span>
        <span className="font-extralight text-[#9ca3af]">Sujon</span>
      </h1>

      {/* Acciones derecha */}
      <div className="flex items-center gap-3">
        {/* Date range picker */}
        <button className="flex items-center gap-2 bg-white rounded-[1.5rem] shadow-[0_1px_6px_rgba(0,0,0,0.06)] px-4 py-2.5 text-sm text-[#1a1a2e] hover:bg-[#f9fafb] transition-colors">
          <CalendarIcon />
          <span className="font-medium">29 Jun, 2025 – 29 August, 2025</span>
          <ChevronDown className="w-4 h-4 text-[#6b7280]" />
        </button>

        {/* Add New Wallet */}
        <button className="flex items-center gap-2 bg-white rounded-[1.5rem] shadow-[0_1px_6px_rgba(0,0,0,0.06)] px-4 py-2.5 text-sm font-medium text-[#1a1a2e] hover:bg-[#f9fafb] transition-colors">
          <Plus className="w-4 h-4 text-[#1a1a2e]" />
          <span>Add New Wallet</span>
        </button>
      </div>
    </div>
  )
}
