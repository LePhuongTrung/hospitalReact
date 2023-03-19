import axios from "../../redux/auth/Header";
const API_URL = "http://localhost:3000/";
export const findAll = (page) => axios.get(API_URL + `sick/findAll/${page}/11`);

export const create = (data) => axios.post(API_URL + `sick/create`, data);

export const CreateMany = (data) =>
  axios.post(API_URL + "sick/createMany", data);
