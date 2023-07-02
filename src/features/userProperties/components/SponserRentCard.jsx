import { ImBin2 } from "react-icons/im";
import { BsPencilSquare } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SponserRentCard({
  propName,
  propDescription,
  agencyName,
  propPrice,
  propRentPeriod,
  propLocation,
  propArea,
  link,
}) {
  return (
    <div className="flex flex-col w-[270px] h-fit justify-start">
      {/* edit delete text */}
      {/* <div className="flex justify-end w-[270px] py-2">
        <div className="text-sm text-c-gray2  p-1 px-3 rounded-xl hover:bg-c-gray1 hover:text-c-white1 active:scale-95 transition-all duration-200 cursor-pointer">
          Edit
        </div>
        <div className="text-sm text-c-gray2  p-1 px-3 rounded-xl hover:bg-c-gray1 hover:text-c-white1 active:scale-95 transition-all duration-200 cursor-pointer">
          Delete
        </div>
      </div> */}

      <div className="flex flex-col bg-white rounded-2xl w-[270px] overflow-hidden items-center shadow-lg transition-all hover:scale-105  duration-500 cursor-pointer">
        <Link to={`/rentdetail/${link}`}>
          <div>
            <img
              src="/src/assets/pic/pictest1.jpg"
              alt="pic test1"
              className="h-[180px] w-full"
            />
          </div>
          <div className="flex flex-col px-5 py-3 gap-1 w-full">
            {/* <div className=" flex gap-2">
              <div className="text-[6pt] text-c-white1 p-1 rounded-md bg-c-blue2 text-center h-auto align-middle my-auto ">
                สวน
              </div>
              <div className="text-[6pt] text-c-white1 p-1 rounded-md bg-c-blue2  text-center h-auto align-middle my-auto ">
                สระว่ายน้ำ
              </div>
              <div className="text-[6pt] text-c-white1 p-1 rounded-md bg-c-blue2  text-center h-auto align-middle my-auto ">
                ฟิสเนส
              </div>
     
            </div> */}
            <div className="flex  overflow-hidden h-10 text-sm text-c-gray3">
              {propName}
            </div>
            <div className="text-[6pt] text-c-gray2 h-12  overflow-y-auto">
              {/* {propDescription} */}
              <div dangerouslySetInnerHTML={{ __html: propDescription }} />
            </div>
            <div className="flex justify-between"></div>
            <div className="text-xs text-c-gray2 ">{agencyName}</div>
            <div className="text-c-gray3 text-sm">
              {propPrice} / {propRentPeriod}
            </div>
          </div>

          <div className="flex justify-between w-full px-5 py-2 text-xs  text-c-gray3 bg-c-yellow2">
            <div className="text-xs text-c-gray3 flex gap-1">
              <div>
                <MdLocationOn />
              </div>
              <div> {propLocation || "ที่อยู่"}</div>
            </div>
            <div>{propArea || ""} ตร.ม.</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
