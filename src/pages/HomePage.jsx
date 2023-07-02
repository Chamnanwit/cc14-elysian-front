import HeaderSearch from "../layouts/HeaderSearch";
import ButtonYellowM from "../components/ButtonYellowM";
import Navbar from "../layouts/Navbar";
import BigFourButtonBar from "../layouts/BigFourButtonBar";

import Footer from "../layouts/Footer";
import AdverBar from "../layouts/AdverBar";

import PackagePlan from "../layouts/PackagePlan";
import { motion } from "framer-motion";

import RentCardSmallList from "../features/userProperties/components/RentCardSmallList";
import SponserRentCardSmallList from "../features/userProperties/components/SponserRentCardSmallList";

export default function HomePage() {
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
        </div>
        {/* <div className=" py-5">
          <div className="flex justify-between px-10 pt-5">
            <div className="text-xl text-c-gray3">ห้องเช่า</div>
            <div className="text-sm text-c-gray2"> </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className=" flex w-full gap-5 px-10 py-5 overflow-auto"
          >
            <RentCardSmallList />
          </motion.div>
        </div> */}
        <div className=" py-5">
          <div className="flex justify-between px-10 pt-5">
            <div className="text-xl text-c-gray3">ห้องเช่าแนะนำ</div>
            <div className="text-sm text-c-gray2"> </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className=" flex w-full gap-5 px-10 py-5 overflow-auto"
          >
            <SponserRentCardSmallList />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <AdverBar />
        </motion.div>
        <PackagePlan />
      </div>

      <Footer />
    </div>
  );
}
