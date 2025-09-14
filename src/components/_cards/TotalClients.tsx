"use client"
import { fetchClients } from "@/app/actions/client"
import { Package, Users } from "lucide-react"
import { useEffect, useState } from "react"
import DashboardCard from "./DashboardCard"

export const TotalClientsCard = () => {
     const [data, setData] = useState<any[]>([])
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            fetchClients()
            .then(setData)
            .catch(console.error)
            .finally(() => setLoading(false))
        }, []);
        const totalClients = data.length
      
    return(
        <div>
            <DashboardCard title="Clients" value={loading?"Calculating...":totalClients} icon={<Users className="w-6 h-6" />} />
        </div>
    );
};