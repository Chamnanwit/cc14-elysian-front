import React from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import UserItem from "./UserItem";

export default function AgencyContainer() {
  const data = [
    {id: 1, name: "John", email: "j1@gmail.com", status: 1},
    {id: 2, name: "Jane", email: "j2@gmail.com", status: 1},
    {id: 3, name: "June", email: "j3@gmail.com", status: 0},
]
  return (
    <>
      <HeaderAdmin topic="User List" />
      <div className="bg-white rounded-md m-8 p-8 mt-0">
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
                <UserItem key={el.id} el={el} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
