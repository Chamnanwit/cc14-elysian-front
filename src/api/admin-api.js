import axios from "./axios";

export const getAdminInformation = () => axios.get("admin/all-admin");
export const createAdminInformation = (input) =>
  axios.post("/admin/admin-create-form", input);
export const updateAdminInformation = (input) =>
  axios.patch("/admin/admin-edit-form", input);
export const deleteAdminInformation = (id) =>
  axios.delete(`/admin/admin-delete-form/${id}`);

export const getDashboard = () => axios.get(`/admin/get-report`);
export const getDashboardAgent = (id) =>
  axios.get(`/admin/get-report-agent-details/${id}`);
export const getAllHistory = () => axios.get(`/admin/get-all-purchase-history`);
