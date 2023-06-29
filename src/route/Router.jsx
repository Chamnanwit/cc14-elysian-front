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
import { useAuth0 } from "@auth0/auth0-react";

import PackagePlanPage from "../pages/PackagePlanPage";
import SearchPage from "../pages/SearchPage";
import PhoneNumberPage from "../pages/PhoneNumberPage";
import RentDetailPage from "../pages/RentDetailPage";

import GooglemapApi from "../pages/GooglemapPage";

import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminAnimityPage from "../pages/AdminAnimityPage";
import AdminPricingPlanPage from "../pages/AdminPricingPlanPage";
import AdminListPage from "../pages/AdminListPage";
import AdminPurchasePage from "../pages/AdminPurchasePage";
import AdminViewAgentPage from "../pages/AdminViewAgentPage";
// import UserProfile from "../pages/UserProfile";
import UserProfile from "../pages/UserProfile";
import AdminViewAgentDashboard from "../pages/AdminViewAgentDashboard";

export default function Router() {
  // const { isAuthenticated, loginWithRedirect } = useAuth0();

  // const requireAuth = (link) => {
  //   if (!isAuthenticated) {
  //     console.log(isAuthenticated);
  //     loginWithRedirect(link);
  //     return null;
  //   }
  //   return link;
  // };

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
      path: "/admin/dashboard",
      element: <AdminDashboardPage />,
    },
    {
      path: "/admin/pricing-plan",
      element: <AdminPricingPlanPage />,
    },
    {
      path: "/admin/animity",
      element: <AdminAnimityPage />,
    },
    {
      path: "/admin/admin-list",
      element: <AdminListPage />,
    },
    {
      path: "/admin/agent-list",
      element: <AdminViewAgentPage />,
    },
    {
      path: "/admin/agencybyid/:id",
      element: <AdminViewAgentDashboard />,
    },
    {
      path: "/admin/purchase-history",
      element: <AdminPurchasePage />,
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
      path: `/rentdetail/:id`,
      element: <RentDetailPage />,
      // children: [],
    },
    {
      path: "/map",
      element: <GooglemapApi />,
      // children: [],
    },
    {
      path: "/user",
      element: <UserProfile />,
    },
  ]);

  return <RouterProvider router={router} />;
}
