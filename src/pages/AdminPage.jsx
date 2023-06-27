import React from "react";
import PackageContainer from "../features/packages/components/PackageContainer";
import PurchaseHistoryContainer from "../features/purchase-history/components/PurchaseHistoryContainer";
import AgencyContainer from "../features/agencyInformation/components/AgencyContainer";
import DashboardContainer from "../features/dashboard/components/DashboardContainer";
import PaymentContainer from "../features/agencyPayment/components/PaymentContainer";
import AdminContainer from "../features/adminInformation/components/AdminContainer";
import AgencyProfile from "../features/agencyInformation/components/AgencyProfile";
import AnimityContainer from "../features/addanimity/components/AnimityContainer";
import { AiFillHome } from "react-icons/ai";
import { FaSearch, FaSignOutAlt, FaUserTie, FaUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TbCards } from "react-icons/tb";
import { MdPassword } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";

import SidebarAdmin from "../components/SidebarAdmin";

export default function AdminPage() {

  const dataAdmin = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "admin1@gmail.com",
      status: 1,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      email: "admin2@gmail.com",
      status: 1,
    },
    {
      id: 3,
      firstName: "June",
      lastName: "Doe",
      email: "admin3@gmail.com",
      status: 0,
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex ">
      <SidebarAdmin />
      <div className="flex-[4] bg-[#F4F6FF] text-lg">
        <PackageContainer />
        <PurchaseHistoryContainer />
        <DashboardContainer />
        <PaymentContainer />
        <AdminContainer data={dataAdmin} />
        <AgencyContainer />
        <AgencyProfile />
        <AnimityContainer />
      </div>
    </div>
  );
}
