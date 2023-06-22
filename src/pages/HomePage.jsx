import HeaderSearch from "../layouts/HeaderSearch";
<<<<<<< HEAD
import ButtonYellowM from "../components/ButtonYellowM";
=======

// import { FaSearch, FaSearchLocation, FaSignOutAlt } from "react-icons/fa";

>>>>>>> 279cf526b3d2480ce375151590552d3be6a28e48
import Navbar from "../layouts/Navbar";
import BigFourButtonBar from "../layouts/BigFourButtonBar";
import RentCard from "../components/RentCard";
import Footer from "../layouts/Footer";
import AdverBar from "../layouts/AdverBar";
import { BsCheckCircle } from "react-icons/bs";
import ListCheckGreenTrue from "../components/ListCheckGreenTrue";
import PromotionCard from "../components/PromotionCard";
import PackagePlan from "../layouts/PackagePlan";

export default function HomePage() {
  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div className=" pb-10">
        <Navbar />
        <div className="h-full bg-c-white1">
          <HeaderSearch />
          <div className="h-0 body relative">
            <div className=" absolute top-[-80px] right-0 bottom-0 left-0 ">
              <BigFourButtonBar />
            </div>
          </div>
          <div className="mt-24 h-5 bg-c-white1"></div>
          <div className="flex justify-between px-10 pt-5">
            <div className="text-xl text-c-gray3">ยอดนิยม</div>
            <div className="text-sm text-c-gray2">ดูทั้งหมด</div>
          </div>
        </div>
        <div className=" flex w-full gap-5 px-10 py-5 overflow-auto">
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
        </div>
        <AdverBar />
        <PackagePlan />
      </div>

      <Footer />
    </div>
  );
}
