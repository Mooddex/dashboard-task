import EditClientForm from "@/components/_clients/EditCliemtForm";
import { fetchClientById } from "@/app/actions/client"

interface editClientProps{
     params: {
    id: string;
  };
};
export default async function EditClientPage({params}:editClientProps) {
    
    const client = await fetchClientById(params.id)
        if(!client)return(
            <div>
                No Clients Found 
            </div>
        );
        return(
            <EditClientForm client={client }  />
        );
}