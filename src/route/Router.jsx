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
import AgentCreatePropertyPage from "../pages/AgentCreatePropertyPage";
import ProtectedRoute from "../components/ProtectedRoute";
import RedirectedAdmin from "../components/RedirectedAdmin";

import SuccessPaymentPage from "../features/payment/component/SuccessPaymentPage";
import AgentDashBoardPage from "../pages/AgentDashBoardPage";
import AgentAllPropertyPage from "../pages/AgentAllPropertyPage";
import AgentProfilePage from "../pages/AgentProfilePage";
import RedirectedAgent from "../components/RedirectedAgent";
import RedirectedAgentOrAdmin from "../components/RedirectedAgentOrAdmin";
import AgentPropertiesPage from "../pages/AgentPropertiesPage";
import AgentPurchasePage from "../pages/AgentPurchasePage";
import AgentPackagePlanPage from "../pages/AgentPackagePlanPage";
import ProtectedAgentRoute from "../components/ProtectedAgentRoute";
import { useSelector } from "react-redux";
import RecommendPage from "../pages/RecommendPage";

export default function Router() {
  const user = useSelector((state) => state.auth.user);

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
      element: (
        <RedirectedAgentOrAdmin>
          <HomePage />
        </RedirectedAgentOrAdmin>
      ),
    },
    {
      path: "/adminlogin",
      element: (
        <RedirectedAdmin>
          <AdminLoginPage />,
        </RedirectedAdmin>
      ),
    },
    {
      path: "/admin/dashboard",
      element: (
        <ProtectedRoute>
          <AdminDashboardPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/pricing-plan",
      element: (
        <ProtectedRoute>
          <AdminPricingPlanPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/animity",
      element: (
        <ProtectedRoute>
          <AdminAnimityPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/admin-list",
      element: (
        <ProtectedRoute>
          <AdminListPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/agent-list",
      element: (
        <ProtectedRoute>
          <AdminViewAgentPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/agencybyid/:id",
      element: (
        <ProtectedRoute>
          <AdminViewAgentDashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/purchase-history",
      element: (
        <ProtectedRoute>
          <AdminPurchasePage />,
        </ProtectedRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <RedirectedAgent>
          <RegisterPage />,
        </RedirectedAgent>
      ),
    },
    {
      path: "/agent/createproperty",
      element: (
        <ProtectedAgentRoute>
          <AgentCreatePropertyPage />
        </ProtectedAgentRoute>
      ),
    },
    {
      path: "/agent",

      element: (
        <RedirectedAgent>
          <AgentDashBoardPage />
        </RedirectedAgent>
      ),
    },
    {
      path: "/agent/myproperty/:id",
      element: (
        <ProtectedAgentRoute>
          <AgentAllPropertyPage />
        </ProtectedAgentRoute>
      ),
    },
    {
      path: "/agent/myprofile",
      element: (
        <ProtectedAgentRoute>
          <AgentProfilePage />,
        </ProtectedAgentRoute>
      ),
    },
    {
      path: "/agent/package",
      element: (
        <ProtectedAgentRoute>
          <AgentPackagePlanPage />,
        </ProtectedAgentRoute>
      ),
    },
    {
      path: "/agent/purchase-history/:id",
      element: (
        <ProtectedAgentRoute>
          <AgentPurchasePage />,
        </ProtectedAgentRoute>
      ),
    },
    {
      path: "/packageplan",
      element: <PackagePlanPage />,
    },
    {
      path: "/searchpage",
      element: <SearchPage />,
    },
    {
      path: "/phonenumber",
      element: (
        <RedirectedAgent>
          <PhoneNumberPage />,
        </RedirectedAgent>
      ),
    },
    {
      path: `/rentdetail/:id`,
      element: <RentDetailPage />,
    },
    {
      path: "/map",
      element: <GooglemapApi />,
    },
    {
      path: "/user",
      element: <UserProfile />,
    },
    {
      path: "/successpay",
      element: <SuccessPaymentPage />,
    },
    {
      path: "/agentproperties/:id",
      element: <AgentPropertiesPage />,
    },
    {
      path: "/recommendpage",
      element: <RecommendPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
