// import React from "react";
// import useProduct from "../../../hooks/useProduct";
// import ProductForm from "./ProductForm";

// const Test = ({ productItem }) => {
//   const { handlePost, handleUpdate } = useProduct();
//   const handleFormSubmit = (data) => {
//     if (handleUpdate) {
//       handleUpdate(productItem, data);
//     } else {
//       handlePost(data);
//     }
//   };

//   return <div>
//     <ProductForm onSubmit={handleFormSubmit} initialData={productItem}/>
//   </div>;
// };

// export default Test;
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { productSchema } from "../../../Validation/schemaProduct";

const Test = (initialData, onSubmit) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: initialData || {},
  });
  const handleSubmitData = (data) => {
    onSubmit(data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <input type="text" {...register("name")} name="name" id="name" />
        {errors.name && <p>{errors.names.message}</p>}
      </form>
    </div>
  );
};

export default Test;
