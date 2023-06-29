import axios from "axios";

export const register = (input) => axios.post("/auth/register", input);
export const login = (input) => axios.post("/auth/login", input);
export const fetchMe = () => axios.get("/auth/me");
export const updateAgency = (input) =>
  axios.patch("/agent/update-profileagency");
export const updateprofileagency = (input) =>
  axios.patch("/agent/update-profileagency", input);
export const checkMe = (input) => axios.post("/auth/checkMe", input);
