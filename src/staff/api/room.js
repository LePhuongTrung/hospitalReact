import axios from "../../redux/auth/Header";
const API_URL = "http://localhost:3000/";

export const getPatient = (roomName) =>
  axios.get(API_URL + `room/getPatient?roomNumber=${roomName}`);
