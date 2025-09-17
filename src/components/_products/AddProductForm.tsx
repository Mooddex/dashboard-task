"use client";

import { TAddProductSchema, AddProductSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { addProductAction } from "@/app/actions/product";

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TAddProductSchema>({
    resolver: zodResolver(AddProductSchema),
  });

  const onSubmit = async (data: TAddProductSchema) => {
    try {
      await addProductAction(data);
      toast.success("Product added successfully!");
    } catch (err) {
      console.log(err)
      toast.error("Something went wrong while adding product");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded">
      <div>
        <label className="block text-sm">Name</label>
        <input
          {...register("name")}
          placeholder="Product Name"
          className="border p-2 w-full rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm">Category</label>
        <input
          {...register("category")}
          placeholder="Category"
          className="border p-2 w-full rounded"
        />
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
      </div>

      <div>
        <label className="block text-sm">Price</label>
        <input
          {...register("price", { valueAsNumber: true })}
          type="number"
          placeholder="Price"
          className="border p-2 w-full rounded"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
      </div>

      <div>
        <label className="block text-sm">Stock</label>
        <input
          {...register("stock", { valueAsNumber: true })}
          type="number"
          placeholder="Stock"
          className="border p-2 w-full rounded"
        />
        {errors.stock && <p className="text-red-500 text-sm">{errors.stock.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        {isSubmitting ? "Saving..." : "Add Product"}
      </button>
    </form>
  );
}
