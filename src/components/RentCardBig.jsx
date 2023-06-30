import { BsTelephoneFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

import PopOverButton from "../components/PopOverButton";

import BadgeDarkBlue from "../components/BadgeDarkBlue";

export default function RentCardBig({
  propName,
  propDescription,
  agencyName,
  propPrice,
  propRentPeriod,
  propLocation,
  agencyphone,
  agencyemail,
  createTime,
  badge,
}) {
  return (
    <div className=" flex flex-col bg-white w-full rounded-lg overflow-hidden shadow-lg transition-all active:scale-100 duration-[400ms] hover:scale-[101%]">
      <div className="h-[180px] overflow-auto bg-c-gray3 flex justify-start gap-2 items-center">
        <img
          src="/src/assets/pic/pictest1.jpg"
          alt="pic test1"
          className="h-[160px] w-auto"
        />
        <img
          src="/src/assets/pic/pictest2.jpg"
          alt="pic test1"
          className="h-[160px] w-auto"
        />
        <img
          src="/src/assets/pic/pictest3.jpg"
          alt="pic test1"
          className="h-[160px] w-auto"
        />
        <img
          src="/src/assets/pic/mainpic.jpeg"
          alt="pic test1"
          className="h-[160px] w-auto"
        />
      </div>
      <div className="flex flex-col px-5 py-3 gap-1 w-full">
        <div className=" flex gap-2 justify-between">
          <div className="flex gap-2">
            {badge}
            {/* <BadgeDarkBlue>สวน</BadgeDarkBlue>
            <BadgeDarkBlue>สระว่ายน้ำ</BadgeDarkBlue>
            <BadgeDarkBlue>ฟิสเนส</BadgeDarkBlue> */}
          </div>
          <div className="flex gap-2  text-c-gray2">
            <BiTime />
            <p className="text-xs items-center">{createTime}</p>
          </div>
        </div>
        <div className="flex align-middle  items-center overflow-hidden h-10 text-lg text-c-gray3">
          {propName || "prop name"}
        </div>
        <div className="text-[8pt] text-c-gray2 h-12  overflow-y-auto">
          {propDescription ||
            "   ในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปร ในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปรในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปร"}
        </div>
        <div className="flex justify-between">
          <div className="text-xs text-c-gray2 flex gap-1">
            <div>
              <MdLocationOn />
            </div>
            <div>{propLocation}</div>
          </div>
          <div className="text-xs text-c-gray2 ">โดย {agencyName}</div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full px-5 py-2 align-middle text-xs  text-c-gray2 bg-c-white1">
        <div className="flex  items-center text-c-gray2 gap-5">
          <div className=" flex gap-2 items-center">
            <BsTelephoneFill className="text-sm" />
            <p className="text-xs">{agencyphone}</p>
          </div>
          <div className=" flex gap-2 items-center">
            <MdEmail className="text-sm" />
            <p className="text-xs">{agencyemail}</p>
          </div>
        </div>

        <div className="text-lg text-c-gray3">
          ฿{propPrice} / {propRentPeriod}
        </div>
      </div>
    </div>
  );
}
