import React from "react";

import SidebarAdmin from "../components/SidebarAdmin";

export default function AdminPage() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex">
      <SidebarAdmin />
      <div className="w-3/4 flex flex-col bg-[#F4F6FF] text-lg">
      <div className="flex flex-col flex-[4] bg-[#F4F6FF] text-lg">
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
    </div>
  );
}
