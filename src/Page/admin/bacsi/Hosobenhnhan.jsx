import { useState } from "react";

function Hosobenhnhan() {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleOpenActions = (index) => {
    if (selectedRowIndex === index) {
      setSelectedRowIndex(null);
    } else {
      setSelectedRowIndex(index);
    }
  };
  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                tên bệnh nhân
              </th>
              <th scope="col" className="px-4 py-3">
                ngày sinh
              </th>
              <th scope="col" className="px-4 py-3">
                sđt
              </th>
              <th scope="col" className="px-4 py-3">
                lịch khám bệnh
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="px-4 py-3">Phạm Văn Nam</td>
                <td className="px-4 py-3">17/08/2003</td>

                <td className="px-4 py-3">123456</td>
                <td className="px-4 py-3">ngày 17/8/2024</td>
                <td className="px-4 py-3 flex items-center justify-end">
                  <button
                    className=" items-center relative text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 dark:hover-bg-gray-800 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                    type="button"
                    onClick={() => handleOpenActions(index)}
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                  {selectedRowIndex === index && (
                    <div className=" z-5 bg-gray-700 cursor-pointer  text-gray-200 rounded-lg  text-lg ">
                      <div className="hover:bg-slate-400 w-full px-5 rounded-t-lg">
                        edit
                      </div>
                      <div className="hover:bg-slate-400 w-full px-5 rounded-b-lg">
                        delete
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hosobenhnhan;
