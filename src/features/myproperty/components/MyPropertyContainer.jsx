import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import HeaderAgent from "../../../components/HeaderAgent";
import AgentRentCard from "../../../components/AgentRentCard";
import { useParams } from "react-router-dom";
import { profileAgncyAsync } from "../../myprofile/slice/myProfile-slice";
import { PropertyAsync } from "../../createproperty/slice/createproperty-slice";
import { useSearchParams } from "react-router-dom";
import Loading from "../../../components/Loading";

export default function MyPropertyContainer() {
  const dispatch = useDispatch();
  const { id } = useParams();

  // console.log("TEST----->", id);

  // const el = useSelector((state) => state?.adminViewAgent?.agentById);
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

  // console.log("--------*----->", userproperty);
  return (
    <>
      <HeaderAgent topic="My Properties" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className=" flex w-full gap-5 px-10 py-5 overflow-auto"
      >
        {userproperty?.map((property) => (
          <AgentRentCard
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
  );
}
