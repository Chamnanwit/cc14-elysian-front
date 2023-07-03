import React from "react";
import PromotionCard from "../components/PromotionCard";
import ListCheckGreenTrue from "../components/ListCheckGreenTrue";
// import * as agencyService from "../api/agency-api"
import { paymentPackageAsync } from "../features/payment/slice/payment-slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pricingPlanAsync } from "../features/packages/slice/pricingPlan-slice";
import { useEffect } from "react";

export default function PackagePlan() {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);

  const hdlClickBuyPackage = async (id, packageId) => {
    const res = await dispatch(paymentPackageAsync({ id, packageId })).unwrap();
    // console.log("-----------", res.url)
    window.location.replace(res.url);
    // console.log("-----------res-----------------",res)
  };

  useEffect(() => {
    dispatch(pricingPlanAsync()); /// เอามาจาก slice
  }, []);

  const pricingPlanAll = useSelector(
    (state) => state?.pricingPlan?.pricingPlan
  );

  const pricingPlanMonthly = pricingPlanAll.filter(
    (item) => item.expiration === "MONTHLY"
  );
  const pricingPlanWeekly = pricingPlanAll.filter(
    (item) => item.expiration === "WEEKLY"
  );

  const hdlClickMonth = () => {
    return setToggle(true);
  };
  const hdlClickWeekly = () => {
    return setToggle(false);
  };

  return (
    <div>
      <div className=" w-full justify-center flex flex-col items-center">
        <p className=" text-5xl font-semibold text-c-gray3">
          ง่ายและเร็วมากยิ่งขึ้น
        </p>
        {toggle ? (
          <div className="flex">
            <button
              onClick={hdlClickMonth}
              className=" flex  py-2 px-10 text-xl bg-c-blue1 w-fit mt-10 rounded-l-md text-c-white1 transition-all hover:bg-c-blue4 hover:scale-105 active:scale-95 active:bg-c-blue2"
            >
              รายเดือน
            </button>
            <button
              onClick={hdlClickWeekly}
              className=" flex  p-2 px-10 text-xl border text-c-blue1 border-c-blue1 w-fit mt-10 rounded-r-md  transition-all hover:bg-c-blue4 hover:scale-105 active:scale-95 active:bg-c-blue2 hover:text-c-white1"
            >
              รายสัปดาห์
            </button>
          </div>
        ) : (
          <div className="flex">
            <button
              onClick={hdlClickMonth}
              className=" flex  p-2 px-10 text-xl border text-c-blue1 border-c-blue1 w-fit mt-10 rounded-l-md transition-all hover:bg-c-blue4 hover:scale-105 active:scale-95 active:bg-c-blue2 hover:text-c-white1"
            >
              รายเดือน
            </button>
            <button
              onClick={hdlClickWeekly}
              className=" flex  py-2 px-10 text-xl bg-c-blue1 w-fit mt-10 rounded-r-md  text-c-white1 transition-all hover:bg-c-blue4 hover:scale-105 active:scale-95 active:bg-c-blue2"
            >
              รายสัปดาห์
            </button>
          </div>
        )}
      </div>

      {toggle ? (
        <div className="flex justify-center mt-5 gap-5  w-full h-fit p-5 text-c-gray3">
          {pricingPlanMonthly
            .slice()
            .sort((a, b) => (a?.price > b?.price ? 1 : -1))
            .map((el) => (
              <PromotionCard
                key={el?.id}
                price={el?.price}
                time={el?.expiration === "MONTHLY" ? "เดือน" : "error"}
                packname={el?.name}
                onClick={hdlClickBuyPackage}
                id={el?.priceCode}
                packageId={el?.id}
              >
                <ListCheckGreenTrue>
                  เพิ่มห้องเช่าได้สูงสุด {el?.limit} ห้อง
                </ListCheckGreenTrue>
                <ListCheckGreenTrue>
                  เพิ่มการติดอันดับ ระดับ {el?.numberOfTop}
                </ListCheckGreenTrue>
              </PromotionCard>
            ))}
        </div>
      ) : (
        // </div>
        // <div className="flex justify-center mt-5 gap-5  w-full h-fit p-5 text-c-gray3">
        //   <PromotionCard price="฿0/เดือน" packname="ฟรี" onClick={hdlClickBuyPackage} >
        //     <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
        //     <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
        //   </PromotionCard>
        //   <PromotionCard price="฿1,799/เดือน" packname="พื้นฐาน" onClick={hdlClickBuyPackage} id={"price_1NMPY9Kiz6RxD96BaRuyuEhS"}>
        //     <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
        //     <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
        //     <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
        //   </PromotionCard>
        //   <PromotionCard price="฿3,599/เดือน" packname="ธุรกิจ" onClick={hdlClickBuyPackage} id={"price_1NMPaoKiz6RxD96B583Xd2PI"}>
        //     <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
        //     <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
        //     <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
        //     <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
        //   </PromotionCard>
        // </div>
        <div className="flex justify-center mt-5 gap-5 w-full h-fit p-5 text-c-gray3">
          {pricingPlanWeekly
            .slice()
            .sort((a, b) => (a?.price > b?.price ? 1 : -1))
            .map((el) => (
              <PromotionCard
                key={el?.id}
                price={el?.price}
                time={el?.expiration === "WEEKLY" ? "สัปดาห์" : "error"}
                packname={el?.name}
                onClick={hdlClickBuyPackage}
                id={el?.priceCode}
                packageId={el?.id}
              >
                <ListCheckGreenTrue>
                  เพิ่มห้องเช่าได้สูงสุด {el?.limit} ห้อง
                </ListCheckGreenTrue>
                <ListCheckGreenTrue>
                  เพิ่มการติดอันดับ ระดับ {el?.numberOfTop}
                </ListCheckGreenTrue>
              </PromotionCard>
            ))}
        </div>
      )}

      <div className=" w-full flex flex-col items-center p-5">
        <p className=" text-lg font-semibold">แพ็คเกจ</p>
        <p className=" text-c-gray2 w-[60%] text-center">
          disLorem ipsum dolor sit amet consectetur. Elit sed facilisi ac sed
          elit. disLorem ipsum dolor sit amet consectetur. Elit sed facilisi ac
          sed elit.{" "}
        </p>
      </div>
    </div>
  );
}
