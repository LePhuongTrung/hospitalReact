import axios from "axios";
const API_URL = "http://localhost:3000/";

export const login = (data) => axios.post(API_URL + "user/Login", data);

export const SignUp = (data) => axios.post(API_URL + "user/register", data);

export const ForgetPassword = (data) =>
  axios.post(API_URL + "user/forgetPassword", data);
export const ResetPassword = (data, email) =>
  axios.post(API_URL + "user/resetPassword?email=" + email, data);

export const Confirm = async (Link) => {
  const response = await axios.get(API_URL + "user/confirm" + Link);
  return response;
};
