import SidebarAgency from "../components/SidebarAgency";
import PropertyContainer from "../features/createproperty/components/PropertyContainer";

export default function AgentCreatePropertyPage() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex ">
      <SidebarAgency />
      <div className="w-3/4 flex flex-col bg-[#F4F6FF] text-lg border-r">
        <PropertyContainer />
      </div>
    </div>
  );
}
