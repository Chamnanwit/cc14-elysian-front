import React from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import InputForm from "../../../components/InputForm";
import AdminItem from "./AdminItem";
import { useState } from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  adminInformationAsync,
  searchAdminInformationAsync,
  setSearchValueRedux,
} from "../slice/admin-slice";

export default function AdminContainer() {
  // const [isAddMode, setIsAddMode] = useState(false);
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state) => state?.adminInformation?.searchValue
  );

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

  return (
    <>
      <HeaderAdmin topic="Admin List" />
=======
import { useDispatch } from "react-redux";
import AdminForm from "./AdminForm";

export default function AdminContainer({ data }) {
  const [isAddMode, setIsAddMode] = useState(false);
  const dispatch = useDispatch();
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

>>>>>>> 3576d8445a0dab8bf5876a67ca107502f2df6554
      <div className="bg-white rounded-md m-8 px-8 pt-6 pb-8 mt-0">
        <div className="flex items-baseline gap-4 justify-end mb-6">
          <div>ค้นหา:</div>
          <div className="100px text-md">
<<<<<<< HEAD
            <InputForm
              type="text"
              className="header__search__input"
              placeholder=""
              onChange={handleChange}
              value={searchValue}
            />
=======
            <InputForm />
>>>>>>> 3576d8445a0dab8bf5876a67ca107502f2df6554
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
                  ชื่อ
                </th>
                <th scope="col" class="px-6 py-5">
<<<<<<< HEAD
                  อีเมล
=======
                  Email
>>>>>>> 3576d8445a0dab8bf5876a67ca107502f2df6554
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
<<<<<<< HEAD
              {adminInformationArr.map((el) => (
=======
              {data.map((el) => (
>>>>>>> 3576d8445a0dab8bf5876a67ca107502f2df6554
                <AdminItem key={el.id} el={el} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
