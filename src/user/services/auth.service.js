import axios from "axios";
const API_URL = "http://localhost:3333/";

export const login = (data) => axios.post(API_URL + "user/Login", data);

export const SignUp = (data) => axios.post(API_URL + "user/register", data);

export const ForgetPassword = (data) =>
  axios.post(API_URL + "user/forgetPassword", data);
