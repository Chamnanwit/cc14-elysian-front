import React, { useState } from "react";
import HeaderAgent from "../../../components/HeaderAgent";
import PropertyForm from "./PropertyForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { profileAgncyAsync } from "../../myprofile/slice/myProfile-slice";
import { getdistrictlistAsync } from "../../agencyInformation/slice/adminviewagency-slice";

export default function PropertyContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileAgncyAsync());
    dispatch(getdistrictlistAsync());
  }, []);

  const userCreate = useSelector((state) => state?.profileAgncy?.profileAgncy);
  const listProvice = useSelector(
    (state) => state?.adminViewAgent?.districtlist
  );

  console.log("--------->", listProvice);
  const [stateData, setStateData] = useState();
  const [districtData, setDistrictData] = useState();

  const [provice, setProvice] = useState(listProvice[0]);
  const [state, setState] = useState();
  const [district, setdistrict] = useState();

  useEffect(() => {
    setStateData(provice?.Districts);
  }, [provice]);

  useEffect(() => {
    setDistrictData(state?.SubDistricts);
  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    districtData && setDistrict(districtData[0]);
  }, [districtData]);

  return (
    <>
      <HeaderAgent topic="Create Property" />
      <div className="flex flex-col gap-6 m-8 mt-0">
        <PropertyForm
          key={userCreate?.user?.id}
          oldProperty={userCreate?.user}
          listProvice={listProvice}
        />
      </div>
    </>
  );
}
