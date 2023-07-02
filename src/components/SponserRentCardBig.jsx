import { BsTelephoneFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

import PopOverButton from "../components/PopOverButton";

import BadgeDarkBlue from "./BadgeYellow";

export default function SponserRentCardBig({
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
  rootype,
  propArea,
}) {
  return (
    <div className=" flex flex-col bg-white w-full rounded-lg overflow-hidden shadow-lg transition-all active:scale-100 duration-[400ms] hover:scale-[101%]">
      <div className="flex">
        <div className="flex-[1.5] h-[180px] overflow-auto bg-white ml-2 flex  justify-start gap-2 items-center">
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
        <div className="flex-[2] flex flex-col px-5 py-3 gap-1 w-full justify-between">
          <div className=" flex gap-2 justify-between ">
            <div className="flex gap-2  overflow-auto  w-[16rem] relative ">
              {rootype}
              {badge}
              <div className="bg-black w-full relative top-24"> </div>
            </div>
            <div className="flex gap-2  text-c-gray2 w-fit whitespace-nowrap">
              <BiTime />
              <p className="text-[8pt] items-center">{createTime}</p>
            </div>
          </div>
          <div className="flex  overflow-auto h-12 text-lg text-c-gray3">
            {propName || "prop name"}
          </div>
          <div className="text-[8pt] text-c-gray2 h-12  overflow-y-auto">
            <div dangerouslySetInnerHTML={{ __html: propDescription }} />
            {/* {propDescription ||
              "   ในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปร ในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปรในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปรร์ มีโปร ในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปรในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปรร์ มีโปร ในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปรในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปรร์ มีโปร ในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปรในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปรร์ มีโปร ในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปรในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปรร์ มีโปร ในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปรในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปร"} */}
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-xs text-c-gray2 flex gap-1">
              <div>
                <MdLocationOn />
              </div>
              <div>{propLocation}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full px-5 py-2 align-middle text-xs  text-c-gray2 bg-c-yellow1">
        <div className="flex  items-center text-c-gray3 gap-5">
          <div className="text-xs text-c-gray3  ">โดย {agencyName}</div>

          <div className=" flex gap-2 items-center">
            <BsTelephoneFill className="text-sm" />
            <p className="text-xs">{agencyphone}</p>
          </div>
          <div className=" flex gap-2 items-center">
            <MdEmail className="text-sm" />
            <p className="text-xs">{agencyemail}</p>
          </div>
        </div>
        <div className=" flex gap-2 items-center">
          <div className="text-sm text-c-gray3">{propArea} ตร.ว. |</div>
          <div className="text-lg text-c-gray3">
            {propPrice} / {propRentPeriod}
          </div>
        </div>
      </div>
    </div>
  );
}
