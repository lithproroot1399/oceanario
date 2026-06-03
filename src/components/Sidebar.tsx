"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
// Ícones modernos e consistentes (npm i lucide-react)
import {
  Network,
  Globe,
  Wifi,
  ShieldCheck,
  Wrench,
  LayoutGrid,
} from "lucide-react"

const menuItems = [
  { text: "SWITCHS", href: "/switchs", icon: Network },
  { text: "REDE ODL", href: "/rede-odl", icon: Network },
  { text: "VLANS", href: "/vlans", icon: Globe },
  { text: "Wi-Fi", href: "/wifi", icon: Wifi },
  { text: "VPN", href: "/vpn", icon: ShieldCheck },
  { text: "TOOLS", href: "/tools", icon: Wrench },
  { text: "APPS", href: "/apps", icon: LayoutGrid },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-72 bg-white p-4 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
      <ul className="space-y-2.5">
        {menuItems.map((item) => {
          const Icon = item.icon
          // Verifica se o botão atual corresponde à rota ativa
          const isActive = pathname === item.href

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-4 px-5 py-3.5 rounded-xl border font-bold text-sm tracking-wide transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-50/60 border-blue-200 text-blue-600 shadow-sm"
                      : "bg-gray-50/50 border-gray-100 text-blue-600 hover:bg-gray-100/80 hover:border-gray-200 hover:translate-x-0.5"
                  }`}
              >
                {/* Ícone com cor correspondente à identidade visual */}
                <Icon
                  className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-blue-500"}`}
                />
                <span>{item.text}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
