import React from "react";
import { useEffect } from "react";
import * as agencyService from "../api/agency-api";
import { useSearchParams } from "react-router-dom";

export default function SuccessPaymentPage() {
    const [search] = useSearchParams();
    const idSession = search.get("session_id");
    console.log(idSession);

//   const dataPayment = async () => {
//     const res = await agencyService.createPaymentData();
//     console.log("--------success---------", res);
//   };

  useEffect(() => {
    const listenSuccessSession = async () => {
        const res = await agencyService.createPaymentData(idSession)
        // console.log(res);
        // const res = await createPayment();
        console.log(res);
    }
    listenSuccessSession()
  }, []);

  return <div>SuccessPaymentPage</div>;
}
