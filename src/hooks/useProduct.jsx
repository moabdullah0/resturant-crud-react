import { useEffect, useState } from "react";
import apiClient from "../../Services/api-Client";

const useProduct = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (productToEdit, data) => {
    try {
      const response = await apiClient.put(`/items/${productToEdit.id}`, data);
      return response.data;
    } catch (err) {
      console.error("Error updating product:", err);
      throw err;
    }
  };
  const viewItem = async (id) => {
    return await apiClient.get(`items/${id}`);
  };
  const handlePost = async (data) => {
    try {
      const response = await apiClient.post(`/items`, data);
      return response.data;
    } catch (err) {
      console.error("Error adding product:", err);
      throw err;
    }
  };
  const deleteProduct = async (productID) => {
    return apiClient.delete(`/items/${productID}`);
  };
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get("/items");
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, []);

  return {
    product,
    error,
    setProduct,
    loading,
    handleUpdate,
    handlePost,
    deleteProduct,
    viewItem,
  };
};

export default useProduct;
