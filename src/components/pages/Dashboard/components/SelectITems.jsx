
import useProduct from "../../../hooks/useProduct";


const SelectItems = ({ setSearchTerm }) => {
  const { data } = useProduct();

  const handleSelectChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
        <select
          id="status"
          onChange={handleSelectChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="" disabled>
            Choose a Status
          </option>
          {data?.map((item) => (
            <option key={item.id} value={item.status}>
              {item.status}
            </option>
          ))}
        </select>
    </div>
  );
};

export default SelectItems;
