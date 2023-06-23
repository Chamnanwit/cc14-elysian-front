import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminLoginPage from "../pages/AdminLoginPage";
import RegisterPage from "../pages/RegisterPage";

import AdminPage from "../pages/AdminPage";
import AgentPage from "../pages/AgentPage";

import PackagePlanPage from "../pages/PackagePlanPage";
import SearchPage from "../pages/SearchPage";
import PhoneNumberPage from "../pages/PhoneNumberPage";
import RentDetailPage from "../pages/RentDetailPage";

import GooglemapApi from "../pages/GooglemapPage";

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
    },
    {
      path: "/admin",
      element: <AdminPage />,
      // children: [],
    },
    {
      path: "/agent",
      element: <AgentPage />,
    },
    {
      path: "/packageplan",
      element: <PackagePlanPage />,
      // children: [],
    },
    {
      path: "/searchpage",
      element: <SearchPage />,
      // children: [],
    },
    {
      path: "/phonenumber",
      element: <PhoneNumberPage />,
      // children: [],
    },
    {
      path: "/rentdetail",
      element: <RentDetailPage />,
      // children: [],
    },
    {
      path: "/map",
      element: <GooglemapApi />,
      // children: [],
    },
  ]);

  return <RouterProvider router={router} />;
}
