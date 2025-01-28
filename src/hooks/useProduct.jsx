import useData from "./useData";
import apiClient from "../../Services/api-Client";

const useProduct = (ProductStatus) => {
  const { data, error, loading } = useData(
    "/items",
    {
      params: {
        status: ProductStatus,
      },
    },
    [ProductStatus]
  );

  const handlePost = async (data) => {
    try {
      const response = await apiClient.post("/items", data);
      return response.data;
    } catch (err) {
      console.error("Error adding product:", err);
      throw err;
    }
  };

  const handleUpdate = async (productToEdit, data) => {
    try {
      const response = await apiClient.put(`/items/${productToEdit.id}`, data);
      return response.data;
    } catch (err) {
      console.error("Error updating product:", err);
      throw err;
    }
  };

  const handleDelete = async (productID) => {
    try {
      const response = await apiClient.delete(`/items/${productID}`);
      return response.data;
    } catch (err) {
      console.error("Error deleting product:", err);
      throw err;
    }
  };

  return {
    data,
    error,
    loading,
    handlePost,
    handleUpdate,
    handleDelete,
  };
};

export default useProduct;
