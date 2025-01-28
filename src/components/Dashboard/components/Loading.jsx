import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <div>
      <div className="mx-5 mt-10 flex flex-col space-y-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-blue-400">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-separate border-spacing-y-2">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-blue-400">
              <tr>
                <th scope="col" className="px-4 py-3">Image</th>
                <th scope="col" className="px-4 py-3">Product</th>
                <th scope="col" className="px-4 py-3">Status</th>
                <th scope="col" className="px-4 py-3">Price</th>
                <th scope="col" className="px-4 py-3">Rating</th>
                <th scope="col" className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.from({ length: 5 }).map((_, index) => (
                  <tr
                    key={index}
                    className="bg-white border border-blue-400 hover:bg-gray-100"
                  >
                    <td className="px-4 py-2"><Skeleton /></td>
                    <td className="px-4 py-2"><Skeleton /></td>
                    <td className="px-4 py-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium text-green-600 bg-green-100 rounded">
                        <Skeleton />
                      </span>
                    </td>
                    <td className="px-4 py-2"><Skeleton /></td>
                    <td className="px-4 py-2"><Skeleton /></td>
                    <td className="px-4 py-2"><Skeleton /></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Loading;
