import React from "react";
import PropertyContainer from "../features/createproperty/components/PropertyContainer";
import Navbar from "../layouts/Navbar";
import PropertyEditContainer from "../features/editproperty/components/PropertyEditContainer";
import MyProfileContainer from "../features/myprofile/components/MyProfileContainer";
import SidebarAgency from "../components/SidebarAgency";
import AgentDb from "../features/createproperty/components/AgentDb";

export default function AgentPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="max-w-[1440px] mx-auto min-h-screen flex">
        <SidebarAgency />
        <div className="flex-[4] bg-[#F4F6FF] text-lg">
          <AgentDb />
          <PropertyContainer />
          <PropertyEditContainer />
          <MyProfileContainer />
        </div>
      </div>
    </div>
  );
}
