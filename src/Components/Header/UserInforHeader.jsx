import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserInfo } from "../../hook/useUserInfo";
import { motion } from "framer-motion";
import { Button, Popover } from "antd";

function UserInforHeader() {
  // const [showPopover, SetShowPopover] = useState(false);
  const user = useUserInfo();
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("atk");
    window.location.href = "/login";
  };

  return (
    <>
      {!user && (
        <Link to={"/login"} className="flex gap-1 items-center hover:underline">
          <div className=" bg-mainColor-color_D9D9D9  p-2 rounded-full"></div>
          <motion.span
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="font-bold "
          >
            Login
          </motion.span>
        </Link>
      )}
      {user && (
        <div className="relative flex gap-3 items-center hover:underline cursor-pointer">
          <div className=" bg-mainColor-color_D9D9D9  p-2 rounded-full"></div>

          <motion.span
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="font-bold "
          ></motion.span>
          <Popover
            content={
              <div className="">
                <Link to={"/admin/profile"}>
                  <div className=" px-1 py-3 text-black hover:bg-gray-200">
                    Personal Information
                  </div>
                </Link>
                {user && user.role === "admin" && (
                  <div className=" px-1 py-3 text-black hover:bg-gray-200">
                    <Link to={"/admin/profile"} className="">
                      Manage Information
                    </Link>
                  </div>
                )}
                {user && user.role === "bacsi" && (
                  <div className=" px-1 py-3 text-black hover:bg-gray-200">
                    <Link to={"/doctor"} className="">
                      Doctor Information
                    </Link>
                  </div>
                )}
                <div
                  className="px-1 py-3  text-black hover:bg-gray-200"
                  onClick={handleLogout}
                >
                  <Link to={"/login"}>Logout</Link>
                </div>
              </div>
            }
            title="Hello "
          >
            <Button type="primary" className="bg-white text-black">
              {user.firstName + user.lastName}
            </Button>
          </Popover>
          <div className="">{user.role}</div>
        </div>
      )}
    </>
  );
}

export default UserInforHeader;
