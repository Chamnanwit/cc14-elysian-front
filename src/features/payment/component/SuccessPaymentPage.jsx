import React from "react";
import { useEffect } from "react";
// import * as agencyService from "../../../api/agency-api";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPaymentAsync } from "../slice/payment-slice";
import Navbar from "../../../layouts/Navbar";
import Footer from "../../../layouts/Footer";
import ButtonYellowM from "../../../components/ButtonYellowM";
import { Link } from "react-router-dom";

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
    };
    listenSuccessSession();
  }, []);

  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col max-w-[1440px] m-auto">
      <div className="h-screen">
        <Navbar />
        {/* <div className="bg-slate-500 h"></div> */}
        <div className=" bg-[url('/src/assets/pic/cover1.jpg')]  h-full w-full flex flex-col items-center justify-center bg-cover">
          <div className=" w-[35%] h-fit flex flex-col items-center gap-7 p-10 -mt-20 rounded-xl bg-c-white1 bg-opacity-50 backdrop-blur-sm">
            <p className=" text-lg text-c-gray3 font-semibold">
              SuccessPaymentPage
            </p>
            <Link to={`/`}>
              <ButtonYellowM>กลับสู่หน้าหลัก</ButtonYellowM>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
