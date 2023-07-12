import { useDispatch, useSelector } from "react-redux";
import SidebarAgency from "../components/SidebarAgency";
import MyPropertyContainer from "../features/myproperty/components/MyPropertyContainer";
import { profileAgncyAsync } from "../features/myprofile/slice/myProfile-slice";
import { useEffect, useState } from "react";

import DashboardAgenctContainer from "../features/dashbordagenct/components/DashboardContainer";
import AgentShowBox from "../features/createproperty/components/AgentShowBox";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IoIosAlert } from "react-icons/io";
import { FaBuilding, FaShoppingCart } from "react-icons/fa";
import { RiAdvertisementFill } from "react-icons/ri";
import Loading from "../components/Loading";
import { dashboardAgentAsync } from "../features/dashboard/slice/dashboard-slice";
import HeaderAgent from "../components/HeaderAgent";

export default function AgentAllPropertyPage() {
  const dispatch = useDispatch();
  const [pageLoading, setPageLoading] = useState(true);
  const isLoading = useSelector((state) => state?.dashboard?.isLoading);

  const user = useSelector((state) => state?.auth?.user);

  const userid = user?.id;
  const dashboardAgent = useSelector(
    (state) => state?.dashboard?.dashboardAgentResult
  );
  useEffect(() => {
    dispatch(profileAgncyAsync());
  }, []);
  const userObjects = useSelector((state) => state?.profileAgncy?.profileAgncy);

  useEffect(() => {
    dispatch(dashboardAgentAsync(userid));
  }, []);

  // console.log("dashboard------->", dashboardAgent);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex ">
      <SidebarAgency />
      <div className="w-3/4 flex flex-col bg-[#F4F6FF] text-lg border-r">
        <HeaderAgent topic="ห้องเช่าทั้งหมด" />
        <div>
          <div className="flex gap-6 m-auto mt-0 p-5 border-b-2">
            <AgentShowBox
              icon={<FaBuilding />}
              title="ห้องเช่าทั้งหมด"
              number={dashboardAgent?.totalPropertyById}
            />

            <AgentShowBox
              icon={<AiFillEye />}
              title="ห้องเช่าที่โชว์"
              number={dashboardAgent?.totalActiveProperty}
            />
            <AgentShowBox
              icon={<AiFillEyeInvisible />}
              title="ห้องเช่าที่ไม่โชว์"
              number={dashboardAgent?.totalInactiveProperty}
            />

            <AgentShowBox
              icon={<RiAdvertisementFill />}
              title="ห้องเช่าที่โฆษณา"
              number={dashboardAgent?.totalPurchase}
            />
          </div>
          <MyPropertyContainer />
        </div>
      </div>
    </div>
  );
}
