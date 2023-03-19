import axios from "../../redux/auth/Header";
const API_URL = "http://localhost:3000/";

export const GetNumber = (data) =>
  axios.post(API_URL + "room/wait/getNumber", data);

export const GetWait = () => axios.get(API_URL + "room/wait/getWait");

export const GetAllWait = () => axios.get(API_URL + `room/wait/getAllWait`);
