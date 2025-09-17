import { fetchClientById } from "@/app/actions/client";
import EditClientForm from "@/components/_clients/EditClientForm";

interface editClientProps {
  params: Promise<{ id: string }>;
}

export default async function EditClientPage({ params }: editClientProps) {
  const { id } = await params;
  const client = await fetchClientById(id);

  if (!client) {
    return <div>No Clients Found</div>;
  }

  return <EditClientForm client={client} />;
}
