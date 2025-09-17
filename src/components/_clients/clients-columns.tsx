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
      const handleDeleteClick = async () => {
        const confirmed = confirm(
          `Are you sure you want to delete "${client.username}"?`
        );
        if (!confirmed) return;

        const success = await deleteClientAction(String(client.id));
        if (success) {
          window.location.reload();
        }
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
              onClick={handleDeleteClick}
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
