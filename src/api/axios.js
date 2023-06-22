import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8888",
});

export const register = (input) => {
  return Api.post("/auth/register", input);
};
