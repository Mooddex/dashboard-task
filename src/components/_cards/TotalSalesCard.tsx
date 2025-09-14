import { TrendingUp } from "lucide-react";
import DashboardCard from "./DashboardCard";
import { fetchProducts } from "@/app/actions/product";
import { useEffect, useState } from "react";

export const TotalSalesCard = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProducts()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  const totalSold = data.reduce((sum, product) => {
    return sum + product.price * product.rating.count;
  }, 0);
   const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalSold);

  return (
    <div>
      <DashboardCard
        title="Sold"
        value={loading ? "Calculating..." : formattedTotal}
        icon={<TrendingUp className="w-6 h-6" />}
      />
    </div>
  );
};
