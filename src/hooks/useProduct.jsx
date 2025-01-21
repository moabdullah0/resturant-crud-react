import  { useEffect, useState } from "react";
import apiClient from "../../Services/api-Client";

const useProduct = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      await apiClient
        .get("/items")
        .then((res) => {
          setProduct(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    };

    getProduct();
  }, []);
  return { product, error, setProduct ,loading};
};

export default useProduct;
