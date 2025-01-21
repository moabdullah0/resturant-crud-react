import ProductForm from "./ProductForm";
import apiClient from "../../../../Services/api-Client";

const PostProduct = ({ productToEdit }) => {
  const handleFormSubmit = async (data) => {
    try {
      if (productToEdit) {
        const response = await apiClient.put(
          `/items/${productToEdit.id}`,
          data
        );
        console.log("Product updated:", response.data);
        alert("Product updated successfully!");
      } else {
        const response = await apiClient.post("/items", data);
        console.log("Product added:", response.data);
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
