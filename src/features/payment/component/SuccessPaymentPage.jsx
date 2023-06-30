import React from "react";
import { useEffect } from "react";
// import * as agencyService from "../../../api/agency-api";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPaymentAsync } from "../slice/payment-slice"

export default function SuccessPaymentPage() {
    const dispatch = useDispatch();
    const [search] = useSearchParams();
    const idSession = search.get("session_id");

    // console.log(idSession);

//   const dataPayment = async () => {
//     const res = await agencyService.createPaymentData();
//     console.log("--------success---------", res);
//   };

  useEffect(() => {
    const listenSuccessSession = async () => {
        const res = await dispatch(createPaymentAsync(idSession)).unwrap();
        // console.log(res);
        // const res = await createPayment();
        // console.log(res);
    }
    listenSuccessSession()
  }, []);

  return <div>SuccessPaymentPage</div>;
}
