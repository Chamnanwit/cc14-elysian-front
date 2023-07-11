import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import InputBar from "../components/InputBar";
import ButtonYellowM from "../components/ButtonYellowM";
import { motion } from "framer-motion";
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
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import RentCardBigListByRoomTypeAndProvince from "../features/userProperties/components/RentCardBigListByRoomTypeAndProvince";
import SponserRentCardBigList from "../features/userProperties/components/SponserRentCardBigList";
import SponserRentCardSmallList from "../features/userProperties/components/SponserRentCardSmallList";
import { agentAsync } from "../features/agencyInformation/slice/adminviewagency-slice";
import { useDispatch, useSelector } from "react-redux";
import { FaRegImage } from "react-icons/fa";

import SponserRentbar from "../layouts/SponserRentbar";
import PictureNone from "../components/PictureNone";

export default function SearchPage() {
  const [priceRange, setPriceRange] = useState("");
  const [areaRange, setAreaRange] = useState("");
  const [rentPeriod, setRentPeriod] = useState("");

  let { state } = useLocation();
  // console.log("what", state);

  const dispatch = useDispatch(); /// ประกาศเพื่อดึงค่ามาใช้
  const pageTopRef = useRef(null);
  useEffect(() => {
    if (pageTopRef.current) {
      window.scrollTo({
        top: pageTopRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);
  useEffect(() => {
    dispatch(agentAsync()); /// เอามาจาก slice
  }, []);

  const agentlist = useSelector((state) => state?.adminViewAgent?.agentList);
  // console.log("Check ag", agentlist);
  const hdlChangePriceRangeInput = (e) => {
    setPriceRange(e.target.value);
    // console.log("Check pricer", priceRange);
  };
  const hdlChangeAreaRangeInput = (e) => {
    setAreaRange(e.target.value);
    // console.log("Check area", areaRange);
  };
  const hdlChangeRentPeriodInput = (e) => {
    setRentPeriod(e.target.value);
  };
  const hdlClear = (e) => {
    setRentPeriod("");
    setAreaRange("");
    setPriceRange("");

    // console.log("Check area", rentPeriod);
  };

  // console.log(price);
  return (
    <div
      ref={pageTopRef}
      className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto"
    >
      <div>
        <Navbar />
        {/* <CarouselBig /> */}

        <div className=" bg-c-white1 shadow-xl"></div>
        <div className="flex w-full h-auto">
          <div className="flex-[1]">
            <div className=" bg-c-green4 h-screen shadow-xl p-5 pb-20 rounded-br-lg pt-12 items-center text-center flex flex-col justify-between gap-3 sticky top-10">
              <div className="w-full flex flex-col gap-5">
                <form className=" flex flex-col gap-2 rounded-lg text-sm mt-5">
                  <p className="text-c-white1 text-base">ตัวเลือกเพิ่มเติม</p>
                  <select
                    className="flex-1 select w-full h-10 text-[8pt] text-c-gray3 rounded-lg ring-0 border-1 border focus:outline-none border-c-gray1 ring-c-gray1 outline-none focus:ring-none hover:ring-4 hover:ring-c-blue4 transition-all duration-300 hover:z-50"
                    value={areaRange}
                    onChange={hdlChangeAreaRangeInput}
                  >
                    <option value="">ขนาดห้องทั้งหมด</option>
                    <option key="" value="0 > 20" className="text-2xl">
                      0 - 20 ตร.ว.
                    </option>
                    <option key="" value="20 > 40" className="text-2xl">
                      20 - 40 ตร.ว.
                    </option>
                    <option key="" value="40 > 60" className="text-2xl">
                      40 - 60 ตร.ว.
                    </option>
                    <option key="" value="60 <" className="text-2xl">
                      มากกว่า 60 ตร.ว.
                    </option>
                  </select>
                  <select
                    className="flex-1 select text-[8pt] w-full h-fit  text-c-gray3 rounded-lg ring-0 border-1 border focus:outline-none border-c-gray1 ring-c-gray1 outline-none focus:ring-none hover:ring-4 hover:ring-c-blue4 transition-all duration-300 hover:z-50"
                    value={rentPeriod}
                    onChange={hdlChangeRentPeriodInput}
                  >
                    <option value="">ระยะเวลาทั้งหมด</option>
                    <option key="" value="DAILY" className="text-2xl">
                      รายวัน
                    </option>
                    <option key="" value="MONTHLY" className="text-2xl">
                      รายเดือน
                    </option>
                    <option key="" value="YEARLY" className="text-2xl">
                      รายปี
                    </option>
                  </select>
                  <select
                    className="flex-1 select text-[8pt] w-full h-fit  text-c-gray3 rounded-lg ring-0 border-1 border focus:outline-none border-c-gray1 ring-c-gray1 outline-none focus:ring-none hover:ring-4 hover:ring-c-blue4 transition-all duration-300 hover:z-50"
                    value={priceRange}
                    onChange={hdlChangePriceRangeInput}
                  >
                    <option value="">ราคาทั้งหมด</option>
                    <option key="" value="0 > 3000" className="text-2xl">
                      0 - 3,000 บาท
                    </option>
                    <option key="" value="3000 > 5000" className="text-2xl">
                      3,000 - 5,000 บาท
                    </option>
                    <option key="" value="5000 > 10000" className="text-2xl">
                      5,000 - 10,000 บาท
                    </option>
                    <option key="" value="10000 > 20000" className="text-2xl">
                      10,000 - 20,000 บาท
                    </option>
                    <option key="" value="20000 > 40000" className="text-2xl">
                      20,000 - 40,000 บาท
                    </option>
                    <option key="" value="40000 < " className="text-2xl">
                      มากกว่า 40,000 บาท
                    </option>
                  </select>
                  <ButtonGhostWhite clickme={hdlClear}>
                    ล้างทั้งหมด
                  </ButtonGhostWhite>
                  {/* <button onClick={hdlClear}>clear</button> */}
                </form>
              </div>
              <LogoWhite />
            </div>
          </div>
          <div className="flex-[3] px-10 gap-5 flex flex-col my-12">
            {/* <BigFourButtonBar /> */}
            <div className="flex gap-5 w-full">
              <MainSearchBar
                areaRange={areaRange}
                priceRange={priceRange}
                rentPeriod={rentPeriod}
                roomtypeName={state?.roomtype}
                provinceName={state?.province}
              />
            </div>
            <p className="text-sm text-c-gray2">
              ผลการค้นหา ประเภทห้อง: {state?.roomtype || "ทั้งหมด"}, จังหวัด:{" "}
              {state?.province || "ทั้งหมด"}
            </p>
            <div className="flex flex-col gap-8">
              {/* <RentCardBigList /> */}
              {/* <RentCardBigListByRoomTypeAndProvince /> */}
              <SponserRentCardBigList />
              {state?.roomtype ||
              state?.province ||
              state?.priceRange ||
              state?.areaRange ||
              state?.rentPeriod ? (
                <RentCardBigListByRoomTypeAndProvince />
              ) : (
                <RentCardBigList />
              )}
            </div>
          </div>
          <div className=" px-5  mt-12 gap-8 flex-[1] flex flex-col items-center border-l-1 border border-t-0 border-r-0 border-b-0 border-l-c-gray1 justify-start text-center">
            <p className=" text-c-gray3">ผู้ให้เช่าแนะนำ</p>
            {agentlist?.map((el) => (
              <AgencyCard
                key={el?.id}
                agencyImage={el?.profileImage}
                agencyfirstname={el?.firstName}
                agencylastname={el?.lastName}
                agencystatus={el?.locked}
                agencyphone={el?.phoneNumber}
                agencyemail={el?.email}
                agencyId={el.id}
              />
            ))}
          </div>
        </div>
        <SponserRentbar />
      </div>

      <Footer />
    </div>
  );
}
