import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
<<<<<<< HEAD
import HomePage from "../pages/HomePage";
import AdminLoginPage from "../pages/AdminLoginPage";
import RegisterPage from "../pages/RegisterPage";
=======
import HomePage from "../page/HomePage";
import AdminPage from "../pages/AdminPage";
>>>>>>> develop

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      // children: [],
    },
    {
<<<<<<< HEAD
      path: "/adminlogin",
      element: <AdminLoginPage />,
      // children: [],
    },
    {
      path: "/register",
      element: <RegisterPage />,
=======
      path: "/admin",
      element: <AdminPage />,
>>>>>>> develop
      // children: [],
    },
  ]);

  return <RouterProvider router={router} />;
}
