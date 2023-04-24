import axiosConfig from "./axios.config";

const authService = {};

authService.login = function login(payload) {
  return axiosConfig
    .post("login/", payload)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
    })
    .catch((error) => {
      console.error(error.response.data);
    });
};

export default authService;
