import useData from "./useData";

const useStatus = () => {
  const { data, error, loading } = useData("/items", {
    params: {
      status: "",
    },
  });
  return {
    data,
    error,
    loading,
  };
};

export default useStatus;
