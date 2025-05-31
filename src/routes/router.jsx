import {
  createBrowserRouter
} from "react-router";
import MainLayaout from "../layout/MainLayaout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: ErrorPage,
    Component: MainLayaout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/login",
        Component: Login
      }
    ]
  },
  {
        path: "*",
        Component: ErrorPage
    }
]);

export default router;