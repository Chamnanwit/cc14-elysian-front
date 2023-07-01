import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TbCards } from "react-icons/tb";
import { MdPassword } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";

import PropertyContainer from "../features/createproperty/components/PropertyContainer";
import EditPropertyContainer from "../features/editproperty/components/EditPropertyContainer";
import Navbar from "../layouts/Navbar";
import MyProfileContainer from "../features/myprofile/components/MyProfileContainer";
import SidebarAgency from "../components/SidebarAgency";
import AgentDb from "../features/createproperty/components/AgentDb";

export default function AgentPage() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto min-h-screen flex">
        <SidebarAgency />
        <div className="flex-[4] bg-[#F4F6FF] text-lg">
          <AgentDb />
          <PropertyContainer />
          <EditPropertyContainer />
          <MyProfileContainer />
        </div>
      </div>
    </div>
  );
}
