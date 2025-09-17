

import { fetchProducts } from "@/app/actions/product"
import { Grid3X3 } from "lucide-react"
import { useEffect, useState } from "react"
import DashboardCard from "./DashboardCard"
import { product } from "@/types/interfaces"

export const ProductCategoryCard = () => {
     const [data, setData] = useState<product[]>([])
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            fetchProducts()
            .then(setData)
            .catch(console.error)
            .finally(() => setLoading(false))
        }, [])
        const totalCategories = new Set(data.map(product => product.category)).size
    
    return(
        <div>
             <DashboardCard
              title="Categories"
              value={loading?"Calculating...":totalCategories}
              icon={<Grid3X3 className="w-6 h-6" />}
            />
        </div>
    )
}