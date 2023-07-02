import axios from "./axios";

export const getAllAgent = () => axios.get("/agent/all-agency");
export const getAgentById = (id) => axios.get(`/agent/agencybyid/${id}`);
export const deleteAgent = (id) =>
  axios.delete(`/agent/delete-profileagency/${id}`);
export const updateAgent = (input) =>
  axios.patch("/agent/update-profileagency", input);

export const getPurchaseAgentHistory = (id) =>
  axios.get(`/agent/purchase-history/${id}`);

export const paymentPackage = (input) => axios.post("/agent/payment", input);
export const createPaymentData = (idSession) =>
  axios.get("/agent/payment/data?session_id=" + idSession);
