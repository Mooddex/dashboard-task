"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { product } from "@/types/interfaces";
import { handleDeleteProduct } from "@/app/actions/product";

export const columns: ColumnDef<product>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "category", header: "Category" },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ getValue }) => {
      const price = getValue<number>();
      return `$${price.toFixed(2)}`;
    },
  },
  { accessorKey: "stock", header: "Stock" },
  { accessorKey: "rating.rate", header: "Rating" },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;
      const handleDeleteClick = async () => {
        const confirmed = confirm(
          `Are you sure you want to delete "${product.name}"?`
        );
        if (!confirmed) return;

        const success = await handleDeleteProduct(String(product.id));
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
            <Link href={`product/edit/${product.id}`}>
              <DropdownMenuItem className="flex items-center gap-2">
                <Pencil className="h-4 w-4" /> Edit
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-600 flex items-center gap-2 cursor-pointer"
              onClick={handleDeleteClick}
            >
              <Trash className="h-4 w-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
