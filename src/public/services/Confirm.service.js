import axios from "../../redux/auth/Header";
const API_URL = "http://localhost:3333/";

export const Confirm = async (Link) => {
  const response = await axios.get(API_URL + "user/confirm" + Link);
  return response;
};
