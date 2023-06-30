import axios from "./axios";

export const requestOtpService = (phoneNumber) =>
  axios.post("/auth/otp", phoneNumber);
export const verifyOtp = (input) => axios.post("/auth/verify", input);
