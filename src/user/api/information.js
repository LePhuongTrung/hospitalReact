import axios from "../../redux/auth/Header";
const API_URL = "http://localhost:3000/";

export const Read = () => axios.get(API_URL + "account/information/find");

export const Create = (data) =>
  axios.post(API_URL + "account/information/create", data);

export const Update = (data) =>
  axios.put(API_URL + "account/information/update", data);
