import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import HeaderAgent from "../../../components/HeaderAgent";
import RentCard from "../../../components/RentCard";
import { propertyPlanAsync } from "../../editproperty/slice/editProperty";

export default function MyPropertyContainer() {
  const dispatch = useDispatch();
  const propertyData = useSelector((state) => state.propertyPlan);
  const MockEditData = [
    {
      id: 10,
      name: "KLOS Ratchada (โคส รัชดา)",
      price: "1003.00",
      floor: 3,
      totalArea: 3,
      totalUnit: 300,
      totalBedroom: 3,
      totalBathroom: 3,
      totalKitchen: 3,
      description: "ccc",
      latitude: "99.999999",
      longitude: "444.440000",
      rentPeriod: "MONTHLY",
      locked: false,
      published: false,
      userId: 1,
      roomTypeId: 2,
      subDistrictId: 3,
      Location: "ซอยรัชดา 7 หลังศูนย์การค้า The Street Ratchada",
    },
    {
      id: 11,
      name: "KLOS Ratchada (โคส รัชดา)",
      price: "1003.00",
      floor: 3,
      totalArea: 3,
      totalUnit: 300,
      totalBedroom: 3,
      totalBathroom: 3,
      totalKitchen: 3,
      description: "ccc",
      latitude: "99.999999",
      longitude: "444.440000",
      rentPeriod: "MONTHLY",
      locked: false,
      published: false,
      userId: 1,
      roomTypeId: 2,
      subDistrictId: 3,
      Location: "ซอยรัชดา 7 หลังศูนย์การค้า The Street Ratchada",
    },
    {
      id: 12,
      name: "KLOS Ratchada (โคส รัชดา)",
      price: "1003.00",
      floor: 3,
      totalArea: 3,
      totalUnit: 300,
      totalBedroom: 3,
      totalBathroom: 3,
      totalKitchen: 3,
      description: "ccc",
      latitude: "99.999999",
      longitude: "444.440000",
      rentPeriod: "MONTHLY",
      locked: false,
      published: false,
      userId: 1,
      roomTypeId: 2,
      subDistrictId: 3,
      Location: "ซอยรัชดา 7 หลังศูนย์การค้า The Street Ratchada",
    },
  ];
  // useEffect(() => {
  //   dispatch(propertyPlanAsync());
  // }, [dispatch]);
  return (
    <>
      <HeaderAgent topic="My Properties" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className=" flex w-full gap-5 px-10 py-5 overflow-auto"
      >
        {MockEditData.map((el) => (
          <RentCard
            propName={el.name}
            propDescription={el.description}
            agencyName={el.name}
            propPrice={el.price}
            propRentPeriod={el.rentPeriod}
            propLocation=""
            propNearBY=""
          />
        ))}
      </motion.div>
    </>
  );
}
