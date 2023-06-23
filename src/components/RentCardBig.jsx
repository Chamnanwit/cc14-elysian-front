import { BsTelephoneFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import PopOverButton from "../components/PopOverButton";

import BadgeDarkBlue from "../components/BadgeDarkBlue";

export default function RentCardBig() {
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
            <BadgeDarkBlue>สวน</BadgeDarkBlue>
            <BadgeDarkBlue>สระว่ายน้ำ</BadgeDarkBlue>
            <BadgeDarkBlue>ฟิสเนส</BadgeDarkBlue>
            {/* <div className="text-[6pt] text-c-white1 p-1 rounded-md bg-c-blue2 text-center h-auto align-middle my-auto ">
            สวน
          </div>
          <div className="text-[6pt] text-c-white1 p-1 rounded-md bg-c-blue2  text-center h-auto align-middle my-auto ">
            สระว่ายน้ำ
          </div>
          <div className="text-[6pt] text-c-white1 p-1 rounded-md bg-c-blue2  text-center h-auto align-middle my-auto ">
            ฟิสเนส
          </div> */}
          </div>
          <div className="flex gap-2  text-c-gray2">
            <BiTime />
            <p className="text-xs items-center"> 4 ชั่วโมง</p>
          </div>
        </div>
        <div className="flex align-middle  items-center overflow-hidden h-10 text-lg text-c-gray3">
          เดอะออริจิ้นคอนโด - สวนสนุก
        </div>
        <div className="text-[8pt] text-c-gray2 h-12  overflow-y-auto">
          ในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปร
          วันเสาร์ วันศุกร์พบเด็ก มีๆรเจอกัล ในน้ำมีปลา ในนามีข้าว
          มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปร วันเสาร์ วันศุกร์พบเด็ก
          มีๆรเจอกัลในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์
          มีโปร วันเสาร์ วันศุกร์พบเด็ก มีๆรเจอกัล
        </div>
        <div className="flex justify-between">
          <div className="text-xs text-c-gray2 flex gap-1">
            <div>
              <MdLocationOn />
            </div>
            <div>624 ถนนอโศก - ดินแดง แขวงดินแดง เขตดินแดง กรุงเทพมหานคร</div>
          </div>
          <div className="text-xs text-c-gray2 ">by owner</div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full px-5 py-0 align-middle text-xs  text-c-gray2 bg-c-gray2">
        <div className="flex">
          <PopOverButton text="0889992221">
            <BsTelephoneFill className="text-xl" />
          </PopOverButton>
          <PopOverButton text="a@gmail.com">
            <MdEmail className="text-2xl pb-[1px]" />
          </PopOverButton>
          <PopOverButton text="@elysian">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="fill-current text-c-white1"
              viewBox="0 0 377.764 377.764"
            >
              <path d="M77.315 0h223.133c42.523 0 77.315 34.792 77.315 77.315v223.133c0 42.523-34.792 77.315-77.315 77.315H77.315C34.792 377.764 0 342.972 0 300.448V77.315C0 34.792 34.792 0 77.315 0z" />
              <path
                fillRule="evenodd"
                // clip-rule="evenodd"
                className="text-c-gray2"
                d="M188.515 62.576c76.543 0 138.593 49.687 138.593 110.979 0 21.409-7.576 41.398-20.691 58.351-.649.965-1.497 2.031-2.566 3.209l-.081.088c-4.48 5.36-9.525 10.392-15.072 15.037-38.326 35.425-101.41 77.601-109.736 71.094-7.238-5.656 11.921-33.321-10.183-37.925-1.542-.177-3.08-.367-4.605-.583l-.029-.002v-.002c-64.921-9.223-114.222-54.634-114.222-109.267-.002-61.292 62.049-110.979 138.592-110.979z"
              />
              <path d="M108.103 208.954h27.952c3.976 0 7.228-3.253 7.228-7.229v-.603c0-3.976-3.252-7.228-7.228-7.228h-20.121v-45.779c0-3.976-3.252-7.228-7.228-7.228h-.603c-3.976 0-7.228 3.252-7.228 7.228v53.609c0 3.977 3.252 7.23 7.228 7.23zm173.205-33.603v-.603c0-3.976-3.253-7.228-7.229-7.228h-20.12v-11.445h20.12c3.976 0 7.229-3.252 7.229-7.228v-.603c0-3.976-3.253-7.228-7.229-7.228h-27.952c-3.976 0-7.228 3.252-7.228 7.228v53.609c0 3.976 3.252 7.229 7.228 7.229h27.952c3.976 0 7.229-3.253 7.229-7.229v-.603c0-3.976-3.253-7.228-7.229-7.228h-20.12v-11.445h20.12c3.976.002 7.229-3.251 7.229-7.226zm-53.755 31.448l.002-.003a7.207 7.207 0 0 0 2.09-5.07v-53.609c0-3.976-3.252-7.228-7.229-7.228h-.603c-3.976 0-7.228 3.252-7.228 7.228v31.469l-26.126-35.042c-1.248-2.179-3.598-3.655-6.276-3.655h-.603c-3.976 0-7.229 3.252-7.229 7.228v53.609c0 3.976 3.252 7.229 7.229 7.229h.603c3.976 0 7.228-3.253 7.228-7.229v-32.058l26.314 35.941c.162.252.339.494.53.724l.001.002c.723.986 1.712 1.662 2.814 2.075.847.35 1.773.544 2.742.544h.603a7.162 7.162 0 0 0 3.377-.844c.723-.344 1.332-.788 1.761-1.311zm-71.208 2.155h.603c3.976 0 7.228-3.253 7.228-7.229v-53.609c0-3.976-3.252-7.228-7.228-7.228h-.603c-3.976 0-7.229 3.252-7.229 7.228v53.609c0 3.976 3.253 7.229 7.229 7.229z" />
            </svg>
          </PopOverButton>
        </div>

        <div className="text-xl text-c-white1 ">฿11,200 / เดือน</div>
      </div>
    </div>
  );
}
