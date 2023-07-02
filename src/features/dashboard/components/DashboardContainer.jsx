import React from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import DashboardItem from "./DashboardItem";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsFillBuildingsFill, BsPeopleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { dashboardAsync } from "../slice/dashboard-slice";
import Loading from "../../../components/Loading";
import { useEffect } from "react";

export default function DashboardContainer() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.dashboard?.isLoading);
  useEffect(() => {
    dispatch(dashboardAsync());
  }, []);

  const dashboard = useSelector((state) => state?.dashboard?.dashboardResult);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderAdmin topic="Dashboard" />
      <div className="flex flex-col gap-[18px] m-8 mt-0">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-medium">วันนี้</div>
          <div className=" grid grid-cols-3 gap-6 text-base">
            <DashboardItem
              bgColor="blue-600"
              title="จำนวนที่ขายได้"
              result={dashboard?.dailyPurchaseResult}
            >
              <FaShoppingCart fill="#ffffff" size={28} />
            </DashboardItem>
            <DashboardItem
              bgColor="blue-600"
              title="ยอดขายทั้งหมด"
              result={dashboard?.dailyEarningResult}
            >
              <MdOutlineAttachMoney fill="#ffffff" size={28} />
            </DashboardItem>
            {/* <DashboardItem bgColor="blue" title="Pending Earning"><MdOutlineAttachMoney fill='#ffffff' size={28}/></DashboardItem> */}
            <DashboardItem
              bgColor="blue-600"
              title="ลูกค้าใหม่"
              result={dashboard?.dailyNewUserResult}
            >
              <BsPeopleFill fill="#ffffff" size={28} />
            </DashboardItem>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-2xl font-medium">เดือนนี้</div>
          <div className=" grid grid-cols-3 gap-6 text-base">
            <DashboardItem
              bgColor="green-600"
              title="จำนวนที่ขายได้"
              result={dashboard?.monthlyPurchaseResult}
            >
              <FaShoppingCart fill="#ffffff" size={28} />
            </DashboardItem>
            <DashboardItem
              bgColor="green-600"
              title="ยอดขายทั้งหมด"
              result={dashboard?.monthlyEarningResult}
            >
              <MdOutlineAttachMoney fill="#ffffff" size={28} />
            </DashboardItem>
            {/* <DashboardItem bgColor="green" title="Pending Earning"><MdOutlineAttachMoney fill='#ffffff' size={28}/></DashboardItem> */}
            <DashboardItem
              bgColor="green-600"
              title="ลูกค้าใหม่"
              result={dashboard?.monthlyNewUserResult}
            >
              <BsPeopleFill fill="#ffffff" size={28} />
            </DashboardItem>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-2xl font-medium">ปีนี้</div>
          <div className=" grid grid-cols-3 gap-6 text-base">
            <DashboardItem
              bgColor="blue-600"
              title="จำนวนที่ขายได้"
              result={dashboard?.yearlyPurchaseResult}
            >
              <FaShoppingCart fill="#ffffff" size={28} />
            </DashboardItem>
            <DashboardItem
              bgColor="blue-600"
              title="ยอดขายทั้งหมด"
              result={dashboard?.yearlyEarningResult}
            >
              <MdOutlineAttachMoney fill="#ffffff" size={28} />
            </DashboardItem>
            {/* <DashboardItem bgColor="blue" title="Pending Earning"><MdOutlineAttachMoney fill='#ffffff' size={28}/></DashboardItem> */}
            <DashboardItem
              bgColor="blue-600"
              title="ลูกค้าใหม่"
              result={dashboard?.yearlyNewUserResult}
            >
              <BsPeopleFill fill="#ffffff" size={28} />
            </DashboardItem>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-medium">ยอดรวมทั้งหมด</div>
          <div className=" grid grid-cols-3 gap-6 text-base">
            <DashboardItem
              bgColor="green-600"
              title="จำนวนที่ขายได้"
              result={dashboard?.totalPurchase}
            >
              <FaShoppingCart fill="#ffffff" size={28} />
            </DashboardItem>
            <DashboardItem
              bgColor="green-600"
              title="ยอดขาย"
              result={dashboard?.totalEarning}
            >
              <MdOutlineAttachMoney fill="#ffffff" size={28} />
            </DashboardItem>
            {/* <DashboardItem bgColor="green" title="Pending Earning"><MdOutlineAttachMoney fill='#ffffff' size={28}/></DashboardItem> */}
            <DashboardItem
              bgColor="green-600"
              title="ลูกค้าใหม่"
              result={dashboard?.totalNewUser}
            >
              <BsPeopleFill fill="#ffffff" size={28} />
            </DashboardItem>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-2xl font-medium">ห้องเช่าทั้งหมด</div>
          <div className="grid grid-cols-4 gap-6 text-base">
            <DashboardItem
              bgColor="blue-600"
              title="ห้องเช่าทั้งหมด"
              result={dashboard?.totalPropertyResult}
            >
              <BsFillBuildingsFill fill="#ffffff" size={28} />
            </DashboardItem>
            <DashboardItem
              bgColor="blue-600"
              title="ห้องเช่าที่เปิดอยู่"
              result={dashboard?.activePropertyResult}
            >
              <BsFillBuildingsFill fill="#ffffff" size={28} />
            </DashboardItem>
            <DashboardItem
              bgColor="blue-600"
              title="ห้องเช่าที่ปิดอยู่"
              result={dashboard?.inactivePropertyResult}
            >
              <BsFillBuildingsFill fill="#ffffff" size={28} />
            </DashboardItem>
            <DashboardItem
              bgColor="blue-600"
              title="จำนวนผู้ปล่อยเช่า"
              result={dashboard?.agencyResult}
            >
              <BsFillBuildingsFill fill="#ffffff" size={28} />
            </DashboardItem>
          </div>
        </div>
      </div>
    </>
  );
}
