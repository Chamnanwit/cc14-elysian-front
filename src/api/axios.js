import axios from "axios";

const Api = axios.create({
  baseURL: "http://146.190.101.167:8888",
});

export const register = (input) => {
  return Api.post("/auth/register", input);
};
