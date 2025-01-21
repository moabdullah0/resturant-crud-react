
  import { FaEdit, FaTrash,FaEye } from "react-icons/fa";
  import useProduct from "../../hooks/useProduct";
  import apiClient from "../../../Services/api-Client";
  import ViewItem from "./ViewItem";
import PopUp from "./components/PopUp";
import PostProduct from "./components/ActionProduct";
import Loading from "./components/Loading";

  const DasboardHome = () => {
    const { product, error, setProduct,loading } = useProduct();

    const deleteProduct = async (id) => {
      try {
        await apiClient.delete(`/items/${id}`);
        setProduct(product.filter((p) => p.id !== id));
      } catch (err) {
        console.error("Error deleting product:", err);
      }
    };

    if (loading) return <Loading/>

    return (
      <div className="mx-5 mt-10 flex flex-col space-y-5">
        {error && <p>{error}</p>}
        <PopUp title={"Post New Product"}>
          <PostProduct />
        </PopUp>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-blue-400">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-separate border-spacing-y-2">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-blue-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Image
                </th>
                <th scope="col" className="px-4 py-3">
                  Product
                </th>
                <th scope="col" className="px-4 py-3">
                  Status
                </th>
                <th scope="col" className="px-4 py-3">
                  Price
                </th>
                <th scope="col" className="px-4 py-3">
                  Rating
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {product.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border border-blue-400 hover:bg-gray-100"
                >
                  <td className="px-4 py-2">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium text-green-600 bg-green-100 rounded">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{item.price}</td>
                  <td className="px-4 py-2">{item.rating}</td>
                  <td className="px-4 py-2 flex items-center space-x-2">
                    <PopUp title={<FaEdit />} titlePupup={'Post New Product'}>
                      <PostProduct productToEdit={item}  />
                    </PopUp>
                    <PopUp title={<FaEye />} titlePupup={'View Product'}>
                      <ViewItem itemID={item.id} />
                    </PopUp>
                    <button
                      className="text-gray-600 hover:text-red-500"
                      onClick={() => deleteProduct(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default DasboardHome;
