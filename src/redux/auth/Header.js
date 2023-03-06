import axios from "axios";

axios.interceptors.request.use(
  function (request) {
    const user = JSON.parse(localStorage.getItem("user"));
    const access_token = user ? user.token : null;

    request.headers = { access_token };

    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
