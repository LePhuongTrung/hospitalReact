import axios from "axios";

export const login = (payload) =>
  axios.post("http://localhost:3333/user/Login", payload);

export const register = (payload) =>
  axios.post("http://localhost:3333/user/register", payload);