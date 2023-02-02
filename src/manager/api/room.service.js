import axios from "../../redux/auth/Header";
const API_URL = "http://localhost:3002/";
export const findAll = (page) => axios.get(API_URL + `room/findAll/${page}/10`);

export const create = (data) => axios.get(API_URL + `user/register`, data);
