import SidebarAgency from "../components/SidebarAgency";
import MyPropertyContainer from "../features/myproperty/components/MyPropertyContainer";

export default function AgentAllPropertyPage() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex ">
      <SidebarAgency />
      <div className="w-3/4 flex flex-col bg-[#F4F6FF] text-lg border-r">
        <MyPropertyContainer />
      </div>
    </div>
  );
}
