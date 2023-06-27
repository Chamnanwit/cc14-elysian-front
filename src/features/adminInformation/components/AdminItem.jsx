import React, { useState } from "react";
import { TrashIcon } from "../../../icons";
import { HiEye } from "react-icons/hi";
import Modal from "../../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { adminInformationAsync, deleteAdminInformationAsync, searchAdminInformationAsync } from "../slice/admin-slice";

export default function AdminItem({ el }) {
  const [isViewMode, setIsViewMode] = useState(false);
  const [status, setStatus] = useState(el.status);
  console.log(status);

  const searchValue = useSelector(
    (state) => state?.adminInformation?.searchValue
  );
  const dispatch = useDispatch();
  const handleClickDeleteBox = async () => {
    await dispatch(adminInformationAsync());
    await dispatch(deleteAdminInformationAsync(el.id));
    await dispatch(searchAdminInformationAsync(searchValue));
  };

  return (
    <>
      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {el.id}
        </th>
        <td class="px-6 py-4">
          {el.firstName} {el.lastName}
        </td>
        <td class="px-6 py-4">{el.email}</td>
        <td class="px-6 py-4">
          <label class="relative inline-flex items-center cursor-pointer">
            {status ? (
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked
                onClick={() => {
                  status ? setStatus(0) : setStatus(1);
                }}
              />
            ) : (
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={() => {
                  status ? setStatus(0) : setStatus(1);
                }}
              />
            )}
            <div className="w-11 h-6 bg-red-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 tra"></div>
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
            <HiEye fill="#ffffff" />
          </div>
          <div className="bg-red-700 p-[5px] rounded-md cursor-pointer" onClick={handleClickDeleteBox}>
            <TrashIcon />
          </div>
        </td>
      </tr>
      {isViewMode ? (
        <Modal
          title="ประวัติ"
          width="50"
          open={isViewMode}
          onClose={() => setIsViewMode(false)}
        >
          <table className="border w-full border-collapse">
            <tr>
              <td className="w-1/2 px-3 py-2 border-b border-r">รูปภาพ</td>
              <td className="w-1/2 p-3 border-b">{el.agent}</td>
            </tr>
            <tr>
              <td className="w-1/2 px-3 py-2 border-b border-r">
                ชื่อ-นามสกุล
              </td>
              <td className="w-1/2 p-3 border-b">
                {el.firstName} {el.lastName}
              </td>
            </tr>
            <tr>
              <td className="w-1/2 px-3 py-2 border-b border-r">อีเมลล์</td>
              <td className="w-1/2 p-3 border-b">{el.email}</td>
            </tr>
            <tr>
              <td className="w-1/2 px-3 py-2 border-b border-r">
                เบอร์โทรศัพท์
              </td>
              <td className="w-1/2 p-3 border-b"> {el.phone}</td>
            </tr>
            <tr>
              <td className="w-1/2 px-3 py-2 border-b border-r">บัตรประชาชน</td>
              <td className="w-1/2 p-3 border-b"> {el.cardid}</td>
            </tr>
            <tr>
              <td className="w-1/2 px-3 py-2 border-b border-r">สถานะ</td>
              <td className="w-1/2 p-3 border-b">
                <label class="relative inline-flex items-center cursor-pointer">
                  {status ? (
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked
                    />
                  ) : (
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer-disabled"
                    />
                  )}
                  <div className="w-11 h-6 bg-red-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </td>
            </tr>
          </table>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
