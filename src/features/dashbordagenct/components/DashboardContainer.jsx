import { FaBuilding, FaShoppingCart } from "react-icons/fa";

import HeaderAgent from "../../../components/HeaderAgent";
import AgentShowBox from "../../createproperty/components/AgentShowBox";
import { AiFillEye } from "react-icons/ai";
import { IoIosAlert } from "react-icons/io";

export default function DashboardAgenctContainer() {
  return (
    <>
      <HeaderAgent topic="ภาพรวม" />
      <div className="flex  gap-6 m-8 mt-0 p-5">
        <AgentShowBox
          icon={<FaBuilding />}
          title="ห้องเช่าทั้งหมด"
          number="20"
        />
        <AgentShowBox
          icon={<AiFillEye />}
          title="ห้องเช่าที่โชว์"
          number="10"
        />
        <AgentShowBox />
        <AgentShowBox icon={<IoIosAlert />} title="ถูกรายงาน" number="1" />
      </div>
    </>
  );
}
