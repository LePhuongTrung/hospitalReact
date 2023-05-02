import axios from "../../redux/auth/Header";
const API_URL = "http://localhost:3003/";
export const findAll = (page) => axios.get(API_URL + `room/findAll/${page}/11`);

export const getAll = () => axios.get(API_URL + `room/getAll`);

export const create = (data) => axios.post(API_URL + `room`, data);

export const CreateMany = (data) =>
  axios.post(API_URL + "room/createMany", data);
