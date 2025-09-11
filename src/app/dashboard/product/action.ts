"use server";

import { product } from "@/types/product";

type AddProductResponse = {
  success: boolean;
  product: product;
};


export async function addProduct(formData: FormData):Promise<AddProductResponse> {
  const newProduct: product = {
    id: Number(formData.get("id")),
    name: formData.get("name") as string,
    category: formData.get("category") as string,
    price: parseFloat((formData.get("price") as string) || "0"),
    stock: Number(formData.get("stock")),
    sales: parseFloat((formData.get("sales") as string) || "0"),
  };

  console.log("Product submitted:", newProduct);

  return { success: true, product:newProduct };
}
