import HeaderSearch from "../layouts/HeaderSearch";
import ButtonYellowM from "../components/ButtonYellowM";
import Navbar from "../layouts/Navbar";
import BigFourButtonBar from "../layouts/BigFourButtonBar";

import Footer from "../layouts/Footer";
import AdverBar from "../layouts/AdverBar";

import PackagePlan from "../layouts/PackagePlan";
import { motion } from "framer-motion";

import RentCardSmallList from "../features/userProperties/components/RentCardSmallList";

export default function HomePage() {
  // const MockData = [
  //   {
  //     id: 10,
  //     name: "job3",
  //     price: "1003.00",
  //     floor: 3,
  //     totalArea: 3,
  //     totalUnit: 300,
  //     totalBedroom: 3,
  //     totalBathroom: 3,
  //     totalKitchen: 3,
  //     description: "ccc",
  //     latitude: "99.999999",
  //     longitude: "444.440000",
  //     rentPeriod: "MONTHLY",
  //     locked: false,
  //     published: false,
  //     userId: 1,
  //     roomTypeId: 2,
  //     subDistrictId: 3,
  //   },
  //   {
  //     id: 11,
  //     name: "job4",
  //     price: "1003.00",
  //     floor: 3,
  //     totalArea: 3,
  //     totalUnit: 300,
  //     totalBedroom: 3,
  //     totalBathroom: 3,
  //     totalKitchen: 3,
  //     description: "ccc",
  //     latitude: "99.999999",
  //     longitude: "444.440000",
  //     rentPeriod: "MONTHLY",
  //     locked: false,
  //     published: false,
  //     userId: 1,
  //     roomTypeId: 2,
  //     subDistrictId: 3,
  //   },
  //   {
  //     id: 12,
  //     name: "job3",
  //     price: "1003.00",
  //     floor: 3,
  //     totalArea: 3,
  //     totalUnit: 300,
  //     totalBedroom: 3,
  //     totalBathroom: 3,
  //     totalKitchen: 3,
  //     description: "ccc",
  //     latitude: "99.999999",
  //     longitude: "444.440000",
  //     rentPeriod: "MONTHLY",
  //     locked: false,
  //     published: false,
  //     userId: 1,
  //     roomTypeId: 2,
  //     subDistrictId: 3,
  //   },
  //   {
  //     id: 13,
  //     name: "job3",
  //     price: "1003.00",
  //     floor: 3,
  //     totalArea: 3,
  //     totalUnit: 300,
  //     totalBedroom: 3,
  //     totalBathroom: 3,
  //     totalKitchen: 3,
  //     description: "ccc",
  //     latitude: "99.999999",
  //     longitude: "444.440000",
  //     rentPeriod: "MONTHLY",
  //     locked: false,
  //     published: false,
  //     userId: 1,
  //     roomTypeId: 2,
  //     subDistrictId: 3,
  //   },
  //   {
  //     id: 14,
  //     name: "job3",
  //     price: "1003.00",
  //     floor: 3,
  //     totalArea: 3,
  //     totalUnit: 300,
  //     totalBedroom: 3,
  //     totalBathroom: 3,
  //     totalKitchen: 3,
  //     description: "ccc",
  //     latitude: "99.999999",
  //     longitude: "444.440000",
  //     rentPeriod: "MONTHLY",
  //     locked: false,
  //     published: false,
  //     userId: 1,
  //     roomTypeId: 2,
  //     subDistrictId: 3,
  //   },
  //   {
  //     id: 15,
  //     name: "job3",
  //     price: "1003.00",
  //     floor: 3,
  //     totalArea: 3,
  //     totalUnit: 300,
  //     totalBedroom: 3,
  //     totalBathroom: 3,
  //     totalKitchen: 3,
  //     description: "ccc",
  //     latitude: "99.999999",
  //     longitude: "444.440000",
  //     rentPeriod: "MONTHLY",
  //     locked: false,
  //     published: false,
  //     userId: 1,
  //     roomTypeId: 2,
  //     subDistrictId: 3,
  //   },
  //   {
  //     id: 16,
  //     name: "job3",
  //     price: "1003.00",
  //     floor: 3,
  //     totalArea: 3,
  //     totalUnit: 300,
  //     totalBedroom: 3,
  //     totalBathroom: 3,
  //     totalKitchen: 3,
  //     description: "ccc",
  //     latitude: "99.999999",
  //     longitude: "444.440000",
  //     rentPeriod: "MONTHLY",
  //     locked: false,
  //     published: false,
  //     userId: 1,
  //     roomTypeId: 2,
  //     subDistrictId: 3,
  //   },
  //   {
  //     id: 17,
  //     name: "job3",
  //     price: "1003.00",
  //     floor: 3,
  //     totalArea: 3,
  //     totalUnit: 300,
  //     totalBedroom: 3,
  //     totalBathroom: 3,
  //     totalKitchen: 3,
  //     description: "ccc",
  //     latitude: "99.999999",
  //     longitude: "444.440000",
  //     rentPeriod: "MONTHLY",
  //     locked: false,
  //     published: false,
  //     userId: 1,
  //     roomTypeId: 2,
  //     subDistrictId: 3,
  //   },
  // ];

  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div className=" pb-10">
        <Navbar />
        <div className="h-full bg-c-white1">
          <HeaderSearch />
          <div className="h-0 body relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className=" absolute top-[-80px] right-0 bottom-0 left-0 "
            >
              <BigFourButtonBar />
            </motion.div>
          </div>
          <div className="mt-24 h-5 bg-c-white1"></div>
          <div className="flex justify-between px-10 pt-5">
            <div className="text-xl text-c-gray3">ยอดนิยม</div>
            <div className="text-sm text-c-gray2">ดูทั้งหมด</div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className=" flex w-full gap-5 px-10 py-5 overflow-auto"
        >
          <RentCardSmallList />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <AdverBar />
        </motion.div>
        <PackagePlan />
      </div>

      <Footer />
    </div>
  );
}
