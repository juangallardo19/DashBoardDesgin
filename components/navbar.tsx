"use client"

import { Search, Bell, ChevronDown } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "Dashboard", active: true },
  { label: "Reports", active: false },
  { label: "Documents", active: false },
  { label: "History", active: false },
  { label: "Contacts", active: false },
]

export default function Navbar() {
  return (
    <header className="w-full bg-white rounded-[2.5rem] shadow-[0_1px_6px_rgba(0,0,0,0.06)] px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Quixotic logo"
          width={120}
          height={36}
          className="h-9 w-auto object-contain"
        />
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center bg-[#f4f5f7] rounded-[1.5rem] p-1.5">
        {navLinks.map((link) => (
          <button
            key={link.label}
            className={`px-4 py-1.5 rounded-[1.2rem] text-sm font-medium transition-colors ${
              link.active
                ? "bg-white text-[#1a1a2e] shadow-sm"
                : "text-[#8a9099] hover:text-[#1a1a2e]"
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <button
          className="w-10 h-10 rounded-full bg-[#f4f5f7] flex items-center justify-center text-[#6b7280] hover:bg-[#e9eaec] transition-colors"
          aria-label="Buscar"
        >
          <Search className="w-4.5 h-4.5" />
        </button>

        {/* Bell */}
        <button
          className="w-10 h-10 rounded-full bg-[#f4f5f7] flex items-center justify-center text-[#6b7280] hover:bg-[#e9eaec] transition-colors"
          aria-label="Notificaciones"
        >
          <Bell className="w-4.5 h-4.5" />
        </button>

        {/* Avatar */}
        <button
          className="flex items-center gap-1 hover:opacity-90 transition-opacity"
          aria-label="Perfil de usuario"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/perfil.jpeg"
              alt="Foto de perfil"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <ChevronDown className="w-4 h-4 text-[#8a9099]" />
        </button>
      </div>
    </header>
  )
}
