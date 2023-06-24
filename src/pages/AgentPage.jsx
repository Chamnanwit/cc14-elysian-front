import React from "react";
import PropertyContainer from "../features/createproperty/components/PropertyContainer";
import Navbar from "../layouts/Navbar";
import PropertyEditContainer from "../features/editproperty/components/PropertyEditContainer";

export default function AgentPage() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen border flex">
      <div className="w-1/4 border border-l"></div>
      <div className="w-3/4 bg-[#F4F6FF] text-lg">
        <PropertyContainer />
        <PropertyEditContainer />
      </div>
    </div>
  );
}
