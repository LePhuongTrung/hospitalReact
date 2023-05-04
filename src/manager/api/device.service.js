import axios from "../../redux/auth/Header";
const API_URL = "http://localhost:3007/";
export const findAll = (page) =>
  axios.get(`http://localhost:3003/room/wait/${page}/11`);

export const get = (id) => axios.get(API_URL + `devices/${id}`);

export const create = (data) => axios.post(API_URL + `devices`, data);

export const change = (data, id) => axios.put(API_URL + `devices/${id}`, data);

export const deleteDevice = (id) => axios.delete(API_URL + `devices/${id}`);

export const CreateMany = (data) =>
  axios.post("http://localhost:3003/room/wait/updateDevice", data);
