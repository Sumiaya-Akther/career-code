import {
  createBrowserRouter
} from "react-router";
import MainLayaout from "../layout/MainLayaout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";

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
      }
    ]
  },
  {
        path: "*",
        Component: ErrorPage
    }
]);

export default router;