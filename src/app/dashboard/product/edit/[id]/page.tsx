import EditProductForm from "@/components/_products/EditProductForm";
import {  fetchProductById } from "@/app/actions/product";

interface EditingProductProps {
  params: {
    id: string;
  };
}

export default async function EditingProductPage({ params }: EditingProductProps) {
  const product = await fetchProductById(params.id);

 if (!product) {
    return <div className="p-6">Product not found</div>
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <EditProductForm product={product} />
    </div>
  );
};
