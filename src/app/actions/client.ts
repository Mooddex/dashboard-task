"use server"

import { TAddClientSchema, TEditClientSchema } from "@/lib/validators"

// Get all clients
export async function fetchClients() {
  const res = await fetch("https://api.mockae.com/fakeapi/users")
  if (!res.ok) throw new Error("Failed to load clients")
  return res.json()
}

// Get client by ID
export async function fetchClientById(id: string) {
  const res = await fetch(`https://api.mockae.com/fakeapi/users/${id}`)
  if (!res.ok) throw new Error("Failed to load client")
  return res.json()
}

// Add client
export async function addClientAction(newClient: TAddClientSchema) {
  const res = await fetch("https://api.mockae.com/fakeapi/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newClient),
  })

  if (!res.ok) {
    return { success: false, message: "Failed to create client" }
  }

  const data = await res.json()
  return { success: true, data }
 
}

// Edit client
export async function updateClientAction(id: string, updatedClient: TEditClientSchema) {
  try {
    const res = await fetch(`https://api.mockae.com/fakeapi/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedClient),
    })

    if (!res.ok) {
      return { success: false, message: "Failed to update client"}
    }

    const data = await res.json()
    return { success: true, data }
  } catch (error) {
    console.error("Update client error:", error)
    return { success: false, message: "Network error occurred", error }
  }
}

// Delete client
export async function deleteClientAction(id: string) {
  const res = await fetch(`https://api.mockae.com/fakeapi/users/${id}`, {
    method: "DELETE",
  })

  if (!res.ok) {
    return { success: false, message: "Failed to delete client" }
  }

  return { success: true }
}
