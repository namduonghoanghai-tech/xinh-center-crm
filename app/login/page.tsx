"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return <p>Loading...</p>
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>CRM DASHBOARD</h1>

      <p>Xin chào: {session?.user?.name}</p>
      <p>Role: {session?.user?.role}</p>

      <button onClick={() => signOut({ callbackUrl: "/login" })}>
        Logout
      </button>

      <hr />

      <h3>Modules CRM</h3>

      <ul>
        <li>Khách hàng</li>
        <li>Đơn hàng</li>
        <li>Báo cáo</li>
      </ul>
    </div>
  )
}