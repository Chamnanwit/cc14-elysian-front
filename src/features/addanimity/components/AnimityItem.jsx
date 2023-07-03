import React from "react";
import { EditIcon, TrashIcon } from "../../../icons";
import { useState } from "react";
import AnimityForm from "./AnimityForm";
import { useDispatch } from "react-redux";
import { animityAsync, deleteAnimityAsync } from "../slice/aminity-slice";
import ModalDeleteBox from "../../../components/ModalDelete";

export default function AnimityItem({ el, type }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [clickDeleteBox, setClickDeleteBox] = useState(false);
  const dispatch = useDispatch();
  const handleClickDeleteBox = async () => {
    await dispatch(deleteAnimityAsync(el.id));
    await dispatch(animityAsync());
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
        {!isEditMode ? (
          <>
            <td className="px-6 py-4">{el.name}</td>
            <td className="px-6 py-4 flex gap-3">
              <div
                className="bg-blue-700 p-[7px] rounded-md cursor-pointer flex items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditMode(true);
                }}
              >
                <EditIcon fill="#ffffff" />
              </div>
              <div
                className="bg-red-700 p-[5px] rounded-md cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setClickDeleteBox(true);
                }}
              >
                <TrashIcon />
              </div>
            </td>
          </>
        ) : (
          <AnimityForm
            textConFirm={`Edit`}
            onIsAddMode={setIsEditMode}
            oldAnimity={el}
            key={el?.id}
            type={type}
          />
        )}
      </tr>
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
