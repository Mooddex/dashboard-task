import { BarChart3 } from "lucide-react";
import ActionButton from "./ActionButton";

export default function ViewProductsButton() {
    return(
         <ActionButton
          actionName="View Reports"
          description="Analytics & insights"
          link="main/reports"
          icon={BarChart3}
          style="flex items-center gap-3 p-4 dark:bg-gray-800 rounded-lg bg-purple-50 text-purple-600 hover:scale-105 transition cursor-pointer"
           />
    )
}