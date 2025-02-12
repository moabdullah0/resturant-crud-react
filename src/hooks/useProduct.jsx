import useData from "./useData";
import apiClient from "../../Services/api-Client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useProduct = (ProductStatus) => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["items", ProductStatus],
    queryFn: () =>
      apiClient
        .get("/items", {
          params: {
            status: ProductStatus,
          },
        })
        .then((res) => res.data),
  });
  const handlePost = useMutation({
    mutationFn: (newPost) =>
      apiClient.post("/items", newPost).then((res) => res.data),
    onMutate: async (newPost) => {
      queryClient.setQueryData("items", (oldData) => [
        ...(oldData || []),
        newPost,
      ]);
    },
    onError: (err, newPost, context) => {
      queryClient.setQueryData("items", context.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("items");
    },
  });

  const handleUpdate = useMutation({
    mutationFn: async ({ productToEdit, updatedData }) =>
      apiClient
        .put(`/items/${productToEdit.id}`, updatedData)
        .then((res) => res.data),

    onMutate: async ({ productToEdit, updatedData }) => {
      await queryClient.cancelQueries("items");

      const previousData = queryClient.getQueryData("items");

      queryClient.setQueryData("items", (oldData) =>
        oldData
          ? oldData.map((item) =>
              item.id === productToEdit.id ? { ...item, ...updatedData } : item
            )
          : []
      );

      return { previousData };
    },

    onError: (context) => {
      queryClient.setQueryData("items", context.previousData);
    },

    onSettled: () => {
      queryClient.invalidateQueries("items");
    },
  });

  const handleDelete = useMutation({
    mutationFn: async (productID) =>
      await apiClient.delete("/items/" + productID).then((res) => res.data),
    onSuccess: () => queryClient.invalidateQueries("items"),
  });
  const viewItem = async (id) => {
    return await apiClient.get(`items/${id}`);
  };

  return {
    data,
    error,
    isLoading,
    handlePost,
    viewItem,
    handleUpdate,
    handleDelete,
  };
};

export default useProduct;
