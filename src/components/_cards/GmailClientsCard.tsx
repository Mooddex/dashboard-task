"use client"

import { Mail } from "lucide-react"
import DashboardCard from "./DashboardCard"
import { useEffect, useState } from "react"
import { fetchClients } from "@/app/actions/client"
import { client } from "@/types/interfaces"

export default function GmailClientsCard() {
    const [data, setData] = useState<client[]>([])
      const [loading, setLoading] = useState(true)
    
     useEffect(() => {
        fetchClients()
          .then(setData)
          .catch(console.error)
          .finally(() => setLoading(false))
      }, [])
      const gmailClients = data.filter(client => client.email.includes("@gmail.com")).length

    return(
         <DashboardCard title="With Gmail" value={loading?"Calculating...":gmailClients} icon={<Mail className="w-6 h-4" />} />
    )
}