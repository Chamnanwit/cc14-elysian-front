import React, { useState } from "react";
import PackageItem from "./PackageItem";
import PackageForm from "./PackageForm";
import HeaderAdmin from "../../../components/HeaderAdmin";
import InputForm from "../../../components/InputForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  pricingPlanAsync,
  searchPricingPlanAsync,
  setSearchValueRedux,
} from "../slice/pricingPlan-slice";
import Loading from "../../../components/Loading";

export default function PackageContainer() {
  const [isAddMode, setIsAddMode] = useState(false);
  // const [searchValue, setSearchValue] = useState("")
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state?.pricingPlan?.searchValue);

  useEffect(() => {
    dispatch(pricingPlanAsync());
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(searchPricingPlanAsync(searchValue));
    }, 1000);

    return () => {
      console.log("cleanup");
      clearTimeout(id);
    };
  }, [searchValue]);

  const handleChange = (e) => {
    // setSearchValue(e.target.value);
    dispatch(setSearchValueRedux(e.target.value));
  };

  const packageArrSearch = useSelector(
    (state) => state?.pricingPlan?.pricingPlanFilter
  );

  const packageArr = useSelector((state) => state?.pricingPlan?.pricingPlan);

  const pricingPlanType = [
    { id: 1, type: "FREE" },
    { id: 2, type: "GOLD" },
    { id: 3, type: "PREMIUM" },
  ];

  const expirationType = [
    { id: 1, type: "WEEKLY", thaiType: "รายสัปดาห์" },
    { id: 2, type: "MONTHLY", thaiType: "รายเดือน" },
  ];

  const lockedType = [
    { id: 1, type: true, thaiType: "เปิดใช้งาน" },
    { id: 2, type: false, thaiType: "ปิดใช้งาน" },
  ];

  return (
    <>
      <HeaderAdmin topic="แพ็คเกจ" />
      {isAddMode ? (
        <div className="m-8 mt-0">
          <PackageForm
            textConFirm={`Add`}
            onIsAddMode={setIsAddMode}
            pricingPlanType={pricingPlanType}
            expirationType={expirationType}
            lockedType={lockedType}
          />
        </div>
      ) : (
        <button
          type="button"
          className="mx-8 p-2 min-w-[80px] mb-8 text-white bg-blue-600 rounded-sm w-fit"
          onClick={() => setIsAddMode(true)}
        >
          + เพิ่ม
        </button>
      )}
      <div className="bg-white rounded-md m-8 px-8 pt-6 mt-0">
        <div className="flex items-baseline gap-4 justify-end mb-6">
          <div>ค้นหา:</div>
          <div className="100px text-md">
            <InputForm />
          </div>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg text-lg">
          <table class="w-full text-left text-gray-500 dark:text-gray-400">
            <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-5">
                  ลำดับที่
                </th>
                <th scope="col" class="px-6 py-5">
                  ชื่อแพ็คเกจ
                </th>
                <th scope="col" class="px-6 py-5">
                  ราคา
                </th>
                <th scope="col" class="px-6 py-5">
                  ระยะเวลา
                </th>
                <th scope="col" class="px-6 py-5">
                  สถานะ
                </th>
                <th scope="col" class="px-6 py-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {packageArr.map((el) => (
                <PackageItem
                  key={el.id}
                  el={el}
                  pricingPlanType={pricingPlanType}
                  expirationType={expirationType}
                  lockedType={lockedType}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
