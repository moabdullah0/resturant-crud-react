import React, { useEffect, useState } from "react";
import apiClient from "../../Services/api-Client";

const useProduct = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getProduct = async () => {
      await apiClient
        .get("/items")
        .then((res) => setProduct(res.data))
        .catch((err) => setError(err.message));
    };

    getProduct();
  }, []);
  return { product, error ,setProduct};
};

export default useProduct;
