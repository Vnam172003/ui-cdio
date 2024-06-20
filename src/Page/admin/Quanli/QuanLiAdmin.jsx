import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Modal } from "antd";

function QuanLiAdmin() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <section className="bg-gray-50  p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-xl dark:bg-gray-900  px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex justify-center gap-5   text-white  mt-4  cursor-pointer">
              <Link to={"/admin/quanli/qlBacsi"} className="text-xl">
                Quản lí bác sĩ
              </Link>
              <Link to={"/admin/quanli/khoa"} className="text-xl">
                Quản lí Khoa
              </Link>
              <Link to={"/admin/quanli/taikhoan"} className="text-xl">
                Quản lí tài khoản người dùng
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Tìm kiếm theo tên "
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
            <Outlet context={[search]} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuanLiAdmin;
