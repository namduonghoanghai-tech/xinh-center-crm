"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Customers", path: "/customers" },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r p-5">
        <h1 className="font-bold text-xl mb-6">CRM SaaS</h1>

        {menu.map((m) => (
          <Link
            key={m.path}
            href={m.path}
            className={`block p-2 rounded mb-2 ${
              pathname === m.path ? "bg-black text-white" : ""
            }`}
          >
            {m.name}
          </Link>
        ))}
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}