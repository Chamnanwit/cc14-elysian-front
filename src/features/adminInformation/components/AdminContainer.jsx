import React from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import InputForm from "../../../components/InputForm";
import AdminItem from "./AdminItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  adminInformationAsync,
  searchAdminInformationAsync,
  setSearchValueRedux,
} from "../slice/admin-slice";
import AdminForm from "./AdminForm";
import Loading from "../../../components/Loading";

export default function AdminContainer() {
  const [isAddMode, setIsAddMode] = useState(false);
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state) => state?.adminInformation?.searchValue
  );
  const isLoading = useSelector((state) => state?.adminInformation?.isLoading);

  useEffect(() => {
    dispatch(adminInformationAsync());
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(searchAdminInformationAsync(searchValue));
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

  const adminInformationArr = useSelector(
    (state) => state?.adminInformation?.adminInformationFilter
  );
  
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderAdmin topic="Admin List" />
      {isAddMode? (
        <div className="m-8 mt-0">
          <AdminForm
            textConFirm={`Add`} 
            onIsAddMode={setIsAddMode}
          />
        </div>
      ) : (
        <button
          type="button"
          className="mx-8 p-2 min-w-[80px] mb-8 text-white bg-blue-600 rounded-sm w-fit"
          onClick={() => setIsAddMode(true)}
        >
          เพิ่ม
        </button>
      )}
      <div className="bg-white rounded-md m-8 px-8 pt-6 pb-8 mt-0">
        <div className="flex items-baseline gap-4 justify-end mb-6">
          <div>ค้นหา:</div>
          <div className="100px text-md">
            <InputForm
              type="text"
              className="header__search__input"
              placeholder="ชื่อ/อีเมล"
              onChange={handleChange}
              value={searchValue}
            />
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
                  ชื่อ-สกุล
                </th>
                <th scope="col" class="px-6 py-5">
                  อีเมล
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
              {adminInformationArr.map((el) => (
                <AdminItem key={el.id} el={el} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
