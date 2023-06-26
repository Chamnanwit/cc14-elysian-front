import axios from "./axios";

export const getPropperty = () => axios.get("/agent/properties/:id");
export const creatPropperty = (input) => axios.post("/agent/properties", input);
export const updateProperty = (input) =>
  axios.patch("/agent/properties", input);
export const deleteProperty = (id) =>
  axios.delete(`/agent/deleteProperty${id}`);
