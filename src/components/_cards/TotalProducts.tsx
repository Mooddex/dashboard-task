"use client"
import { fetchProducts } from "@/app/actions/product"
import { Package } from "lucide-react"
import { useEffect, useState } from "react"
import DashboardCard from "@/components/_cards/DashboardCard"
import { product } from "@/types/interfaces"

export const TotalProductsCard = () => {
     const [data, setData] = useState<product[]>([])
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            fetchProducts()
            .then(setData)
            .catch(console.error)
            .finally(() => setLoading(false))
        }, []);
        const totalProducts = data.length
      
    return(
        <div>
             <DashboardCard
              title="Products"
              value={loading?"Calculating...":totalProducts}
              icon={<Package className="w-6 h-6" />}
            />
        </div>
    );
};