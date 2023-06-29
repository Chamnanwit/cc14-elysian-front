import axios from "./axios";

export const getAdminInformation = () => axios.get("admin/all-admin");
export const createAdminInformation = (input) =>
  axios.post("/admin/admin-create-form", input);
