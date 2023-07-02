import React, { useState } from "react";
import { EditIcon, TrashIcon } from "../../../icons";
import Modal from "../../../components/Modal";
import { HiEye } from "react-icons/hi";

export default function PurchaseHistoryItem({ el }) {
  const [isViewMode, setIsViewMode] = useState(false);
  return (
    <>
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {el?.id}
                </th>
                <td class="px-3 py-4">{el?.User?.firstName} {el?.User?.lastName}</td>
                <td class="px-3 py-4">{el?.PricingPlan?.planType}</td>
                <td class="px-3 py-4">฿ {el?.PricingPlan?.price}</td>
                <td class="px-3 py-4">{(el?.PricingPlan?.expiration === "MONTHLY")? "รายเดือน" : "รายสัปดาห์"}</td>
                <td class="px-3 py-4">
                {(el.paymentStatus === "complete") ? (
                    <div className="border rounded-full bg-green-600 flex justify-center items-center text-white py-1 max-w-[110px]">
                        Success
                    </div>
                    ) : (
                    <div className="border rounded-full bg-red-600 flex justify-center items-center text-white py-1 max-w-[80px]">
                        Pending
                    </div>
                )}
                </td>
                <td class="px-3 py-4">
                {el.orderStatus === "ACTIVE" ? (
                    <div className="border rounded-full bg-green-600 flex justify-center items-center text-white py-1 max-w-[80px]">
                        Active
                    </div>
                    ) : (
                    <div className="border rounded-full bg-red-600 flex justify-center items-center text-white py-1 max-w-[80px]">
                        Expired
                    </div>
                )}
                </td>
                <td class="px-3 py-4 flex gap-3">
                    <div
                        className="bg-blue-700 p-[7px] rounded-md cursor-pointer flex items-center"
                        onClick={(e) => {
                        e.stopPropagation();
                        setIsViewMode(true);
                        }}
                    >
                        <HiEye fill="#ffffff"/>
                    </div>
                    {/* <div className="bg-red-700 p-[5px] rounded-md cursor-pointer">
                        <TrashIcon />
                    </div> */}
                </td>
        </tr>
        {isViewMode? 
        <Modal title="ประวัติการซื้อ" width="50" open={isViewMode} onClose={()=> setIsViewMode(false)}>
            <table className="border w-full border-collapse">
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">ผู้ปล่อยเช่า</td>
                <td className="w-1/2 p-3 border-b">{el?.User?.firstName} {el?.User?.lastName}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">ชื่อแพ็คเกจ</td>
                <td className="w-1/2 p-3 border-b">{el?.PricingPlan?.name}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">ประเภทแพ็คเกจ</td>
                <td className="w-1/2 p-3 border-b">{el?.PricingPlan?.planType}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">ราคา</td>
                <td className="w-1/2 p-3 border-b">฿ {el?.PricingPlan?.price}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">ระยะเวลา</td>
                <td className="w-1/2 p-3 border-b">{(el?.PricingPlan?.expiration === "MONTHLY")? "รายเดือน" : "รายสัปดาห์"}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">วันหมดอายุ</td>
                <td className="w-1/2 p-3 border-b">{el.price}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">เวลาที่เหลือ</td>
                <td className="w-1/2 p-3 border-b">{el.price}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">จำนวนประกาศแบบธรรมดา</td>
                <td className="w-1/2 p-3 border-b"> {el?.PricingPlan?.limit}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">จำนวนประกาศแบบจัดอันดับ</td>
                <td className="w-1/2 p-3 border-b">{el?.PricingPlan?.numberOfTop}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">สถานะแพ็คเกจ</td>
                <td className="w-1/2 p-3 border-b">{el.orderStatus ? (
                    <div className="border rounded-full bg-green-600 flex justify-center items-center text-white py-1 max-w-[100px]">
                        Active
                    </div>
                    ) : (
                    <div className="border rounded-full bg-red-600 flex justify-center items-center text-white py-1 max-w-[100px]">
                        Expired
                    </div>
                )}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">สถานะการจ่ายเงิน</td>
                <td className="w-1/2 p-3 border-b">{(el.paymentStatus === "complete") ? (
                    <div className="border rounded-full bg-green-600 flex justify-center items-center text-white py-1 max-w-[100px]">
                        Success
                    </div>
                    ) : (
                    <div className="border rounded-full bg-red-600 flex justify-center items-center text-white py-1 max-w-[100px]">
                        Pending
                    </div>
                )}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">วิธีการจ่ายเงิน</td>
                <td className="w-1/2 p-3 border-b">Stripe</td>
              </tr>
            </table>
            </Modal>
      : <></>}
      </>
  );
}
