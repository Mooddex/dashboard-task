import { Users, Package, BarChart3, Activity } from "lucide-react";
import ActionButton from "../_buttons/ActionButton";

const QuickActionSection = () => {
    return ( 
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <ActionButton
          actionName="Add Client"
          link="dashboard/client/new"
          icon={Users}
          style="flex items-center gap-3 p-4 dark:bg-gray-800 rounded-lg bg-blue-50 text-blue-600 hover:scale-105 transition cursor-pointer"
           />
           <ActionButton
          actionName="Add Product"
          link="dashboard/product/new"
          icon={Package}
          style="flex items-center gap-3 p-4 dark:bg-gray-800 rounded-lg bg-green-50 text-green-600 hover:scale-105 transition cursor-pointer"
           />
          <ActionButton
          actionName="View Reports"
          link="dashboard/reports"
          icon={BarChart3}
          style="flex items-center gap-3 p-4 dark:bg-gray-800 rounded-lg bg-purple-50 text-purple-600 hover:scale-105 transition cursor-pointer"
           />
        
        </div>
      </div>
     );
}
 
export default QuickActionSection;