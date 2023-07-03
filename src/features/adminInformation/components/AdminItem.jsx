import React, { useState, useEffect } from "react";
import { TrashIcon } from "../../../icons";
import { HiEye } from "react-icons/hi";
import Modal from "../../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  adminInformationAsync,
  deleteAdminInformationAsync,
  updateAdminInformationAsync,
} from "../slice/admin-slice";
import ModalDeleteBox from "../../../components/ModalDelete";

export default function AdminItem({ el }) {
  const dispatch = useDispatch();
  const [isViewMode, setIsViewMode] = useState(false);
  const [clickDeleteBox, setClickDeleteBox] = useState(false);
  const [status, setStatus] = useState(el.locked);

  const handleClickChangeStatus = async (e) => {
    await dispatch(
      updateAdminInformationAsync({ id: el.id, locked: !status })
    ).unwrap();
    await dispatch(adminInformationAsync()).unwrap();
    setStatus(!status);
  };

  const user = useSelector((state) => state.auth.user);
  const handleClickDeleteBox = async () => {
    await dispatch(deleteAdminInformationAsync(el.id)).unwrap();
    await dispatch(adminInformationAsync()).unwrap();
  };

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {el.id}
        </th>
        <td className="px-6 py-4">
          {el.firstName} {el.lastName}
        </td>
        <td className="px-6 py-4">{el.email}</td>
        <td className="px-6 py-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={status}
              className="sr-only peer"
              checked={!status}
              onChange={handleClickChangeStatus}
            />
            <div className="w-11 h-6 bg-red-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          </label>
        </td>

        <td className="px-6 py-4 flex gap-3">
          <div
            className="bg-blue-700 p-[7px] rounded-md cursor-pointer flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              setIsViewMode(true);
            }}
          >
            <HiEye fill="#ffffff" />
          </div>
          {el.id != user.id ? (
            <div
              className="bg-red-700 p-[5px] rounded-md cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setClickDeleteBox(true);
              }}
            >
              <TrashIcon />
            </div>
          ) : (
            <></>
          )}
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
              <td className="w-1/2 p-3 border-b"> {el.phoneNumber}</td>
            </tr>
            <tr>
              <td className="w-1/2 px-3 py-2 border-b border-r">บัตรประชาชน</td>
              <td className="w-1/2 p-3 border-b"> {el.taxId}</td>
            </tr>
            <tr>
              <td className="w-1/2 px-3 py-2 border-b border-r">สถานะ</td>
              <td className="w-1/2 p-3 border-b">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value={status}
                    className="sr-only peer"
                    checked={status}
                    onChange={handleClickChangeStatus}
                  />
                  <div className="w-11 h-6 bg-red-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </td>
            </tr>
          </table>
        </Modal>
      ) : (
        <></>
      )}
      {clickDeleteBox ? (
        <ModalDeleteBox
          open={clickDeleteBox}
          onClose={() => setClickDeleteBox(false)}
        >
          <div className="flex flex-col gap-8">
            <div className="text-center">คุณแน่ใจว่าจะลบใช่หรือไม่</div>
            <div className="flex justify-between gap-6">
              <div
                className="bg-black text-white px-4 py-[6px] rounded-md w-full flex justify-center cursor-pointer"
                onClick={handleClickDeleteBox}
              >
                ตกลง
              </div>
              <div
                className="bg-black text-white px-4 py-[6px] rounded-md w-full flex justify-center cursor-pointer"
                onClick={() => setClickDeleteBox(false)}
              >
                ยกเลิก
              </div>
            </div>
          </div>
        </ModalDeleteBox>
      ) : (
        <></>
      )}
    </>
  );
}
