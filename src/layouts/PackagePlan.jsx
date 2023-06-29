import React from "react";
import PromotionCard from "../components/PromotionCard";
import ListCheckGreenTrue from "../components/ListCheckGreenTrue";
import * as agencyService from "../api/agency-api"
import { useNavigate, redirect } from "react-router-dom";

export default function PackagePlan() {
  // const navigate = useNavigate();
  const hdlClickBuyPackage = async (id) => {
    const res = await agencyService.paymentPackage({id})
    console.log("-----------", res.data.url)
    window.location.replace(res.data.url)
    console.log(res)
  }

  return (
    <div>
      <div className=" w-full justify-center flex flex-col items-center">
        <p className=" text-5xl font-semibold text-c-gray3">
          ง่ายและเร็วมากยิ่งขึ้น
        </p>
        <div className="flex">
          <div className=" flex  py-2 px-10 text-xl bg-c-blue1 w-fit mt-10 rounded-l-md text-c-white1 transition-all hover:bg-c-blue4 hover:scale-105 active:scale-95 active:bg-c-blue2">
            รายเดือน
          </div>
          <div className=" flex  p-2 px-10 text-xl border text-c-blue1 border-c-blue1 w-fit mt-10 rounded-r-md  transition-all hover:bg-c-blue4 hover:scale-105 active:scale-95 active:bg-c-blue2 hover:text-c-white1">
            รายสัปดาห์
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 gap-5  w-full h-fit p-5 text-c-gray3">
        <PromotionCard price="฿0/เดือน" packname="ฟรี" onClick={hdlClickBuyPackage} >
          <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
          <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
        </PromotionCard>
        <PromotionCard price="฿1,799/เดือน" packname="พื้นฐาน" onClick={hdlClickBuyPackage} id={"price_1NMPY9Kiz6RxD96BaRuyuEhS"}>
          <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
          <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
          <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
        </PromotionCard>
        <PromotionCard price="฿3,599/เดือน" packname="ธุรกิจ" onClick={hdlClickBuyPackage} id={"price_1NMPaoKiz6RxD96B583Xd2PI"}>
          <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
          <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
          <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
          <ListCheckGreenTrue>เพิ่มห้องเช่าได้สูงสุด 4 ห้อง</ListCheckGreenTrue>
        </PromotionCard>
      </div>
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
