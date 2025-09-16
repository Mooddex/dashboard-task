"use server"

import { toast } from "react-toastify"

//  Get all clients
export async function fetchClients() {
  const res = await fetch("https://api.mockae.com/fakeapi/users")
  if (!res.ok) throw new Error("Failed to load clients")
  return res.json()
};

// Get client by ID
export async function fetchClientById(id: string) {
  const res = await fetch(`https://api.mockae.com/fakeapi/users/${id}`)
  if (!res.ok) throw new Error("Failed to load client")
  return res.json()
};

//Add Clients
export async function addClientAction(formData: FormData) {
  const newClient = {
    username: formData.get("username"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    country: formData.get("country"),
    city: formData.get("city"),
  }

  const res = await fetch("https://api.mockae.com/fakeapi/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newClient),
  })

  if (!res.ok) throw new Error("Failed to create client")
  return res.json()
};
//Edit Client
export async function updateClientAction(id: string, formData: FormData) {
  const updatedClient = {
    username: formData.get("username"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    country: formData.get("country"),
    city: formData.get("city"),
  };

  const res = await fetch(`https://api.mockae.com/fakeapi/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedClient),
  })

  if (!res.ok) throw new Error("Failed to update client")
  return res.json()
};


// Delete client
export async function handleDelete(id: string) {
  try {
    const res = await fetch(`https://api.mockae.com/fakeapi/users/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      toast.error(" Failed to delete client", {
        position: "top-left",
        autoClose: 3000,
      });
      return false;
    }

    toast.success(" Client deleted successfully", {
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
