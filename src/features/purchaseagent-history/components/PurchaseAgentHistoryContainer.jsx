import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  purchaseAgentHistoryAsync,
  purchaseHistoryAsync,
  searchPurchaseHistoryAsync,
  setSearchValueRedux,
} from "../../purchase-history/slice/purchase-slice";
import Loading from "../../../components/Loading";
import { useEffect } from "react";
import HeaderAgent from "../../../components/HeaderAgent";
import PurchaseAgentHistoryItem from "./PurchaseAgentHistoryItem";
import { useParams } from "react-router-dom";

export default function PurchaseAgentHistoryContainer() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const isLoading = useSelector((state) => state?.purchaseHistory?.isLoading);

  // useEffect(() => {
  //   dispatch(purchaseAgentHistoryAsync(id));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(purchaseAgentHistoryAsync(id)).unwrap();
    };
    fetchData();
  }, [id]);

  const purchaseAgent = useSelector(
    (state) => state?.purchaseHistory?.purchaseAgent
  );
  console.log("purchaseAgent--->", purchaseAgent);
  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     dispatch(searchPurchaseHistoryAsync(searchValue));
  //   }, 1000);

  //   return () => {
  //     clearTimeout(id);
  //   };
  // }, [searchValue]);

  // const handleChange = (e) => {
  //   dispatch(setSearchValueRedux(e.target.value));
  // };

  const historyArr = useSelector(
    (state) => state?.purchaseHistory?.purchaseFilter
  );

  // console.log(historyArr);

  const pricingPlanType = [
    { id: 1, type: "FREE" },
    { id: 2, type: "GOLD" },
    { id: 3, type: "PREMIUM" },
  ];

  const expirationType = [
    { id: 1, type: "WEEKLY", thaiType: "รายสัปดาห์" },
    { id: 2, type: "MONTHLY", thaiType: "รายเดือน" },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderAgent topic="ประวัติการซื้อ" />
      <div className="bg-white rounded-md m-8 px-8 py-8 mt-0">
        {/* <div className="flex items-baseline gap-4 justify-end mb-6">
          <div>ค้นหา:</div>
          <div className="100px text-md">
            <InputForm
              type="text"
              className="header__search__input"
              placeholder="ชื่อ/นามสกุล"
              onChange={handleChange}
              value={searchValue}
            />
          </div>
        </div> */}
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg text-lg">
          <table class="w-full text-left text-gray-500 dark:text-gray-400">
            <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {/* <th scope="col" class="px-6 py-5">
                  ที่
                </th> */}
                {/* <th scope="col" class="px-3 py-5">
                  ผู้ปล่อยเช่า
                </th> */}
                <th scope="col" class="px-3 py-5">
                  แพ็คเกจ
                </th>
                <th scope="col" class="px-3 py-5">
                  ราคา
                </th>
                <th scope="col" class="px-3 py-5">
                  ระยะเวลา
                </th>
                <th scope="col" class="px-3 py-5">
                  การจ่ายเงิน
                </th>
                <th scope="col" class="px-3 py-5">
                  สถานะแพ็คเกจ
                </th>
                <th scope="col" class="px-3 py-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {historyArr.map((el) => (
                <PurchaseAgentHistoryItem key={el.id} el={el} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
