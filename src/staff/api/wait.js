import axios from "../../redux/auth/Header";
const API_URL = "http://localhost:3000/";

export const diagnostic = (data) =>
  axios.post(API_URL + "room/wait/diagnostic", data);
