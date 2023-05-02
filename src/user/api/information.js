import axios from "../../redux/auth/Header";
const API_URL = "http://localhost:3001/";

export const Read = () => axios.get(API_URL + "account/information");

export const Create = (data) =>
  axios.post(API_URL + "account/information", data);

export const Update = (data) =>
  axios.put(API_URL + "account/information", data);
