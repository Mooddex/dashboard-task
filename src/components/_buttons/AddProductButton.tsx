import { Package } from "lucide-react";
import ActionButton from "./ActionButton";

export default function AddProductButton() {
    return(
        <ActionButton
            actionName="Add Product"
            description="Create new product entry"
            link="dashboard/product/new"
            icon={Package}
            style="flex items-center gap-3 p-4 dark:bg-gray-800 rounded-lg bg-green-50 text-green-600 hover:scale-105 transition cursor-pointer"
          />
    )
}