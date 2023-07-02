import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LogoWhite from "../components/LogoWhite";
import AgencyCard from "../components/AgencyCard";
import { useState, useEffect } from "react";
import SponserRentbar from "../layouts/SponserRentbar";
import HeaderAgent from "../components/HeaderAgent";
import AgentRentCard from "../components/AgentRentCard";
import { PropertyAsync } from "../features/createproperty/slice/createproperty-slice";

export default function AgentPropertiesPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(PropertyAsync(id)).unwrap();
      setPageLoading(false);
    };

    fetchData();
  }, [id]);

  const userproperty = useSelector(
    (state) => state?.propertyPlan?.propertyPlan?.Properties
  );

  const el = { ...userproperty };

  console.log("see me ", el);
  console.log("see me id ", id);

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
                <p className="text-c-white1 text-base">ตัวเลือกเพิ่มเติม</p>

                <AgencyCard
                  agencyfirstname={el?.User?.firstName}
                  agencylastname={el?.User?.lastName}
                  agencystatus={el?.User?.locked}
                  agencyphone={el?.User?.phoneNumber}
                  agencyemail={el?.User?.email || "00"}
                />
              </div>
              <LogoWhite />
            </div>
          </div>
          <div className="flex-[3] px-10 gap-5 flex flex-col my-12">
            <>
              <HeaderAgent topic="My Properties" />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className=" flex w-full gap-5 px-10 py-5 overflow-auto"
              >
                {userproperty?.map((property) => (
                  <AgentRentCard
                    id={property?.id}
                    propName={property?.name}
                    propDescription={property?.description}
                    agencyName={property?.firstName}
                    propPrice={property?.price}
                    propRentPeriod={property?.rentPeriod}
                    propLocation=""
                    propNearBY=""
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
