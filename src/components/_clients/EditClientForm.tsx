"use client";

import { TEditClientSchema, EditClientSchema } from "@/lib/validators";
import { toast } from "react-toastify";
import { updateClientAction } from "@/app/actions/client";
import { client } from "@/types/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function EditClientForm({ client }: { client: client }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TEditClientSchema>({
    resolver: zodResolver(EditClientSchema),
    defaultValues: client,
  });

  const onSubmit = async (data: TEditClientSchema) => {
    const res = await updateClientAction(String(client.id), data);

    if (res.success) {
      toast.success("Client updated successfully!",
        {
          autoClose: 500,
          onClose: () => {
            router.push("/dashboard/client");
          },
        })
    } else {
      console.error(res.error);
      toast.error(res.message || "Something went wrong while updating client");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-4 border rounded"
    >
      <div>
        <label className="block text-sm">Name</label>
        <input
          {...register("username")}
          className="border p-2 w-full rounded"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm">Email</label>
        <input
          {...register("email")}
          type="email"
          className="border p-2 w-full rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm">Phone</label>
        <input {...register("phone")} className="border p-2 w-full rounded" />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm">Country</label>
        <input {...register("country")} className="border p-2 w-full rounded" />
        {errors.country && (
          <p className="text-red-500 text-sm">{errors.country.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm">City</label>
        <input {...register("city")} className="border p-2 w-full rounded" />
        {errors.city && (
          <p className="text-red-500 text-sm">{errors.city.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        {isSubmitting ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
