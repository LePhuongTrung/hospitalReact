import axios from "axios";

export const findAll = (page) =>
  axios.get(`http://localhost:3333/room/findAll/${page}/10`);

export const create = (data) =>
  axios.post("http://localhost:3333/user/register", data);
