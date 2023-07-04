import SidebarAgency from "../components/SidebarAgency";
import EditPropertyContainer from "../features/editproperty/components/EditPropertyContainer";

export default function AgentEditPropertyPage() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto min-h-screen flex">
        <SidebarAgency />
        <div className="flex-[4] bg-[#F4F6FF] text-lg">
          <EditPropertyContainer />
        </div>
      </div>
    </div>
  );
}
