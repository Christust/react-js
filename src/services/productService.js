import axiosConfig from "./axios.config";


const productService = {};

productService.getProducts = function getProducts() {
  return axiosConfig.get("product/");
};

export default productService;
