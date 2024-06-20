import useAllCategory from "../../../hook/useAllCategory";

function Quanlikhoa() {
  const categories = useAllCategory();
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-4">
              Mã khoa
            </th>
            <th scope="col" className="px-4 py-3">
              tên khoa
            </th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((cate) => (
            <tr key={cate.id} className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {cate?.id}
              </th>
              <td className="px-4 py-3">{cate?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Quanlikhoa;
