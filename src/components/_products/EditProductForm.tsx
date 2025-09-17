"use client";

import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddProductSchema, TAddProductSchema } from "@/lib/validators";
import { product } from "@/types/interfaces";
import { updateProductAction } from "@/app/actions/product";
import { useRouter } from "next/navigation";

interface AddProductFormProps {
  product: product;
}

export default function AddProductForm({ product }: AddProductFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TAddProductSchema>({
    resolver: zodResolver(AddProductSchema),
    defaultValues: product,
  });

  const submitHandler = async (data: TAddProductSchema) => {
    const res = await updateProductAction(String(product.id), data);
    if (res.success) {
      toast.success("Product updated successfully", {
        autoClose: 3000,
        onClick: () => {
          router.push("dashboard/product");
        },
      });
    } else {
      console.error(res.error);
      toast.error(
        res.message || "Something went wrong while updating the Product"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-4 p-4 border rounded"
    >
      <div>
        <label className="block text-sm">Name</label>
        <input {...register("name")} className="border p-2 w-full rounded" />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm">Category</label>
        <input
          {...register("category")}
          className="border p-2 w-full rounded"
        />
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm">Price</label>
        <input
          {...register("price", { valueAsNumber: true })}
          type="number"
          step="any"
          className="border p-2 w-full rounded"
        />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm">Stock</label>
        <input
          {...register("stock", { valueAsNumber: true })}
          type="number"
          className="border p-2 w-full rounded"
        />
        {errors.stock && (
          <p className="text-red-500 text-sm">{errors.stock.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-4 py-2 rounded text-white transition-colors ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700 cursor-pointer"
        }`}
      >
        {isSubmitting ? "Saving..." : "Add Product"}
      </button>
    </form>
  );
}
