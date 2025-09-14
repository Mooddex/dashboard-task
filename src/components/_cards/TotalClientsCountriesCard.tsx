"use client"
import { fetchClients } from "@/app/actions/client";
import { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import { Phone } from "lucide-react";

export default function TotalClientsCountriesCard() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClients()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  const totalCountries = new Set(
    data.map((client) => client.country?.trim()?.toLowerCase()).filter(Boolean)
  ).size;

  return (
    <DashboardCard
      title="Countries"
      value={loading?"Calculating...":totalCountries}
      icon={<Phone className="w-6 h-4" />}
    />
  );
};
