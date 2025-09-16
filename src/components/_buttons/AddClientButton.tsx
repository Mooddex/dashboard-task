import { Users } from "lucide-react";
import ActionButton from "./ActionButton";

export default function AddClientButton() {
    return(
         <ActionButton
                  actionName="Add Client"
                  link="dashboard/client/new"
                  icon={Users}
                  style="flex items-center gap-3 p-4 dark:bg-gray-800 rounded-lg bg-blue-50 text-blue-600 hover:scale-105 transition cursor-pointer"
                   />
    )
}