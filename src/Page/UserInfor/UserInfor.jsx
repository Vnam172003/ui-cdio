import { useState } from "react";
import { useUserInfo } from "../../hook/useUserInfo";
import { useMutation } from "@tanstack/react-query";
import { UpdateAccountUser } from "../../Api/Api.auth";

function UserInfor() {
  const userInfor = useUserInfo();
  const isVerifyEmailColor = userInfor.isVerifyEmail === "1" ? "green" : "";
  const [isUpdateProfile, setIsUpdateProfile] = useState(false);
  const [name, setUserName] = useState(
    `${userInfor.firstName} ${userInfor.lastName}`
  );
  const { mutate } = useMutation({
    mutationFn: ({ firstName, lastName, id }) => {
      return UpdateAccountUser({ firstName, lastName }, id);
    },
  });
  const saveDisplay = isUpdateProfile ? "save" : "edit";
  const handleUpdateUserInfor = () => {
    const [firstName, lastName] = name.split(" ");
    mutate(
      { firstName, lastName, id: userInfor.id },
      {
        onSuccess(data) {
          localStorage.setItem(
            "userInfo",
            JSON.stringify(data.data.updatedUser),
            window.location.reload()
          );
        },
      }
    );
  };

  return (
    <div className=" flex bg-[#F5F5F5] mt-[100px] ">
      <img
        src="https://i.pinimg.com/originals/58/07/d8/5807d8915d452d821a20f211f16a6b71.gif"
        alt=""
        width={400}
      />
      <div className=" text-black my-auto w-full mx-40  border border-black ">
        <div className="  ">
          <div className="bg-gray-500 py-2 text-center text-2xl text-white">
            Thông tin cá nhân
          </div>
          <div className="flex mx-5">
            <input
              type="text"
              className=" bg-[#F5F5F5] py-5   font-bold  text-3xl outline-none  bg-none"
              value={name}
              onChange={(e) => {
                setIsUpdateProfile(true);
                setUserName(e.target.value);
              }}
            />
            <span
              className={` my-auto bg-black px-2 py-1 text-white rounded-full hover:text-mainColor-color_hover  text-lg cursor-pointer`}
              onClick={handleUpdateUserInfor}
            >
              {saveDisplay}
            </span>
          </div>
        </div>
        <div className="">
          <div className="my-5 px-6">
            <a href="#" className="text-black">
              kết nối với
              <span className=" pl-1 font-bold">{userInfor.email}</span>
            </a>
          </div>
          <div className="w-full">
            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
              <div className="flex gap-2 border-t border-gray-100  py-4 pl-6 pr-3 w-full  hover:bg-gray-100 transition duration-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`text-${isVerifyEmailColor}-500 w-6 h-6`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Email đã xác thực
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserInfor;
