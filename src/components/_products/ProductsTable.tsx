"use client";

import { DataTable } from "@/components/main/Data-table";
import { columns } from "@/components/_products/product-columns";
import { fetchProducts } from "@/app/actions/product";
import { useState, useEffect } from "react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Package } from "lucide-react";
import { TotalSalesCard } from "../_cards/TotalSalesCard";
import { ProductCategoryCard } from "../_cards/ProductCategoriesCard";
import { TotalStockCard } from "../_cards/TotalStockCard";
import { TotalProductsCard } from "@/components/_cards/TotalProducts";
import ResponsiveCard from "../_cards/ResponsiveDTCard";
import AddProductButton from "@/components/_buttons/AddProductButton";
import ViewReporetsButton from "../_buttons/ViewReportesButton";
import PaginationSetup from "../main/PaginationSetUp";

export default function ProductsTable() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Product Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Manage and monitor your product inventory
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="">
            <TotalProductsCard />
          </div>

          <div className="">
            <TotalStockCard />
          </div>

          <div className="">
            <ProductCategoryCard />
          </div>

          <div className="">
            <TotalSalesCard />
          </div>
        </div>
        {/* Quick Actions Section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:justify-items-center">
          <AddProductButton />
          <ViewReporetsButton />
        </div>

        {/* Desktop Clients Table */}
        <div className="hidden sm:block">
          <Card className="w-full shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Package className="w-8 h-8" />
                  <div>
                    <CardTitle className="text-2xl font-bold">
                      Product Inventory
                    </CardTitle>
                    <p className="text-blue-100 mt-1">
                      Complete list of all products in your inventory
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-blue-100">Last Updated</div>
                  <div className="text-lg font-semibold">
                    {new Date().toLocaleDateString()}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
              ) : (
                <DataTable columns={columns} data={data} />
              )}
            </CardContent>
             <PaginationSetup />
          </Card>
        </div>
        {/* Mobile responsive card with popup */}
        <div className="sm:hidden">
          <ResponsiveCard title="Products Table">
            {loading ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : (
              <DataTable data={data} columns={columns} />
            )}
          </ResponsiveCard>
        </div>
      </div>
    </div>
  );
}
