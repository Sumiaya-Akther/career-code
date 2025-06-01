import {
  createBrowserRouter
} from "react-router";
import MainLayaout from "../layout/MainLayaout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Loading from "../components/Loading/Loading";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: ErrorPage,
    Component: MainLayaout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        // loader: () => fetch('http://localhost:3000/jobs'),
        // hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>
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