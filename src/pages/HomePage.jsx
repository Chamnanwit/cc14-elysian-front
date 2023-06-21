import HeaderSearch from "../layouts/HeaderSearch";

// import { FaSearch, FaSearchLocation, FaSignOutAlt } from "react-icons/fa";

import Navbar from "../layouts/Navbar";
import BigFourButtonBar from "../layouts/BigFourButtonBar";
import RentCard from "../components/RentCard";
import Footer from "../layouts/Footer";

export default function HomePage() {
  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div>
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
        <div>adver</div>
      </div>

      <Footer />
    </div>
  );
}
