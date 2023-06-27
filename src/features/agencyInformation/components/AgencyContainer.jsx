import React from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import AgentItem from "./AgentItem";
import InputForm from "../../../components/InputForm";
import AgencyProfile from "./AgencyProfile";
import { useDispatch, useSelector } from "react-redux";
import { agentAsync } from "../slice/adminviewagency-slice";
import { useEffect } from "react";

export default function AgencyContainer() {
  
  const dispatch = useDispatch()
  const searchValue = useSelector((state) => state?.adminViewAgent?.searchValue);
  useEffect(() => {
    dispatch(agentAsync());
  }, []);

  const handleChange = (e) => {
    // dispatch(setSearchValueRedux(e.target.value))
  };
  const agentArr = useSelector((state) => state?.adminViewAgent?.agentList);

  return (
    <>
      <HeaderAdmin topic="Agent List" />
      <div className="bg-white rounded-md m-8 px-8 pt-6 pb-8 mt-0">
        <div className="flex items-baseline gap-4 justify-end mb-6">
          <div>ค้นหา:</div>
          <div className="100px text-md">
            <InputForm 
              type='text'
              className='header__search__input'
              placeholder='ชื่อ/อีเมล'
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
                  ชื่อ-นามสกุล
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
              {agentArr.map((el) => (
                <>
                  <AgentItem key={el.id} el={el} />
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
