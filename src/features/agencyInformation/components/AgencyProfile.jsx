import React from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import DashboardItem from "../../dashboard/components/DashboardItem";
import { FaRegMoneyBillAlt, FaChevronLeft } from 'react-icons/fa';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { useState } from "react";
import AgencyProfileForm from "./AgencyProfileForm";
import { useNavigate } from "react-router-dom";

export default function AgencyProfile({el}) {
  console.log("dsfsdgdgdfg", el)
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate()
  return (
    <>
      <HeaderAdmin topic="Agent details" />
      <div className='flex flex-col gap-6 m-8 mt-0'>
            <div className="flex gap-2 items-center bg-blue-600 px-4 py-2 cursor-pointer text-white rounded-md w-fit" onClick={() => navigate(-1)}>
                <FaChevronLeft />
                <div>Agent list</div>
            </div>
            <div className=" grid grid-cols-4 gap-6 text-base">
                <DashboardItem bgColor="blue" title="Total Property"><BsFillBuildingsFill fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="gray" title="Inactive Property"><BsFillBuildingsFill fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="orange" title="Active Property"><BsFillBuildingsFill fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="green" title="Total Purchase"><FaRegMoneyBillAlt fill='#ffffff' size={28}/></DashboardItem>
            </div>
            <div className="flex gap-4">
                <div className="w-3/5 bg-white rounded-lg p-6 relative mt-6">
                    {!isEditMode? 
                    <div className="absolute bg-blue-600 rounded-full w-[70px] h-[70px] -mt-8 ml-8 overflow-hidden">
                        <img className="object-cover h-full" src={el?.profileImage} alt="" />
                    </div> : <></>}
                    <div className="flex justify-between text-lg gap-3">
                      {!isEditMode? <div></div> : ""}
                        <div className="flex gap-2">
                            <div className="text-gray-600 font-medium">เข้าร่วม</div>
                            <div className="text-gray-600">{el?.createdAt.slice(0,10)}</div>
                        </div>
                        {!isEditMode? <div className="text-gray-600 font-semibold text-md hover:underline cursor-pointer" onClick={()=>setIsEditMode(true)}>แก้ไข</div> :
                            <div className="text-gray-600 font-semibold text-md hover:underline cursor-pointer" onClick={()=>setIsEditMode(false)}>Cancel</div>}
                    </div>
                    {!isEditMode? <table className="border w-full border-collapse mt-6">
                        <tr>
                            <td className="w-1/2 px-3 py-2 border-b border-r">ชื่อ-นามสกุล</td>
                            <td className="w-1/2 p-3 border-b">{el?.firstName} {el?.lastName}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="w-1/2 px-3 py-2 border-b border-r">Email</td>
                            <td className="w-1/2 p-3 border-b">{el?.email}</td>
                        </tr>
                        <tr>
                            <td className="w-1/2 px-3 py-2 border-b border-r">เบอร์โทรศัพท์</td>
                            <td className="w-1/2 p-3 border-b"> {el?.phoneNumber}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="w-1/2 px-3 py-2 border-b border-r">สถานะ</td>
                            <td className="w-1/2 p-3 border-b">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    {(el?.locked)? <input type="checkbox" value="" className="sr-only peer" checked/> : <input type="checkbox" value="" className="sr-only peer-disabled"/>  }
                                    <div className="w-11 h-6 bg-red-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                </label>
                            </td>
                        </tr> 
                    </table> : <AgencyProfileForm onIsAddMode={setIsEditMode} />}
                </div>
                <div className="w-2/5 flex flex-col gap-4 sha bg-white rounded-lg p-6 mt-ุ">
                    <div className="font-medium mb-3">Agent Action</div>
                    <div className='py-2 px-6 bg-red-600 rounded-md text-white flex justify-center cursor-pointer'>Report issues</div>
                    <div className='py-2 px-6 bg-blue-600 rounded-md text-white flex justify-center cursor-pointer'>Purchase History</div>
                </div>
            </div>
      </div>
    </>
  )
}