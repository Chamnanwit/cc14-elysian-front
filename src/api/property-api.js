import axios from "./axios";

export const getPropperty = () => axios.get("/agent/properties/:id");
export const creatPropperty = (input) => axios.post("/agent/properties", input);
export const creatImagePropperty = (id, files) => {
    // console.log(id, files);
    return axios.post(`agent/addImage/${id}`, files, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };