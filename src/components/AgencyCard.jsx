import PopOverButton from "../components/PopOverButton";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  BsTelephoneFill,
  BsCheckCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function AgencyCard({
  agencyImage,
  agencyfirstname,
  agencylastname,
  agencystatus,
  agencyphone,
  agencyemail,
  agencyId,
}) {
  return (
    <Link to={`/agentproperties/${agencyId}`}>
      <div className=" bg-gray-100 gap-2 w-[200px] p-5 h-fit border rounded-lg shadow-md flex flex-col items-center text-c-white1">
        <img
          src={agencyImage || "/src/assets/blank.png"}
          alt="avatar"
          className=" rounded-full w-20 h-20"
        />
        <div className="flex gap-1 text-c-gray3  w-full text-xs justify-center">
          {/* <div>ชื่อ</div> */}
          <div>
            {agencyfirstname} {agencylastname}
          </div>
        </div>
        <div className="flex flex-col items-center text-c-gray2 gap-2">
          <div className=" flex gap-2 items-center">
            <BsTelephoneFill className="text-sm" />
            <p className="text-xs">{agencyphone}</p>
          </div>
          <div className=" flex gap-2 items-center">
            <MdEmail className="text-xs" />
            <p className="text-[8pt]">{agencyemail}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 border-b-gray1  w-full text-[8pt] justify-center">
          {/* <div>สถานะ</div> */}
          {agencystatus === false ? (
            <div className=" flex gap-1 items-center text-c-green2">
              <BsCheckCircleFill />
              <div>ยืนยันตัวตนแล้ว</div>
            </div>
          ) : (
            <div className=" flex gap-1 items-center text-c-red1">
              <BsFillXCircleFill />
              <div>ยังไม่ได้ยืนยันตัวตน</div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
