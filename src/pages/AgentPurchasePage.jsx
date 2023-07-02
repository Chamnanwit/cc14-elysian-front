import SidebarAgency from "../components/SidebarAgency";
import PurchaseAgentHistoryContainer from "../features/purchaseagent-history/components/PurchaseAgentHistoryContainer";

export default function AgentPurchasePage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="max-w-[1440px] mx-auto min-h-screen flex">
        <SidebarAgency />
        <div className="flex-[4] bg-[#F4F6FF] text-lg">
          <PurchaseAgentHistoryContainer />
        </div>
      </div>
    </div>
  );
}
