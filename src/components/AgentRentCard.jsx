import { ImBin2 } from "react-icons/im";
import { BsPencilSquare } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  PropertyAsync,
  deletePropertyAsync,
  updatePropertyAsync,
} from "../features/createproperty/slice/createproperty-slice";
import { useState } from "react";
import { dashboardAgentAsync } from "../features/dashboard/slice/dashboard-slice";

export default function AgentRentCard({
  id,
  propName,
  propDescription,
  agencyName,
  propPrice,
  propRentPeriod,
  propLocation,
  propArea,
  link,
  src,
  proplock,
  proptopStatus,
}) {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(proplock);
  const [statusTop, setStatusTop] = useState(proptopStatus);

  const user = useSelector((state) => state?.auth?.user);

  const userid = user?.id;

  console.log("**********>>", id);

  const handleClickChangeStatus = async (e) => {
    await dispatch(updatePropertyAsync({ id, locked: !status })).unwrap();
    await dispatch(dashboardAgentAsync(userid)).unwrap();
    setStatus(!status);
  };
  const handleClickChangeStatusTop = async (e) => {
    await dispatch(updatePropertyAsync({ id, topStatus: !statusTop })).unwrap();
    await dispatch(dashboardAgentAsync(userid)).unwrap();
    setStatusTop(!statusTop);
  };

  const handleDeleteProperty = async () => {
    await dispatch(deletePropertyAsync(id)).unwrap();
    await dispatch(PropertyAsync(userid)).unwrap();
  };

  return (
    <div className="flex flex-col w-[270px] h-fit justify-start">
      {/* edit delete text */}
      <div className="flex justify-end w-[270px] py-2">
        <Link
          to={`/agent/editproperty/${id}`}
          className="text-sm text-c-gray2  p-1 px-3 rounded-xl hover:bg-c-gray1 hover:text-c-white1 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          Edit
        </Link>
        <div
          className="text-sm text-c-gray2  p-1 px-3 rounded-xl hover:bg-c-gray1 hover:text-c-white1 active:scale-95 transition-all duration-200 cursor-pointer"
          onClick={handleDeleteProperty}
        >
          Delete
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-2xl w-[270px] overflow-hidden items-center shadow-lg transition-all hover:scale-105  duration-500 cursor-pointer">
        <Link to={`/rentdetail/${id}`}>
          <div>
            <img
              src={
                src ||
                "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
              }
              alt="pic test1"
              className="h-[180px] w-[270px] bg-[#d0d0d0]"
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

          <div className="flex justify-between w-full px-5 py-2 text-xs  text-c-gray2 bg-c-white1">
            <div className="text-xs text-c-gray2 flex gap-1">
              <div>
                <MdLocationOn />
              </div>
              <div> {propLocation || "ที่อยู่"}</div>
            </div>
            <div>{propArea || ""} ตร.ม.</div>
          </div>
        </Link>

        <div className="flex justify-between w-full px-5 py-2 text-xs  text-c-gray2 bg-c-white1 border">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="locked"
              className="sr-only peer"
              checked={!status}
              onChange={handleClickChangeStatus}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-c-blue1"></div>
            <span className="ml-3 text-lg font-medium text-c-blue1 dark:text-gray-300 ">
              <AiFillEye />
            </span>
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="topStatus"
              className="sr-only peer"
              checked={!statusTop}
              onChange={handleClickChangeStatusTop}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-c-yellow1"></div>
            <span className="ml-3 text-2xl font-medium text-c-yellow2 dark:text-gray-300">
              <RiAdvertisementFill />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
