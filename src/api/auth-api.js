import axios from "axios";

export const register = (input) => axios.post("/auth/register", input);
export const getme = () => axios.get("/auth/me");
export const updateprofileagency = (input) =>
  axios.patch("/agent/update-profileagency", input);
export const checkMe = (input) => axios.post("/auth/checkMe", input);
