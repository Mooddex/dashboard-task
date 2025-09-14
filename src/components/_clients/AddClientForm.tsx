"use client"

import { useTransition } from "react"
import { toast } from "react-toastify"
import { addClientAction } from "@/app/actions/client"

export default function AddClientForm() {
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        await addClientAction(formData)
        toast.success(" Client added successfully")
      } catch (err) {
        toast.error(" Error adding client")
        console.error(err)
      }
    })
  }

  return (
    <form action={handleSubmit} className="space-y-4 p-4 border rounded">
      <div>
        <label className="block text-sm">Name</label>
        <input name="username" placeholder="Name" className="border p-2 w-full rounded" />
      </div>

      <div>
        <label className="block text-sm">Email</label>
        <input name="email" type="email" placeholder="Email" className="border p-2 w-full rounded" />
      </div>

      <div>
        <label className="block text-sm">Phone</label>
        <input name="phone" placeholder="Phone Number" className="border p-2 w-full rounded" />
      </div>

      <div>
        <label className="block text-sm">Country</label>
        <input name="country" placeholder="Country" className="border p-2 w-full rounded" />
      </div>

      <div>
        <label className="block text-sm">City</label>
        <input name="city" placeholder="City" className="border p-2 w-full rounded" />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isPending ? "Saving..." : "Add Client"}
      </button>
    </form>
  )
}
