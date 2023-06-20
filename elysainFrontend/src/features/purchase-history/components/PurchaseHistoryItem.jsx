import React, { useState } from "react";
import { EditIcon, TrashIcon } from "../../../icons";
import Modal from "../../../components/Modal";

export default function PurchaseHistoryItem({ el }) {
  const [isViewMode, setIsViewMode] = useState(false);
  return (
    <>
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {el.id}
                </th>
                <td class="px-3 py-4">{el.agent}</td>
                <td class="px-3 py-4">{el.planName}</td>
                <td class="px-3 py-4">฿ {el.price}</td>
                <td class="px-3 py-4">{el.expiration}</td>
                <td class="px-3 py-4">
                {el.payment ? (
                    <div className="border rounded-full bg-green-600 flex justify-center items-center text-white py-1 max-w-[100px]">
                        Success
                    </div>
                    ) : (
                    <div className="border rounded-full bg-red-600 flex justify-center items-center text-white py-1 max-w-[100px]">
                        Pending
                    </div>
                )}
                </td>
                <td class="px-3 py-4">
                {el.orderStatus ? (
                    <div className="border rounded-full bg-green-600 flex justify-center items-center text-white py-1 max-w-[100px]">
                        Active
                    </div>
                    ) : (
                    <div className="border rounded-full bg-red-600 flex justify-center items-center text-white py-1 max-w-[100px]">
                        Expired
                    </div>
                )}
                </td>
                <td class="px-3 py-4 flex gap-3">
                    <div
                        className="bg-blue-700 p-[5px] rounded-md cursor-pointer"
                        onClick={(e) => {
                        e.stopPropagation();
                        setIsViewMode(true);
                        }}
                    >
                        <EditIcon />
                    </div>
                    <div className="bg-red-700 p-[5px] rounded-md cursor-pointer">
                        <TrashIcon />
                    </div>
                </td>
        </tr>
        {isViewMode? 
        <Modal title="Purchase history" width="50" open={isViewMode} onClose={()=> setIsViewMode(false)}>
            <table className="border w-full border-collapse">
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">Agent</td>
                <td className="w-1/2 p-3 border-b">{el.agent}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">Plan name</td>
                <td className="w-1/2 p-3 border-b">{el.planName}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">Plan type</td>
                <td className="w-1/2 p-3 border-b">{el.planName}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">Plan price</td>
                <td className="w-1/2 p-3 border-b">฿ {el.price}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">Expiration</td>
                <td className="w-1/2 p-3 border-b">฿ {el.expiration}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">Expired date</td>
                <td className="w-1/2 p-3 border-b">฿ {el.price}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">Remaining day</td>
                <td className="w-1/2 p-3 border-b">฿ {el.price}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">Number of property</td>
                <td className="w-1/2 p-3 border-b">฿ {el.price}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">Number of top property</td>
                <td className="w-1/2 p-3 border-b">฿ {el.price}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">Order status</td>
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
                <td className="w-1/2 px-3 py-2 border-b border-r">Payment status</td>
                <td className="w-1/2 p-3 border-b">{el.payment ? (
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
                <td className="w-1/2 px-3 py-2 border-b border-r">Payment method</td>
                <td className="w-1/2 p-3 border-b">฿ {el.price}</td>
              </tr>
              <tr>
                <td className="w-1/2 px-3 py-2 border-b border-r">Transaction Id</td>
                <td className="w-1/2 p-3 border-b">฿ {el.price}</td>
              </tr>
            </table>
            </Modal>
      : <></>}
      </>
  );
}
