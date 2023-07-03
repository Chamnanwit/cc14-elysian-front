import SidebarAgency from "../components/SidebarAgency";
import PackageAgentPlan from "../features/packageagent/components/PackageAgentPlan";

export default function AgentPackagePlanPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="max-w-[1440px] mx-auto min-h-screen flex">
        <SidebarAgency />
        <div className="flex-[4] bg-[#F4F6FF] text-lg">
          <PackageAgentPlan />
        </div>
      </div>
    </div>
  );
}
