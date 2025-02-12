import useProduct from "../../../../hooks/useProduct";
import ProductForm from "./ProductForm";

const PostProduct = ({ productToEdit }) => {
  const { handleUpdate, handlePost } = useProduct();

  const handleFormSubmit = async (data) => {
    try {
      if (productToEdit) {
        await handleUpdate.mutateAsync({ productToEdit, updatedData: data });
        alert("Product updated successfully!");
      } else {
        await handlePost.mutateAsync(data);
        alert("Product added successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Operation failed!");
    }
  };
  

  return (
    <ProductForm initialData={productToEdit} onSubmit={handleFormSubmit} />
  );
};

export default PostProduct;
