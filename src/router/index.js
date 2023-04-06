import App from "../App";
import HomePage from "../pages/home/HomePage";
import ContactPage from "../pages/contact/ContactPage";
import ApiPage from "../pages/api/ApiPage";
import AuthPage from "../pages/auth/AuthPage";
import ErrorPage from "../pages/error/ErrorPage";

import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/about/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "api",
        element: <ApiPage />,
      },
      {
        path: "faqs",
        element: <AboutPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
]);

export default router;
