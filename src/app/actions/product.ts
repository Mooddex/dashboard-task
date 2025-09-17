"use server"

import { TAddProductSchema, TEditProductSchema } from "@/lib/validators"
import { toast } from "react-toastify"

//  Get all products
export async function fetchProducts() {
  const res = await fetch("https://api.mockae.com/fakeapi/products")
  if (!res.ok) throw new Error("Failed to load products")
  return res.json()
}

//  Get product by ID
export async function fetchProductById(id: string) {
  const res = await fetch(`https://api.mockae.com/fakeapi/products/${id}`)
  if (!res.ok) throw new Error("Failed to load product")
  return res.json()
}


// Add product
export async function addProductAction(newProduct:TAddProductSchema) {


  const res = await fetch("https://api.mockae.com/fakeapi/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  })

  if (!res.ok) {
    return { success: false, message: "Failed to create Product" }
  }

  const data = await res.json()
  return { success: true, data }
}

// Update product
export async function updateProductAction(id: string, updatedProduct:TEditProductSchema){
 
  try{
  const res = await fetch(`https://api.mockae.com/fakeapi/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  })

  if (!res.ok) {
    return { success: false, message: "Failed to update product" }
  }

  const data = await res.json()
  return { success: true, data }
} catch (error){
console.error("Update product error:", error)
    return { success: false, message: "Network error occurred", error }
 
}
}



//  Delete product
export async function handleDeleteProduct(id: string) {
 try{ 
  const res = await fetch(`https://api.mockae.com/fakeapi/products/${id}`, {
    method: "DELETE",
  })
  if (!res.ok) {
        toast.error(" Failed to delete product", {
          position: "top-left",
          autoClose: 3000,
        });
        return false;
      }
  
      toast.success(" product deleted successfully", {
        position: "top-left",
        autoClose: 3000,
      });
      return true;
    } catch (error) {
      console.error("Delete error:", error);
      toast.error(" Something went wrong", {
        position: "top-left",
        autoClose: 3000,
      });
      return false;
    }
  }
