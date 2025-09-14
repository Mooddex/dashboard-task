"use client"

import { useTransition } from "react"
import { toast } from "react-toastify"
import { addProductAction } from "@/app/actions/product"
import { product } from "@/types/interfaces";

interface EditProductFormProps {
  product: product;
}
export default function AddProductForm({product}:EditProductFormProps) {
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        await addProductAction(formData)
        toast.success(" Product added successfully")
      } catch (err) {
        toast.error(" Error adding product")
        console.error(err)
      }
    })
  }

  return (
    <form action={handleSubmit} className="space-y-4 p-4 border rounded">
      <div>
        <label className="block text-sm">Name</label>
        <input name="name" defaultValue={product.name} className="border p-2 w-full rounded" />
      </div>

      <div>
        <label className="block text-sm">Category</label>
        <input name="category" defaultValue={product.category} className="border p-2 w-full rounded" />
      </div>

      <div>
        <label className="block text-sm">Price</label>
        <input name="price" type="number"step="any" defaultValue={product.price} className="border p-2 w-full rounded" />
      </div>

      <div>
        <label className="block text-sm">Stock</label>
        <input name="stock" type="number" defaultValue={product.stock} className="border p-2 w-full rounded" />
      </div>


      <button
        type="submit"
        disabled={isPending}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        {isPending ? "Saving..." : "Add Product"}
      </button>
    </form>
  )
}
