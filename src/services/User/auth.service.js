import axios from "axios";

const login = (payload) => {
  axios.post("http://localhost:3333/user/Login", payload);
};
const Signup = (payload) => {
  axios.post("http://localhost:3333/user/register", payload);
};

export default {
  login,
  Signup,
};
