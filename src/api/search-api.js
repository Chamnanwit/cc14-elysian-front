import axios from "./axios";

export const getRoomTypeProvince = () =>
  axios.get("/search/getroomtypeprovince");
