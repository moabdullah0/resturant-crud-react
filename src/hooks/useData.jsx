import { useEffect, useState } from "react";
import apiClient from "../../Services/api-Client";


const useData = (endpoint, requestConfig , deps ) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        });
        setLoading(false);
        setData(response.data); 
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort(); 
  }, [...deps]);

  return { data, error, loading };
};

export default useData;
