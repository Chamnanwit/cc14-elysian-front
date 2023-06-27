import React from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import InputForm from "../../../components/InputForm";
import AdminItem from "./AdminItem";

export default function AdminContainer({data}) {



  return (
    <>
      <HeaderAdmin topic="Admin List" />
      <div className="bg-white rounded-md m-8 px-8 pt-6 pb-8 mt-0">
        <div className="flex items-baseline gap-4 justify-end mb-6">
          <div>Search:</div>
          <div className="100px text-md"><InputForm /></div>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg text-lg">
          <table class="w-full text-left text-gray-500 dark:text-gray-400">
            <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-5">
                  SN
                </th>
                <th scope="col" class="px-6 py-5">
                  Name
                </th>
                <th scope="col" class="px-6 py-5">
                  Email
                </th>
                <th scope="col" class="px-6 py-5">
                  Status
                </th>
                <th scope="col" class="px-6 py-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((el) => (
                <AdminItem key={el.id} el={el} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}