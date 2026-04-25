"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Dashboard() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const load = async () => {
      const { count } = await supabase
        .from("customers")
        .select("*", { count: "exact", head: true })

      setCount(count || 0)
    }

    load()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>

      <div className="bg-white p-5 rounded shadow">
        <p>Total Customers</p>
        <h2 className="text-3xl font-bold">{count}</h2>
      </div>
    </div>
  )
}