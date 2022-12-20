import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  function (request) {
    // Do something before request is sent
    const access_token = localStorage.getItem("access_token");

    request.headers = { access_token };

    return request;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axios;
