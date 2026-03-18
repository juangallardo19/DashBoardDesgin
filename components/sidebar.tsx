"use client"

import { Settings, LogOut } from "lucide-react"
import { useState } from "react"

const topIcons = [
  {
    id: "dashboard",
    label: "Dashboard",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    id: "reports",
    label: "Reports",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 3v18h18" />
        <path d="M20 18v3" />
        <path d="M16 16v5" />
        <path d="M12 13v8" />
        <path d="M8 16v5" />
        <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" />
      </svg>
    ),
  },
  {
    id: "briefcase",
    label: "Documents",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" />
      </svg>
    ),
  },
  {
    id: "list",
    label: "History",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8.207 3.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1 -1.414 0l-1.5 -1.5a1 1 0 0 1 1.414 -1.414l.793 .793l1.793 -1.793a1 1 0 0 1 1.414 0" />
        <path d="M8.207 9.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1 -1.414 0l-1.5 -1.5a1 1 0 0 1 1.414 -1.414l.793 .793l1.793 -1.793a1 1 0 0 1 1.414 0" />
        <path d="M8.207 15.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1 -1.414 0l-1.5 -1.5a1 1 0 0 1 1.414 -1.414l.793 .793l1.793 -1.793a1 1 0 0 1 1.414 0" />
        <path d="M21 6a1 1 0 0 1 -1 1h-9a1 1 0 0 1 0 -2h9a1 1 0 0 1 1 1" />
        <path d="M21 12a1 1 0 0 1 -1 1h-9a1 1 0 0 1 0 -2h9a1 1 0 0 1 1 1" />
        <path d="M21 18a1 1 0 0 1 -1 1h-9a1 1 0 0 1 0 -2h9a1 1 0 0 1 1 1" />
      </svg>
    ),
  },
  {
    id: "credit-card",
    label: "Contacts",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8" />
        <path d="M3 10l18 0" />
        <path d="M7 15l.01 0" />
        <path d="M11 15l2 0" />
      </svg>
    ),
  },
  {
    id: "mail",
    label: "Mail",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
        <path d="M3 7l9 6l9 -6" />
      </svg>
    ),
  },
  {
    id: "percentage",
    label: "Analytics",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M9 15.075l6 -6" />
        <path d="M9 9.105v.015" />
        <path d="M15 15.12v.015" />
      </svg>
    ),
  },
]

export default function Sidebar() {
  const [active, setActive] = useState("dashboard")

  const section1 = topIcons.slice(0, 4)
  const section2 = topIcons.slice(4)

  const iconBtn = (item: typeof topIcons[0]) => (
    <button
      key={item.id}
      onClick={() => setActive(item.id)}
      aria-label={item.label}
      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
        active === item.id
          ? "bg-[#1a7a4a] text-white"
          : "text-[#9ca3af] hover:text-[#1a7a4a] hover:bg-[#f0faf5]"
      }`}
    >
      {item.svg}
    </button>
  )

  return (
    <aside className="flex flex-col items-center justify-between w-14 self-stretch">
      {/* Parte superior: dos pills independientes */}
      <div className="flex flex-col items-center gap-3">
        {/* Pill 1: primeros 4 iconos */}
        <div className="flex flex-col items-center gap-1 bg-white rounded-[2rem] shadow-[0_1px_6px_rgba(0,0,0,0.06)] py-3 px-2">
          {section1.map(iconBtn)}
        </div>

        {/* Pill 2: siguientes 3 iconos */}
        <div className="flex flex-col items-center gap-1 bg-white rounded-[2rem] shadow-[0_1px_6px_rgba(0,0,0,0.06)] py-3 px-2">
          {section2.map(iconBtn)}
        </div>
      </div>

      {/* Pill 3: settings y logout al fondo */}
      <div className="flex flex-col items-center gap-1 bg-white rounded-[2rem] shadow-[0_1px_6px_rgba(0,0,0,0.06)] py-3 px-2">
        <button
          aria-label="Settings"
          className="w-10 h-10 rounded-2xl flex items-center justify-center text-[#9ca3af] hover:text-[#1a7a4a] hover:bg-[#f0faf5] transition-colors"
        >
          <Settings className="w-5 h-5" />
        </button>
        <button
          aria-label="Logout"
          className="w-10 h-10 rounded-2xl flex items-center justify-center text-[#9ca3af] hover:text-red-500 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </aside>
  )
}
