import axios from "axios";
const API_URL = "http://localhost:3001/";

export const login = (data) => axios.post(API_URL + "account/Login", data);

export const SignUp = (data) => axios.post(API_URL + "account/register", data);

export const ForgetPassword = (data) =>
  axios.post(API_URL + "account/forgetPassword", data);
export const ResetPassword = (data, email) =>
  axios.get(
    API_URL +
      `account/resetPassword?email=${email}&password=${data.currentPassword}&newPassword=${data.newPassword}`
  );

export const Confirm = async (Link) => {
  const response = await axios.get(API_URL + "account/confirm" + Link);
  return response;
};
