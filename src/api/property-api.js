import axios from "./axios";

export const getPropperty = () => axios.get("/agent/properties/:id");
export const creatPropperty = (input) => axios.post("/agent/properties", input);
<<<<<<< HEAD
export const updateProperty = (input) =>
  axios.patch("/agent/properties", input);
export const deleteProperty = (id) =>
  axios.delete(`/agent/deleteProperty${id}`);
=======
export const creatImagePropperty = (id, files) => {
    // console.log(id, files);
    return axios.post(`agent/addImage/${id}`, files, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };
>>>>>>> 7f7ddbfda806a2c68a5c375828bd3179cb566a2d
