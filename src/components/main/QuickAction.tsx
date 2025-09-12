import AddProductButton from "../_buttons/AddProductButton";
import AddClientButton from "../_buttons/AddClientButton";
import ViewReportesButton from "../_buttons/ViewReportesButton";

const QuickActionSection = () => {
    return ( 
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border p-6 mb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AddClientButton />
          <AddProductButton />
          <ViewReportesButton />
        
        </div>
      </div>
     );
}
 
export default QuickActionSection;