import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import InputBar from "../components/InputBar";
import ButtonYellowM from "../components/ButtonYellowM";

import RentCardBig from "../components/RentCardBig";
import CarouselBig from "../components/CarouselBig";
import LogoWhite from "../components/LogoWhite";
import AgencyCard from "../components/AgencyCard";
import ButtonGhostWhite from "../components/ButtonGhostWhite";
import RentCard from "../components/RentCard";

export default function SearchPage() {
  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div>
        <Navbar />
        <CarouselBig />

        <div className=" bg-c-white1 shadow-xl"></div>
        <div className="flex w-full h-auto">
          <div className="flex-[.5] ">
            <div className=" bg-c-green4 h-screen shadow-xl p-5 pb-20 rounded-br-lg pt-12 items-center text-center flex flex-col justify-between gap-3 sticky top-10">
              <div className="w-full flex flex-col gap-5">
                {/* <p>sidebar filtter</p> */}
                <ButtonGhostWhite>ห้องเช่าแนะนำ</ButtonGhostWhite>
                <ButtonGhostWhite>ห้องเช่าใกล้รถไฟฟ้า</ButtonGhostWhite>
                <ButtonGhostWhite>ห้องเช่ามีฟิสเนส</ButtonGhostWhite>
                <ButtonGhostWhite>ห้องเช่าอะไรดี</ButtonGhostWhite>
                <ButtonGhostWhite>ห้องเช่าแนะนำ</ButtonGhostWhite>

                {/* <select
                  id="countries"
                  className="px-5 py-1 border-none text-sm rounded-full w-full ring-2 ring-c-gray1 outline-none focus:ring-c-blue1 focus:ring-2 opacity-100 bg-white hover:ring-2 hover:ring-c-green2 transition-all duration-200"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <select
                  id="countries"
                  className="px-5 py-1 border-none text-sm rounded-full w-full ring-2 ring-c-gray1 outline-none focus:ring-c-blue1 focus:ring-2 opacity-100 bg-white hover:ring-2 hover:ring-c-green2 transition-all duration-200"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select> */}
              </div>
              <LogoWhite />
            </div>
          </div>
          <div className="flex-[3] px-10 gap-5 flex flex-col my-12">
            {/* <BigFourButtonBar /> */}
            <div className="flex gap-5 w-full">
              <InputBar>ค้นหา</InputBar>
              <ButtonYellowM>ค้นหา</ButtonYellowM>
            </div>
            <p className="text-sm text-c-gray2">
              ผลการค้นหาของคำว่า "อยู่ๆไป" ทั้งหมด 180 รายการ
            </p>
            <div className="flex flex-col gap-16">
              <RentCardBig />
              <RentCardBig />
              <RentCardBig />
              <RentCardBig />
              <RentCardBig />
            </div>
          </div>
          <div className=" px-5 mt-12 flex-[1] flex flex-col items-center border-l-1 border border-t-0 border-r-0 border-b-0 border-l-c-gray1 justify-start gap-5 text-center">
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
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
        </div>
      </div>

      <Footer />
    </div>
  );
}
