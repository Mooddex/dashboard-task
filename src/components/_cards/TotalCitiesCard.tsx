"use client"


import { fetchClients } from "@/app/actions/client"
import { useState, useEffect } from "react"
import DashboardCard from "./DashboardCard"
import { TowerControl } from "lucide-react"
import { client } from "@/types/interfaces"

export default function TotalCitiesCard() {
    const [data, setData] = useState<client[]>([])
      const [loading, setLoading] = useState(true)
    
     useEffect(() => {
        fetchClients()
          .then(setData)
          .catch(console.error)
          .finally(() => setLoading(false))
      }, []);
     const uniqueCities = new Set(data.map((client) => client.city).filter(Boolean))
const totalCities = uniqueCities.size

      return(
         <DashboardCard title=" Total Cities" value={loading?"Calculating...":totalCities} icon={<TowerControl className="w-6 h-4" />} />
      )}