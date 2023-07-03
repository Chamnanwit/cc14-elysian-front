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
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RentCardBigListByRoomTypeAndProvince from "../features/userProperties/components/RentCardBigListByRoomTypeAndProvince";
import SponserRentCardBigList from "../features/userProperties/components/SponserRentCardBigList";
import SponserRentCardSmallList from "../features/userProperties/components/SponserRentCardSmallList";
import { agentAsync } from "../features/agencyInformation/slice/adminviewagency-slice";
import { useDispatch, useSelector } from "react-redux";
import { FaRegImage } from "react-icons/fa";

import SponserRentbar from "../layouts/SponserRentbar";
import PictureNone from "../components/PictureNone";

export default function RecommendPage() {
  let { state } = useLocation();

  const dispatch = useDispatch(); /// ประกาศเพื่อดึงค่ามาใช้

  useEffect(() => {
    dispatch(agentAsync()); /// เอามาจาก slice
  }, []);

  const agentlist = useSelector((state) => state?.adminViewAgent?.agentList);

  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div>
        <Navbar />
        {/* <CarouselBig /> */}

        <div className=" bg-c-white1 shadow-xl"></div>
        <div className="flex w-full h-auto">
          <div className="flex-[1]">
            <div className=" bg-c-green4 h-screen shadow-xl p-5 pb-20 rounded-br-lg pt-12 items-center text-center flex flex-col justify-between gap-3 sticky top-10">
              <div className="w-full flex items-center flex-col gap-5">
                {/* <p className="text-c-white1 text-base">ผู้ปล่อยเช่าแนะนำ</p> */}
              </div>
              <LogoWhite />
            </div>
          </div>
          <div className="flex-[3] gap-5 flex flex-col px-10  my-12">
            <p className="text-c-gray3 text-base">ผู้ปล่อยเช่าแนะนำ</p>
            <div className="flex gap-5 flex-wrap">
              {/* <HeaderAgent topic="My Properties" /> */}
              {agentlist?.map((el) => (
                <AgencyCard
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
        </div>
        <SponserRentbar />
      </div>

      <Footer />
    </div>
  );
}
