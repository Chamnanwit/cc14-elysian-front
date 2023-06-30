import SidebarAgency from "../components/SidebarAgency";
import MyProfileContainer from "../features/myprofile/components/MyProfileContainer";

export default function AgentProfilePage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="max-w-[1440px] mx-auto min-h-screen flex">
        <SidebarAgency />
        <div className="flex-[4] bg-[#F4F6FF] text-lg">
          <MyProfileContainer />
        </div>
      </div>
    </div>
  );
}
