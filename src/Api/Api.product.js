import { CATEGORY_URL } from "../util/constants";
import http from "./Api";

export const Category = () => http.get(CATEGORY_URL);

export const getAll = () => http.get("userInfor/all");

export const CreateInfor = (body) => http.post("userInfor/createUser", body);

export const DeleteInfor = (id) => http.delete(`userInfor/remove/${id}`);

// export const getIdInfor = (id) => http.get(`userInfor/${id}`);

export const upadteInfor = (id, body) =>
  http.put(`userInfor/updateUser/${id}`, body);
