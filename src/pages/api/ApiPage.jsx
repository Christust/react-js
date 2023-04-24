import React from "react";
import productService from "../../services/productService";
import authService from "../../services/authService";
const ApiPage = () => {
  function getProducts() {
    // productService.getProducts().then((res) => {
    //   console.log(res);
    // });
    authService
      .login()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <p>API</p>
      <button onClick={getProducts}>Obtener productos</button>
    </div>
  );
};

export default ApiPage;
