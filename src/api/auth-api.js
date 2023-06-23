import axios from "axios";

export const register = (input) => {return Api.post("/auth/register", input);};
  