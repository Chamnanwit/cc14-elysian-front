import { FaBuilding, FaShoppingCart } from "react-icons/fa";

import HeaderAgent from "../../../components/HeaderAgent";
import AgentShowBox from "../../createproperty/components/AgentShowBox";
import { AiFillEye } from "react-icons/ai";
import { IoIosAlert } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { dashboardAgentAsync } from "../../dashboard/slice/dashboard-slice";
import Loading from "../../../components/Loading";

export default function DashboardAgenctContainer() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.adminViewAgent?.isLoading);

  const user = useSelector((state) => state?.auth?.user);

  const userid = user?.id;

  useEffect(() => {
    dispatch(dashboardAgentAsync(userid));
  }, []);

  const dashboardAgent = useSelector(
    (state) => state?.dashboard?.dashboardAgentResult
  );

  console.log("dashboard------->", dashboardAgent);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderAgent topic="ภาพรวม" />
      <div className="flex  gap-6 m-8 mt-0 p-5">
        <AgentShowBox
          icon={<FaBuilding />}
          title="ห้องเช่าทั้งหมด"
          number={dashboardAgent?.totalPropertyById}
        />
        <AgentShowBox
          icon={<AiFillEye />}
          title="ห้องเช่าที่ไม่โชว์"
          number={dashboardAgent?.totalInactiveProperty}
        />
        <AgentShowBox
          title="ห้องเช่าที่โชว์"
          number={dashboardAgent?.totalActiveProperty}
        />
        <AgentShowBox
          icon={<IoIosAlert />}
          title="แพ็คเกจ"
          number={dashboardAgent?.totalPurchase}
        />
      </div>
    </>
  );
}
