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
import ProtectedRoute from "../components/ProtectedRoute";
import RedirectedAdmin from "../components/RedirectedAdmin";

import SuccessPaymentPage from "../features/payment/component/SuccessPaymentPage";
import RedirectedAgent from "../components/RedirectedAgent";
import RedirectedAgentOrAdmin from "../components/RedirectedAgentOrAdmin";

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
      element: (<RedirectedAgentOrAdmin>
                  <HomePage />
                </RedirectedAgentOrAdmin>)
    },
    {
      path: "/adminlogin",
      element: (<RedirectedAdmin >
                  <AdminLoginPage />,
                </RedirectedAdmin>
                )
    },
    {
      path: "/admin/dashboard",
      element: (<ProtectedRoute>
                  <AdminDashboardPage />
                </ProtectedRoute>)
    },
    {
      path: "/admin/pricing-plan",
      element: (<ProtectedRoute>
                  <AdminPricingPlanPage />  
                </ProtectedRoute>)
    },
    {
      path: "/admin/animity",
      element: (<ProtectedRoute>
                  <AdminAnimityPage />
                </ProtectedRoute>)
    },
    {
      path: "/admin/admin-list",
      element: (<ProtectedRoute>
                  <AdminListPage />
                </ProtectedRoute>)
    },
    {
      path: "/admin/agent-list",
      element: (<ProtectedRoute>
                  <AdminViewAgentPage />
                </ProtectedRoute>)
    },
    {
      path: "/admin/agencybyid/:id",
      element: (<ProtectedRoute>
                  <AdminViewAgentDashboard />
                </ProtectedRoute>)
    },
    {
      path: "/admin/purchase-history",
      element: (<ProtectedRoute>
                  <AdminPurchasePage />,
                </ProtectedRoute>)
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
      element: (<RedirectedAgent>
                  <AgentPage />,
                </RedirectedAgent>)
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
    {
      path: "/successpay",
      element: <SuccessPaymentPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
