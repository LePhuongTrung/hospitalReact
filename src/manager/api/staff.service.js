import axios from "../../redux/auth/Header";
const API_URL = "http://localhost:3000/";
export const findAll = (page) => axios.get(API_URL + `account/staff/${page}/7`);

export const create = (data) => axios.post(API_URL + `account/staff`, data);

export const CreateMany = (data) =>
  axios.post(API_URL + "account/staff/addMany", data);
