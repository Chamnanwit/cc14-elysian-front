import React, { useState } from "react";
import { EditIcon, TrashIcon } from "../../../icons";
import PackageForm from "./PackageForm";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePricingPlanAsync,
  pricingPlanAsync,
  searchPricingPlanAsync,
} from "../slice/pricingPlan-slice";

export default function PackageItem({
  el,
  pricingPlanType,
  expirationType,
  lockedType,
}) {
  const searchValue = useSelector((state) => state?.pricingPlan?.searchValue);
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  const handleClickDeleteBox = async () => {
    await dispatch(deletePricingPlanAsync(el.id)).unwrap();
    await dispatch(pricingPlanAsync()).unwrap();
  };
  return (
    <>
      {!isEditMode ? (
        <>
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {el.id}
            </th>
            <td class="px-6 py-4">{el.name}</td>
            <td class="px-6 py-4">฿ {el.price}</td>
            <td class="px-6 py-4">
              {el.expiration === "WEEKLY" ? "รายสัปดาห์" : "รายเดือน"}
            </td>
            <td class="px-6 py-4 w-[180px]">
              {el.locked ? (
                <div className="border rounded-full bg-green-600 flex justify-center items-center text-white py-1 max-w-[100px]">
                  เปิดใช้งาน
                </div>
              ) : (
                <div className="border rounded-full bg-gray-500 flex justify-center items-center text-white py-1 max-w-[100px]">
                  ปิดใช้งาน
                </div>
              )}
            </td>
            <td class="px-6 py-4 flex gap-3">
              <div
                className="bg-blue-700 p-[5px] rounded-md cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditMode(true);
                }}
              >
                <EditIcon />
              </div>
              <div
                className="bg-red-700 p-[5px] rounded-md cursor-pointer"
                onClick={handleClickDeleteBox}
              >
                <TrashIcon />
              </div>
            </td>
          </tr>
        </>
      ) : (
        <>
          <tr>
            <td>
              <div className="mt-6 ml-6 bg-gray-300 w-[50px] flex justify-center">
                {el.id}
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="6">
              <PackageForm
                textConFirm={`Edit`}
                onIsAddMode={setIsEditMode}
                oldPackage={el}
                key={el.id}
                pricingPlanType={pricingPlanType}
                expirationType={expirationType}
                lockedType={lockedType}
              />
              <hr />
            </td>
          </tr>
        </>
      )}
    </>
  );
}
