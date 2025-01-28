
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";

const SearchInput = ({ setSearchTerm }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setSearchTerm(data.name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5 flex w-[100%]  border border-gray-500 items-center px-5 rounded-full">
          <input
            type="text"
            className="h-12 px-5 focus:outline-none flex-grow"
            placeholder="بحث عن فرع"
            {...register("name")}
          />
          <button type="submit" className="bg-primary text-white px-2 py-2 rounded-full text-2xl">
            <CiSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
