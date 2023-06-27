import axios from "axios";

export const getAdminInformation = () => axios.get('auth/me');