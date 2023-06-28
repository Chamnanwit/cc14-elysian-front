import axios from "axios";

export const register = (input) => axios.post("/auth/register", input);
<<<<<<< HEAD
export const login = (input) => axios.post("/auth/login", input);
export const fetchMe = () => axios.get("/auth/me");
=======
export const getme = () => axios.get("/auth/me");
>>>>>>> bc25f73abcfe184a8419c93e19598c558a2eb27f
export const updateprofileagency = (input) =>
  axios.patch("/agent/update-profileagency", input);
export const checkMe = (input) => axios.post("/auth/checkMe", input);
