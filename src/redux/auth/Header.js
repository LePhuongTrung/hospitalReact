import axios from "axios";

axios.interceptors.request.use(
  function (request) {
    const user = JSON.parse(localStorage.getItem("user"));
    var access_token;
    if (user) {
      access_token = user.token;
    } else {
      access_token = 1;
    }
    request.headers = { access_token };

    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
