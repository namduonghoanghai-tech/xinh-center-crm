"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Customers() {
  const [name, setName] = useState("")
  const [list, setList] = useState<any[]>([])

  const load = async () => {
    const { data } = await supabase.from("customers").select("*")
    setList(data || [])
  }

  useEffect(() => {
    load()
  }, [])

  const add = async () => {
    if (!name) return

    await supabase.from("customers").insert([{ name }])
    setName("")
    load()
  }

  const del = async (id: string) => {
    await supabase.from("customers").delete().eq("id", id)
    load()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customers</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Customer name"
        />

        <button onClick={add} className="bg-black text-white px-4 rounded">
          Add
        </button>
      </div>

      <div className="bg-white rounded shadow">
        {list.map((c) => (
          <div key={c.id} className="flex justify-between p-3 border-b">
            {c.name}
            <button onClick={() => del(c.id)} className="text-red-500">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}