import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import HomePage from "../page/HomePage";
import AdminPage from "../pages/adminPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      // children: [],
    },
    {
      path: "/admin",
      element: <AdminPage />,
      // children: [],
    },
  ]);

  return <RouterProvider router={router} />;
}
