import React from "react";
import HeaderAgent from "../../../components/HeaderAgent";
import AminityForm from "./AminityForm";
import PropertyForm from "./PropertyForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { profileAgncyAsync } from "../../myprofile/slice/myProfile-slice";

export default function PropertyContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileAgncyAsync());
  }, []);

  const userCreate = useSelector((state) => state?.profileAgncy?.profileAgncy);

  // console.log("In Property", userCreate);

  return (
    <>
      <HeaderAgent topic="Create Property" />
      <div className="flex flex-col gap-6 m-8 mt-0">
        <PropertyForm
          key={userCreate?.user?.id}
          oldProperty={userCreate?.user}
        />
      </div>
    </>
  );
}
