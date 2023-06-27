import axios from "axios";

export const register = (input) => axios.post("/auth/register", input);
<<<<<<< HEAD
export const getme = () => axios.get("/auth/me");
export const updateprofileagency = (input) =>
  axios.patch("/agent/update-profileagency", input);
export const checkMe = (input) => axios.post("/auth/checkMe", input);
=======


>>>>>>> 2586963f111f010d731a3a8475c9d8c6ba4321e0
