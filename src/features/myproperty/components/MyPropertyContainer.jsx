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
  console.log("userproperty--->", userproperty);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className=" flex flex-wrap w-full gap-5 gap-y-10 px-10 py-5"
      >
        {userproperty?.map((property) => (
          <AgentRentCard
            src={property?.Images[0]?.imageLink}
            // id={property?.id}
            propName={property?.name}
            propDescription={property?.description}
            agencyName={property?.firstName}
            propPrice={property?.price}
            propRentPeriod={
              property?.rentPeriod === "MONTHLY" ? "เดือน" : "สัปดาห์"
            }
            propLocation={property?.SubDistrict?.District?.Province?.nameInThai}
            propArea={property?.totalArea}
            link={property?.id}
          />
        ))}
      </motion.div>
    </>
  );
}
