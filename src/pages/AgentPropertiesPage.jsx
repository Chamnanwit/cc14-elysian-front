import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LogoWhite from "../components/LogoWhite";
import AgencyCard from "../components/AgencyCard";
import { useState, useEffect, useRef } from "react";
import SponserRentbar from "../layouts/SponserRentbar";
import HeaderAgent from "../components/HeaderAgent";
import AgentRentCard from "../components/AgentRentCard";
import { PropertyAsync } from "../features/createproperty/slice/createproperty-slice";
import { agentByIdAsync } from "../features/agencyInformation/slice/adminviewagency-slice";
import RentCard from "../components/RentCard";

export default function AgentPropertiesPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pageTopRef = useRef(null);

  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(PropertyAsync(id)).unwrap();
      setPageLoading(false);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetch = async () => {
      await dispatch(agentByIdAsync(id)).unwrap();
      setPageLoading(false);
    };
    fetch();
  }, [id]);

  useEffect(() => {
    if (pageTopRef.current) {
      window.scrollTo({
        top: pageTopRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  const userproperty = useSelector(
    (state) => state?.propertyPlan?.propertyPlan?.Properties
  );

  const el = useSelector((state) => state?.adminViewAgent?.agentById);

  console.log("-------------------*****-----------------", userproperty);

  const t = userproperty;
  console.log(userproperty);

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
              <div className="w-full flex items-center flex-col gap-5">
                <p className="text-c-white1 text-base">
                  รายละเอียดผู้ปล่อยเช่า
                </p>

                <AgencyCard
                  agencyImage={el?.result?.profileImage}
                  agencyfirstname={el?.result?.firstName}
                  agencylastname={el?.result?.lastName}
                  agencystatus={el?.result?.locked}
                  agencyphone={el?.result?.phoneNumber}
                  agencyemail={el?.result?.email}
                  agencyId={id}
                />
              </div>
              <LogoWhite />
            </div>
          </div>
          <div className="flex-[3] gap-5 flex flex-col px-10  my-12">
            <>
              <p className="text-c-gray3 text-base">
                รายการห้องเช่าของ {el?.result?.firstName || ""}{" "}
                {el?.result?.lastName || ""}
              </p>

              {/* <HeaderAgent topic="My Properties" /> */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className=" flex w-full gap-5 flex-wrap"
              >
                {userproperty?.map((el) => (
                  <RentCard
                    propName={el?.name}
                    propDescription={el?.description}
                    agencyName={el?.User?.firstName}
                    propPrice={Number(el?.price).toLocaleString("th-TH", {
                      style: "currency",
                      currency: "THB",
                    })}
                    src={el?.Images[0]?.imageLink}
                    propRentPeriod={
                      el?.rentPeriod === "MONTHLY" ? "เดือน" : "สัปดาห์"
                    }
                    propLocation={
                      el?.SubDistrict?.District?.Province?.nameInThai
                    }
                    propArea={el.totalArea}
                    link={el?.id}
                    // src={el?.Images[0]?.imageLink}
                  />
                ))}
              </motion.div>
            </>
          </div>
        </div>
        <SponserRentbar />
      </div>

      <Footer />
    </div>
  );
}
