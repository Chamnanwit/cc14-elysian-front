import React from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import InputForm from "../../../components/InputForm";
import AnimityItem from "./AnimityItem";
import { useState } from "react";
import AnimityForm from "./AnimityForm";
import {
  animityAsync,
  searchAnimityCommonAsync,
  searchAnimityRoomAsync,
  setSearchValueCommon,
  setSearchValueRoom,
} from "../slice/aminity-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function AnimityContainer() {
  const [isAddModeROOM, setIsAddModeROOM] = useState(false);
  const [isAddModeCOMMON, setIsAddModeCOMMON] = useState(false);

  const dispatch = useDispatch();
  const searchValueR = useSelector((state) => state?.animity?.searchValueRoom);
  const searchValueC = useSelector(
    (state) => state?.animity?.searchValueCommon
  );

  useEffect(() => {
    dispatch(animityAsync());
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(searchAnimityRoomAsync(searchValueR));
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [searchValueR]);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(searchAnimityCommonAsync(searchValueC));
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [searchValueC]);

  const handleChangeValueR = (e) => {
    dispatch(setSearchValueRoom(e.target.value));
  };

  const handleChangeValueC = (e) => {
    dispatch(setSearchValueCommon(e.target.value));
  };

  const animityRoomArrSearch = useSelector(
    (state) => state?.animity?.animityRoomFilter
  );
  const animityCommonArrSearch = useSelector(
    (state) => state?.animity?.animityCommonFilter
  );

  return (
    <>
      <HeaderAdmin topic="สิ่งอำนวยความสะดวก" />
      <div className="bg-white rounded-md m-8 px-8 pt-6 pb-8 mt-0">
        <div className="flex items-baseline gap-4 justify-between mb-6">
          <div className="underline">ภายในห้อง</div>
          <div className="flex items-baseline gap-4">
            <div>ค้นหา:</div>
            <div className="100px text-md">
              <InputForm
                type="text"
                className="header__search__input"
                placeholder="ชื่อสิ่งอำนวยความสะดวก"
                onChange={handleChangeValueR}
                value={searchValueR}
              />
            </div>
          </div>
        </div>
        {isAddModeROOM ? (
          <div>
            <AnimityForm
              textConFirm={`Add`}
              onIsAddMode={setIsAddModeROOM}
              type="ROOM"
            />
          </div>
        ) : (
          <button
            type="button"
            className="p-2 min-w-[80px] mb-8 text-white bg-blue-600 rounded-md w-fit"
            onClick={() => setIsAddModeROOM(true)}
          >
            เพิ่ม
          </button>
        )}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-lg">
          <table className="w-full text-left text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-5 w-[200px]">
                  ลำดับที่
                </th>
                <th scope="col" className="px-6 py-5 w-[400px]">
                  สิ่งอำนวยความสะดวก
                </th>
                <th scope="col" className="px-6 py-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {animityRoomArrSearch.map((el) => (
                <AnimityItem key={el?.id} el={el} type="ROOM" />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white rounded-md m-8 px-8 pt-6 pb-8 mt-0">
        <div className="flex items-baseline gap-4 justify-between mb-6">
          <div className="underline">ส่วนกลาง</div>
          <div className="flex items-baseline gap-4">
            <div>ค้นหา:</div>
            <div className="100px text-md">
              <InputForm
                type="text"
                className="header__search__input"
                placeholder="ชื่อสิ่งอำนวยความสะดวก"
                onChange={handleChangeValueC}
                value={searchValueC}
              />
            </div>
          </div>
        </div>
        {isAddModeCOMMON ? (
          <div>
            <AnimityForm
              textConFirm={`Add`}
              onIsAddMode={setIsAddModeCOMMON}
              type="COMMON"
            />
          </div>
        ) : (
          <button
            type="button"
            className="p-2 min-w-[80px] mb-8 text-white bg-blue-600 rounded-md w-fit"
            onClick={() => setIsAddModeCOMMON(true)}
          >
            เพิ่ม
          </button>
        )}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-lg">
          <table className="w-full text-left text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-5 w-[200px]">
                  ลำดับที่
                </th>
                <th scope="col" className="px-6 py-5 w-[400px]">
                  สิ่งอำนวยความสะดวก
                </th>
                <th scope="col" className="px-6 py-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {animityCommonArrSearch.map((el) => (
                <AnimityItem key={el?.id} el={el} type="COMMON" />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
