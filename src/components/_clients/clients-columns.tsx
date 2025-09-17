"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { client } from "@/types/interfaces";
import { deleteClientAction } from "@/app/actions/client";
import { toast } from "react-toastify";

export const columns: ColumnDef<client>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "username", header: "Client" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "phone", header: "Phone Number" },
  { accessorKey: "country", header: "Country" },
  { accessorKey: "city", header: "City" },
  {
    id: "actions",
    cell: ({ row }) => {
      const client = row.original;

      const handleDeleteClick = (id: string) => {
        toast.info(
          ({ closeToast }) => (
            <div>
              <p>Are you sure you want to delete?</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={async () => {
                    const res = await deleteClientAction(id);

                    if (res.success) {
                      toast.success("Client deleted successfully ", {
                        autoClose: 3000,
                      });
                    } else {
                      toast.error(res.message, { autoClose: 3000 });
                    }

                    closeToast?.();
                  }}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Yes
                </button>
                <button
                  onClick={closeToast}
                  className="bg-gray-300 text-black px-2 py-1 rounded"
                >
                  No
                </button>
              </div>
            </div>
          ),
          { autoClose: false }
        );
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <Link href={`client/edit/${client.id}`}>
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => handleDeleteClick(String(client.id))}
              className="text-red-600 flex items-center gap-2 cursor-pointer"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
