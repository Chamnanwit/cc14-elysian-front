import React, { useState } from "react";
import { EditIcon, TrashIcon } from "../../../icons";
import Modal from "../../../components/Modal";
import { HiEye } from "react-icons/hi"

export default function UserItem({ el }) {
  const [isViewMode, setIsViewMode] = useState(false);
  const [status, setStatus] = useState(el.status)
  console.log(status)
  return (
    <>
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {el.id}
                </th>
                <td class="px-6 py-4">{el.name}</td>
                <td class="px-6 py-4">{el.email}</td>
                <td class="px-6 py-4">
                    <label class="relative inline-flex items-center mb-5 cursor-pointer">
                        {(status)? <input type="checkbox" value="" className="sr-only peer" checked onClick={() => {status? setStatus(0): setStatus(1)}}/> : <input type="checkbox" value="" className="sr-only peer" onClick={() => {status? setStatus(0): setStatus(1)}}/>  }
                        <div className="w-11 h-6 bg-red-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    </label>
                </td>
                
                <td class="px-6 py-4 flex gap-3">
                    <div
                        className="bg-blue-700 p-[7px] rounded-md cursor-pointer flex items-center"
                        onClick={(e) => {
                        e.stopPropagation();
                        setIsViewMode(true);
                        }}
                    >
                        <HiEye fill="#ffffff"/>
                    </div>
                    <div className="bg-red-700 p-[5px] rounded-md cursor-pointer">
                        <TrashIcon />
                    </div>
                </td>
        </tr>
        {/* {isViewMode? 
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
      : <></>} */}
      </>
  );
}
