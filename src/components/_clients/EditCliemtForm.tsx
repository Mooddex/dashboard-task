"use client"

import { useTransition } from "react"
import { toast } from "react-toastify"
import { updateClientAction } from "@/app/actions/client"
import { client } from "@/types/interfaces"

export default function EditClientForm({ client }: { client: client }) {
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        await updateClientAction(client.id.toString(), formData)
        toast.success(" Client updated successfully")
      } catch (err) {
        toast.error(" Error updating client")
        console.error(err)
      }
    })
  }

  return (
    <form action={handleSubmit} className="space-y-4 p-4 border rounded">
      <div>
        <label className="block text-sm">Name</label>
        <input name="username" defaultValue={client.username} className="border p-2 w-full rounded" />
      </div>

      <div>
        <label className="block text-sm">Email</label>
        <input name="email" type="email" defaultValue={client.email} className="border p-2 w-full rounded" />
      </div>

      <div>
        <label className="block text-sm">Phone</label>
        <input name="phone" defaultValue={client.phone} className="border p-2 w-full rounded" />
      </div>

      <div>
        <label className="block text-sm">Country</label>
        <input name="country" defaultValue={client.country} className="border p-2 w-full rounded" />
      </div>

      <div>
        <label className="block text-sm">City</label>
        <input name="city" defaultValue={client.city} className="border p-2 w-full rounded" />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isPending ? "Saving..." : "Save Changes"}
      </button>
    </form>
  )
}
