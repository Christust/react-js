import axiosConfig from "./axios.config";

const authService = {};

authService.login = function login(payload) {
  return axiosConfig.post("login/", { username: "chrisasd", password: 123 });
};

export default authService;
