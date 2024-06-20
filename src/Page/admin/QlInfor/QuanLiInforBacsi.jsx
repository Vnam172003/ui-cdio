import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  CreateInfor,
  DeleteInfor,
  getAll,
  upadteInfor,
} from "../../../Api/Api.product";
import { Modal, Select } from "antd";

import useAllCategory from "../../../hook/useAllCategory";
import { useOutletContext } from "react-router-dom";
import { message } from "antd";
import http from "../../../Api/Api";
function QuanLiInforBacsi() {
  const [search] = useOutletContext();
  const [cate, setCate] = useState();
  const categories = useAllCategory();
  const findCateNameById = (id) => {
    return categories?.find((cate) => cate.id == id)?.name;
  };

  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const handleOpenActions = (index) => {
    if (selectedRowIndex === index) {
      setSelectedRowIndex(null);
    } else {
      setSelectedRowIndex(index);
    }
  };
  const [formDataUpdate, setFormData] = useState({
    fullName: "",
    DateBirthDay: "",
    phone: "",
    categoryId: "",
  });
  const [selectedUsers, setSelectedUsers] = useState(null);
  const handleUpdateProduct = async (event, id) => {
    event.preventDefault();
    try {
      const formDataUpdate = new FormData(event.currentTarget);
      console.log(formDataUpdate.entries());
      const response = await http.put(
        `userInfor/updateUser/${id}`,
        Object.fromEntries(formDataUpdate)
      );
      window.location.reload();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenModalUpdate = (user) => {
    setIsModalOpenEdit(true);
    setFormData({
      fullName: user.fullName,
      DateBirthDay: user.DateBirthDay,
      phone: user.phone,
      categoryId: user.categoryId,
    });
    setSelectedUsers(user);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const { data: DataAll } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return getAll();
    },
  });
  const [users, setusers] = useState(DataAll?.data?.User);
  // const [users, setusers] = useState(DataAll?.data?.User);
  // const [userIds, setUserIds] = useState([]);

  // useEffect(() => {
  //   if (users && Array.isArray(users)) {
  //     // Lấy ra mảng các id từ mảng users
  //     const ids = users.map((user) => user.id);
  //     // Cập nhật state userIds
  //     setUserIds(ids);
  //   }
  // }, [users]);
  // console.log(userIds[5]);

  // const id = userIds;
  // const UpadteMutation = useMutation({
  //   mutationFn: (body) => UpadteMutation(id, body),
  // });

  //Api addInfor
  const { mutate } = useMutation({
    mutationFn: (body) => CreateInfor(body),
    onSuccess: () => {
      message.success("Thêm thành công ");
      window.location.reload();
    },
  });

  //Api Delete Infor
  const { mutate: mutateDelete } = useMutation({
    mutationFn: (id) => DeleteInfor(id),
    onSuccess: () => {
      message.success("Xóa thành công ");
      window.location.reload();
    },
  });

  const handleSubmit = (form) => {
    form.preventDefault();
    var formData = new FormData(form.target);
    mutate(Object.fromEntries(formData));
  };
  useEffect(() => {
    let filteredData = DataAll?.data?.User;
    if (search) {
      filteredData = DataAll?.data?.User.filter((user) =>
        user?.fullName?.toLowerCase().includes(search?.toLowerCase())
      );
    }
    if (cate) {
      filteredData = filteredData?.filter((user) => user?.categoryId == cate);
    }
    setusers(filteredData);
  }, [search, cate, DataAll]);
  const handleDelete = (id) => {
    mutateDelete(id);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCancelEdit = () => {
    setIsModalOpenEdit(false);
  };
  return (
    <div className="overflow-x-auto">
      <Modal open={isModalOpen} onCancel={handleCancel} footer="">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
        >
          <div className="mb-4"></div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Tên bác sĩ:
            </label>
            <input
              type="text"
              name="fullName"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Ngày sinh:
            </label>
            <input
              type="text"
              name="DateBirthDay"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Số điện thoại:
            </label>
            <input
              type="text"
              name="phone"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Mã khoa:
            </label>
            <input
              type="text"
              name="categoryId"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="  flex items-center justify-center bg-slate-500 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Thêm
          </button>
        </form>
      </Modal>
      <Modal open={isModalOpenEdit} onCancel={handleCancelEdit} footer="">
        <form
          onSubmit={(event) =>
            handleUpdateProduct(event, selectedUsers?.id ?? 0)
          }
          encType="multipart/form-data"
          className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
        >
          <div className="mb-4"></div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Tên bác sĩ:
            </label>
            <input
              type="text"
              name="fullName"
              value={formDataUpdate.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Ngày sinh:
            </label>
            <input
              type="text"
              name="DateBirthDay"
              value={formDataUpdate.DateBirthDay}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Số điện thoại:
            </label>
            <input
              type="text"
              name="phone"
              value={formDataUpdate.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Mã khoa:
            </label>
            <input
              type="text"
              name="categoryId"
              value={formDataUpdate.categoryId}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="  flex items-center justify-center bg-slate-500 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Cập Nhật
          </button>
        </form>
      </Modal>
      <div className=" mx-5 flex justify-between">
        <Select
          className="w-52 mb-5"
          defaultValue="Tất cả"
          onChange={(value) => setCate(value)}
          options={categories?.map((cate) => ({
            label: cate.name,
            value: cate.id,
          }))}
        />
        <div className="  w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <button
            type="button"
            onClick={showModal}
            id="createProductModalButton"
            data-modal-target="createProductModal"
            data-modal-toggle="createProductModal"
            className="flex items-center justify-center bg-slate-500 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <svg
              className="h-3.5 w-3.5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            Thêm
          </button>
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-4">
              Mã bác sĩ
            </th>
            <th scope="col" className="px-4 py-3">
              tên bác sĩ
            </th>
            <th scope="col" className="px-4 py-3">
              ngày sinh
            </th>
            <th scope="col" className="px-4 py-3">
              sđt
            </th>
            <th scope="col" className="px-4 py-3">
              khoa
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user?.id} className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user?.id}
              </th>
              <td className="px-4 py-3">{user?.fullName}</td>
              <td className="px-4 py-3">{user?.DateBirthDay}</td>

              <td className="px-4 py-3">{user?.phone}</td>
              <td className="px-4 py-3 max-w-[12rem] truncate">
                {findCateNameById(user?.categoryId)}
              </td>

              <td className="px-4 py-3 flex items-center justify-end">
                <button
                  className=" items-center relative text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 dark:hover-bg-gray-800 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                  type="button"
                  onClick={() => handleOpenActions(user?.id)}
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
                {selectedRowIndex === user?.id && (
                  <div className=" z-5 bg-gray-700 cursor-pointer  text-gray-200 rounded-lg  text-lg ">
                    <button
                      onClick={() => handleOpenModalUpdate(user)}
                      className="hover:bg-slate-400 w-full px-5 rounded-t-lg"
                    >
                      edit
                    </button>
                    <button
                      onClick={() => handleDelete(user?.id)}
                      className="hover:bg-slate-400 w-full px-5 rounded-b-lg"
                    >
                      delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuanLiInforBacsi;
