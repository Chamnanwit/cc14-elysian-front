import axios from "./axios";

export const getPropperty = () => axios.get("/agent/properties/:id");
export const creatPropperty = (input) => axios.post("/agent/properties", input);
export const updateProperty = (input) =>
  axios.patch("/agent/properties", input);
export const deleteProperty = (id) =>
  axios.delete(`/agent/deleteProperty${id}`);
export const creatImagePropperty = (id, files) => {
<<<<<<< HEAD
  // console.log(id, files);
  return axios.post(`agent/addImage/${id}`, files, {
=======
    // console.log(id, files);
return axios.post(`agent/addImage/${id}`, files, {
>>>>>>> 2586963f111f010d731a3a8475c9d8c6ba4321e0
    headers: { "Content-Type": "multipart/form-data" },
  });
};
