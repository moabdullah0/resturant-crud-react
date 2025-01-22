import ProductForm from "./ProductForm";
import useProduct from "../../../hooks/useProduct";

const PostProduct = ({ productToEdit }) => {
  const { handleUpdate, handlePost } = useProduct();

  const handleFormSubmit = async (data) => {
    try {
      if (productToEdit) {
        await handleUpdate(productToEdit, data);
        alert("Product updated successfully!");
      } else {
        await handlePost(data); 
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
