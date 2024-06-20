import { Outlet } from "react-router-dom";
import InforAdmin from "./InforAdmin";

export default function ListInfor() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <InforAdmin />
      </div>
      <div className="col-span-9">
        <Outlet />
      </div>
    </div>
  );
}
