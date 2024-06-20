import { Link, useLocation } from "react-router-dom";
import { useUserInfo } from "../../hook/useUserInfo";

function InforAdmin() {
  const user = useUserInfo();

  const location = useLocation();
  const links = [
    { to: "/admin/profile", label: "Thông tin cá nhân" },
    { to: "/admin/quanli/qlBacsi", label: "Quản lí" },
    { to: "/admin/bacsi/qlbenhnhan", label: "Bác sĩ" },
    { to: "/admin/thungan/vienphi", label: "Thu ngân" },
  ];
  return (
    <div>
      <div className="bg-mainColor-color_bg h-screen pt-10 ">
        <Link
          to={"/admin/profile"}
          className="mx-5 flex  bg-slate-400 justify-start px-3 gap-5 items-center rounded-2xl py-3 hover:bg-slate-300"
        >
          <img
            src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
            className="w-[40px] h-[40px] object-cover rounded-full"
            alt=""
          />
          <p className="text-lg">{user.firstName + user.lastName}</p>
        </Link>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="block mx-5 my-2 text-mainColor-color_text hover:bg-slate-300 rounded-md"
          >
            <div
              className={`w-full px-2 py-3 rounded-md ${location.pathname === link.to ? "bg-gray-200" : ""}`}
            >
              {link.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default InforAdmin;
