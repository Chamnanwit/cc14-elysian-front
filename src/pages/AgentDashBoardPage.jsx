import SidebarAgency from "../components/SidebarAgency";
import DashboardAgenctContainer from "../features/dashbordagenct/components/DashboardContainer";

export default function AgentDashBoardPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="max-w-[1440px] mx-auto min-h-screen flex">
        <SidebarAgency />
        <div className="flex-[4] bg-[#F4F6FF] text-lg">
          <DashboardAgenctContainer />
        </div>
      </div>
    </div>
  );
}
