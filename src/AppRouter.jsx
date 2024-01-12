import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Jobs = lazy(() => import("./pages/Jobs"));

export default function AppRouter() {
  let element = useRoutes([
    {
      path: "/jobs",
      element: <Jobs />,
    },
    {
      path: "/jobs/:id",
      element: <JobDetails />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return element;
}
