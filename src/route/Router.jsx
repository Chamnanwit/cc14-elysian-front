import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminLoginPage from "../pages/AdminLoginPage";
import RegisterPage from "../pages/RegisterPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      // children: [],
    },
    {
      path: "/adminlogin",
      element: <AdminLoginPage />,
      // children: [],
    },
    {
      path: "/register",
      element: <RegisterPage />,
      // children: [],
    },
  ]);

  return <RouterProvider router={router} />;
}
