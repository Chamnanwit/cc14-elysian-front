import axios from "./axios";

export const getAllProperty = () => axios.get("/agent/properties");
export const getPropertyById = (id) => axios.get(`/agent/properties/${id}`);

export const getAllImagePropertyById = (id) => axios.get(`/agent/get-all-image-property/${id}`);

export const getPropertyUserById = (id) =>
  axios.get(`/agent/propertybyagencyid/${id}`);
export const creatProperty = (input) => axios.post("/agent/properties", input);

export const updateProperty = (input) =>
  axios.patch("/agent/properties", input);
export const deleteProperty = (id) => axios.delete(`/agent/properties/${id}`);
export const creatImagePropperty = (id, files) => {
  // console.log(id, files);
  return axios.post(`agent/addImage/${id}`, files, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const editImageProperty = (id) => axios.delete(`agent/deleteImage/${id}`)
