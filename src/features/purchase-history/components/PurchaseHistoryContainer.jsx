import React from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import PurchaseHistoryItem from "./PurchaseHistoryItem";
import InputForm from "../../../components/InputForm";

export default function PurchaseHistoryContainer() {
  const data = [
    {
      id: 1,
      agent: "July",
      planName: "Premium",
      price: "99.99",
      expiration: "monthly",
      payment: 1,
      orderStatus: 1,
    },
    {
      id: 2,
      agent: "John",
      planName: "Gold",
      price: "49.99",
      expiration: "yearly",
      payment: 0,
      orderStatus: 0,
    },
    {
        id: 3,
        agent: "June",
        planName: "Gold",
        price: "49.99",
        expiration: "monthly",
        payment: 1,
        orderStatus: 1,
      },
  ];
  return (
    <>
      <HeaderAdmin topic="Purchase history" />
      <div className="bg-white rounded-md m-8 px-8 py-8 mt-0">
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
                <th scope="col" class="px-3 py-5">
                  Agent
                </th>
                <th scope="col" class="px-3 py-5">
                  Plan Name
                </th>
                <th scope="col" class="px-3 py-5">
                  Price
                </th>
                <th scope="col" class="px-3 py-5">
                  Expiration
                </th>
                <th scope="col" class="px-3 py-5">
                  Payment
                </th>
                <th scope="col" class="px-3 py-5">
                  Order Status
                </th>
                <th scope="col" class="px-3 py-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              { data.map( el => <PurchaseHistoryItem key={el.id} el={el}/>)}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
