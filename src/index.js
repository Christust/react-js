import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Styles
import "./styles/index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// React router imports:
import { RouterProvider } from "react-router-dom";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUfKa0ASctRFiAWnkSDl9WW-hLnQmVbVg",
  authDomain: "react-js-a9aca.firebaseapp.com",
  projectId: "react-js-a9aca",
  storageBucket: "react-js-a9aca.appspot.com",
  messagingSenderId: "624610062945",
  appId: "1:624610062945:web:d1ad4f27ae6e7aa2b4f020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
