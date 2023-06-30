import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import HomePage from "../page/HomePage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      // children: [],
    },
  ]);

  return <RouterProvider router={router} />;
}
