import * as z from "zod";

//  Base schema for fields
const ClientBaseSchema = z.object({
  username: z
    .string()
    .min(2, "At least Two Characters")
    .endsWith("@", "Username Must End With (@)"),
  email: z.string().email(),
  phone: z.string().min(4, "Must At Least Be 4 Numbers"),
  country: z.string().max(3),
  city: z.string(),
});

// Add schema (no id)
export const AddClientSchema = ClientBaseSchema;
export type TAddClientSchema = z.infer<typeof AddClientSchema>;

// Edit schema (id required)
export const EditClientSchema = ClientBaseSchema.extend({
});
export type TEditClientSchema = z.infer<typeof EditClientSchema>;

//product
const ProductBaseSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  price: z.number().nonnegative("Price cannot be negative"),
  stock: z.number().int().nonnegative("Stock cannot be negative"),

});

// Add schema (no id)
export const AddProductSchema = ProductBaseSchema;
export type TAddProductSchema = z.infer<typeof AddProductSchema>;

// Edit schema (id required)
export const EditProductSchema = ProductBaseSchema;

export type TEditProductSchema = z.infer<typeof EditProductSchema>;



