import axios from "../../redux/auth/Header";
const API_URL = "http://localhost:3000/";

export const Read = () => axios.get(API_URL + "info/find");

export const Create = (data) => axios.post(API_URL + "info/create", data);
