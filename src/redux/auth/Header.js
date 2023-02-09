import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  function (request) {
    // Do something before request is sent
    const user = JSON.parse(localStorage.getItem("user"));
    var access_token;
    if (user) {
      access_token = user.token;
    }
    access_token = 1;
    request.headers = { access_token };

    return request;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axios;
