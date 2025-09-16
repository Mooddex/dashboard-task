"use server"

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
export async function addProductAction(formData: FormData) {
  const newProduct = {
    name: formData.get("name"),
    category: formData.get("category"),
    price: Number(formData.get("price")),
    stock: Number(formData.get("stock")),
    rating: {
      rate: Number(formData.get("rate")),
      count: Number(formData.get("count")),
    },
  }

  const res = await fetch("https://api.mockae.com/fakeapi/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  })

  if (!res.ok) throw new Error("Failed to add product")
  return res.json()
}

// Update product
export async function updateProductAction(id: string, formData: FormData) {
  const updatedProduct = {
    name: formData.get("name"),
    category: formData.get("category"),
    price: Number(formData.get("price")), 
    stock: Number(formData.get("stock")),
    rating: {
      rate: Number(formData.get("rate")),
      count: Number(formData.get("count")),
    },
  }

  const res = await fetch(`https://api.mockae.com/fakeapi/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  })

  if (!res.ok) throw new Error("Failed to update product")
  return res.json()
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
