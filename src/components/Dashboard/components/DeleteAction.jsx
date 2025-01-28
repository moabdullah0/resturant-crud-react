import useProduct from "../../../hooks/useProduct";

const DeleteAction = ({ id }) => {
  const { handleDelete } = useProduct();
  return (
    <div>
      <button
        className="text-white bg-red-500 px-3 py-2 rounded-lg mt-5 hover:bg-red-600 transition-colors"
        onClick={() => handleDelete(id)}
      >
        Delete{" "}
      </button>
    </div>
  );
};

export default DeleteAction;
