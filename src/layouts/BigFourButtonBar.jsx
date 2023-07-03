import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BigFourButtonBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="w-full flex justify-center flex-wrap gap-10"
    >
      <Link to="/searchpage">
        <div className="w-[200px] h-[200px] bg-c-green3 rounded-3xl flex flex-col justify-between p-5 py-7 text-center transition hover:bg-c-green4 hover:scale-105 active:scale-95 active:bg-c-green2 shadow-lg duration-300">
          <div className="text-[80pt] text-c-white1 w-full pl-5 relative flex">
            <img
              src="src/assets/icon/officeBuilding.png"
              alt=""
              className="absolute left-[90px] top-10 bottom-0 right-0 h-fit w-fit"
            />
            <img
              src="src/assets/icon/searchIcon.png"
              alt=""
              className="absolute left-3 top-0 bottom-0 right-0 h-fit w-fit"
            />
          </div>
          <div className=" text-c-white1 text-xl">ค้นหาทั้งหมด</div>
        </div>
      </Link>
      {/* <div className="w-[200px] h-[200px] bg-c-green3 rounded-3xl flex flex-col justify-between p-5 py-7 text-center transition hover:bg-c-green4 hover:scale-105 active:scale-95 active:bg-c-green2 shadow-lg duration-300">
        <div className="text-[80pt] text-c-white1 w-full pl-5 relative flex">
          <img
            src="src/assets/icon/mapIcon.png"
            alt=""
            className="absolute left-[90px] top-10 bottom-0 right-0 h-fit w-fit"
          />
          <img
            src="src/assets/icon/searchIcon.png"
            alt=""
            className="absolute left-3 top-0 bottom-0 right-0 h-fit w-fit"
          />
        </div>
        <div className=" text-c-white1 text-xl">ค้นหาในแผนที่</div>
      </div> */}
      <Link to="/agent">
        <div className="w-[200px] h-[200px] bg-c-green3 rounded-3xl flex flex-col justify-between p-5 py-7 text-center transition hover:bg-c-green4 hover:scale-105 active:scale-95 active:bg-c-green2 shadow-lg duration-300">
          <div className="text-[80pt] text-c-white1 w-full pl-5 relative flex">
            <img
              src="src/assets/icon/union.png"
              alt=""
              className="absolute left-[110px] top-[-10px] bottom-0 right-0 h-fit w-fit"
            />
            <img
              src="src/assets/icon/officeBuildingBig.png"
              alt=""
              className="absolute left-9 top-3 bottom-0 right-0 h-fit w-fit"
            />
          </div>
          <div className=" text-c-white1 text-xl">เพิ่มห้องเช่า</div>
        </div>
      </Link>
      <Link to="/recommendpage">
        <div className="w-[200px] h-[200px] bg-c-green3 rounded-3xl flex flex-col justify-between p-5 py-7 text-center transition hover:bg-c-green4 hover:scale-105 active:scale-95 active:bg-c-green2 shadow-lg duration-300">
          <div className="text-[80pt] text-c-white1 w-full pl-5 relative flex">
            <img
              src="src/assets/icon/docIcon.png"
              alt=""
              className="absolute left-12 top-3 bottom-0 right-0 h-fit w-fit"
            />
          </div>
          <div className=" text-c-white1 text-xl">ผู้ปล่อยเช่าแนะนำ</div>
        </div>
      </Link>
    </motion.div>
  );
}
