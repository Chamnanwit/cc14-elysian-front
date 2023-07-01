import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import InputBar from "../components/InputBar";
import ButtonYellowM from "../components/ButtonYellowM";
import { Link } from "react-router-dom";

import RentCardBig from "../components/RentCardBig";
import CarouselBig from "../components/CarouselBig";
import LogoWhite from "../components/LogoWhite";
import AgencyCard from "../components/AgencyCard";
import ButtonGhostWhite from "../components/ButtonGhostWhite";
import RentCard from "../components/RentCard";
import RentCardBigList from "../features/userProperties/components/RentCardBigList";
import RentCardSmallList from "../features/userProperties/components/RentCardSmallList";
import MainSearchBar from "../features/search/components/mainSearchBar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RentCardBigListByRoomTypeAndProvince from "../features/userProperties/components/RentCardBigListByRoomTypeAndProvince";

export default function SearchPage() {
  const [priceRange, setPriceRange] = useState(500);
  let { state } = useLocation();
  // console.log("show state", state);
  // console.log("show state roomt", state.roomtype);
  // console.log("show state pro", state.province);

  useEffect(() => {}, []);

  // let { state } = useLocation();
  // console.log(state);

  const hdlChangeInput = (e) => {
    setPriceRange(Number(e.target.value));
    console.log(priceRange);
  };

  // console.log(price);
  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div>
        <Navbar />
        {/* <CarouselBig /> */}

        <div className=" bg-c-white1 shadow-xl"></div>
        <div className="flex w-full h-auto">
          <div className="flex-[1]">
            <div className=" bg-c-green4 h-screen shadow-xl p-5 pb-20 rounded-br-lg pt-12 items-center text-center flex flex-col justify-between gap-3 sticky top-10">
              <div className="w-full flex flex-col gap-5">
                <div className=" bg-c-white1 p-5 rounded-lg">
                  <input
                    type="range"
                    min={0}
                    max="10000"
                    value={priceRange}
                    className="range range-xs  range-warning"
                    onChange={hdlChangeInput}
                    // changeScrollBar={hdlChangeInput}
                    // step="25"
                  />
                  <div className="flex justify-between">
                    <p>0</p>
                    <p>{priceRange} ตร.ว.</p>
                  </div>
                </div>

                {/* <ButtonGhostWhite>ห้องเช่าแนะนำ</ButtonGhostWhite>
                <ButtonGhostWhite>ห้องเช่าใกล้รถไฟฟ้า</ButtonGhostWhite>
                <ButtonGhostWhite>ห้องเช่ามีฟิสเนส</ButtonGhostWhite>
                <ButtonGhostWhite>ห้องเช่าอะไรดี</ButtonGhostWhite>
                <ButtonGhostWhite>ห้องเช่าแนะนำ</ButtonGhostWhite> */}
              </div>
              <LogoWhite />
            </div>
          </div>
          <div className="flex-[3] px-10 gap-5 flex flex-col my-12">
            {/* <BigFourButtonBar /> */}
            <div className="flex gap-5 w-full">
              <MainSearchBar />
              {/* <InputBar>ค้นหา</InputBar>
              <ButtonYellowM>ค้นหา</ButtonYellowM> */}
            </div>
            <p className="text-sm text-c-gray2">
              ผลการค้นหา ประเภทห้อง {state?.roomtype || "ทั้งหมด"} จังหวัด{" "}
              {state?.province || "ทั้งหมด"}
            </p>
            <div className="flex flex-col gap-8">
              {/* <RentCardBigList /> */}
              {/* <RentCardBigListByRoomTypeAndProvince /> */}

              {state?.roomtype || state?.province ? (
                // <div>sdfsdf</div>
                <RentCardBigListByRoomTypeAndProvince />
              ) : (
                <RentCardBigList />
              )}
            </div>
          </div>
          <div className=" px-5  mt-12 gap-8 flex-[1] flex flex-col items-center border-l-1 border border-t-0 border-r-0 border-b-0 border-l-c-gray1 justify-start text-center">
            <p className=" text-c-gray3">ผู้ให้เช่าแนะนำ</p>
            <AgencyCard />
            <AgencyCard />
            <AgencyCard />
            <AgencyCard />
          </div>
        </div>
        <div className="flex justify-between px-5 pt-5">
          <div className="text-xl text-c-gray3">ยอดนิยม</div>
          <div className="text-sm text-c-gray2">ดูทั้งหมด</div>
        </div>
        <div className=" flex w-full gap-5 px-5 py-5 overflow-auto">
          <RentCardSmallList />
        </div>
      </div>

      <Footer />
    </div>
  );
}
