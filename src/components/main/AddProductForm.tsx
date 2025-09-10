"use client";

import { addProduct } from "@/app/main/product/action";

export default function AddProductForm() {
  return (
    <form
      action={(submit) => {
        addProduct;
      }}
      className="max-w-md mx-auto p-4 space-y-4 border rounded shadow"
    >
      {/* ID */}
      <div>
        <label htmlFor="id" className="block text-sm font-medium">
          ID
        </label>
        <input
          type="number"
          name="id"
          id="id"
          required
          className="w-full border rounded p-2"
        />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full border rounded p-2"
        />
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium">
          Category
        </label>
        <input
          type="text"
          name="category"
          id="category"
          required
          className="w-full border rounded p-2"
        />
      </div>

      {/* Price */}
      <div>
        <label htmlFor="price" className="block text-sm font-medium">
          Price (e.g. 0.08)
        </label>
        <input
          type="number"
          step="0.01"
          name="price"
          id="price"
          required
          className="w-full border rounded p-2"
        />
      </div>

      {/* Stock */}
      <div>
        <label htmlFor="stock" className="block text-sm font-medium">
          Stock
        </label>
        <input
          type="number"
          name="stock"
          id="stock"
          required
          className="w-full border rounded p-2"
        />
      </div>

      {/* Sales */}
      <div>
        <label htmlFor="sales" className="block text-sm font-medium">
          Sales (e.g. 23.48)
        </label>
        <input
          type="number"
          step="0.01"
          name="sales"
          id="sales"
          required
          className="w-full border rounded p-2"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>
  );
}
