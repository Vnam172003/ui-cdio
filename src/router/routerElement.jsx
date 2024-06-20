import { Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout";
import HomePage from "../Page/Home/HomePage";
import Register from "../Page/Auth/Register/Register";
import Login from "../Page/Auth/Login/Login";
import CormFirmEmail from "../Page/Auth/ComfirmEmail/CormFirmEmail";
import UserInfor from "../Page/UserInfor";
import ListInfor from "../Page/admin/ListInfor";
import QuanLiAdmin from "../Page/admin/Quanli/QuanLiAdmin";
import QuanliBacsi from "../Page/admin/Quanli/QuanliBacsi";
import QuanliThungan from "../Page/admin/Quanli/QuanliThungan";
import Hosobenhnhan from "../Page/admin/bacsi/Hosobenhnhan";
import Benhnhan from "../Page/admin/bacsi/Benhnhan";
import Toathuoc from "../Page/admin/bacsi/Toathuoc";
import Quanlikhoa from "../Page/admin/QlInfor/Quanlikhoa";
import QuanLiInforBacsi from "../Page/admin/QlInfor/QuanLiInforBacsi";
import QuanLiInforNguoidung from "../Page/admin/QlInfor/QuanLiInforNguoidung";
import Vienphi from "../Page/admin/Thungan/Vienphi";
import Thongke from "../Page/admin/Thungan/Thongke";
import TbvaLh from "../Page/admin/Thungan/TbvaLh";
import Doctor from "../Page/Role/Doctor/Doctor";

function RouterElement() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<ListInfor />}>
          <Route path="quanli" element={<QuanLiAdmin />}>
            <Route path="khoa" element={<Quanlikhoa />} />
            <Route path="qlBacsi" element={<QuanLiInforBacsi />} />
            <Route path="taikhoan" element={<QuanLiInforNguoidung />} />
          </Route>
          <Route path="bacsi" element={<QuanliBacsi />}>
            <Route path="qlbenhnhan" element={<Benhnhan />} />
            <Route path="qlhosobenhnhan" element={<Hosobenhnhan />} />
            <Route path="toathuoc" element={<Toathuoc />} />
          </Route>
          <Route path="thungan" element={<QuanliThungan />}>
            <Route path="vienphi" element={<Vienphi />} />
            <Route path="thongke" element={<Thongke />} />
            <Route path="thongbao" element={<TbvaLh />} />
          </Route>
          <Route path="profile" element={<UserInfor />} />
        </Route>
        <Route path="/verify/:email" element={<CormFirmEmail />} />
        <Route path="doctor" element={<Doctor />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default RouterElement;
