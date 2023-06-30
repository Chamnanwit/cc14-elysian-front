import ButtonYellowM from "../components/ButtonYellowM";
import InputBar from "../components/InputBar";
import InputErrorMessage from "../components/InputErrorMessage";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import React, { useState } from "react";
// import OtpInput from "react-otp-input";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import {
  requestOtpAsync,
  verifyPlanAsync,
} from "../features/agencyotp/slice/agencyotp-slice";
// import { useEffect, useState } from "react";

export default function PhoneNumberPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate(); // ใช้เพื่อ forward ไป หน้าที่ต้องการ

  const dispatch = useDispatch(); /// ประกาศเพื่อดึงค่ามาใช้

  const hdlChangeInput = (e) => {
    setPhoneNumber({ ...phoneNumber, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log("Check otp ", phoneNumber);
      await dispatch(requestOtpAsync(phoneNumber)).unwrap();

      window.my_modal_3.showModal();
    } catch (err) {
      console.log("Error to send", err);
    }
  };

  const hdlSubmitOtp = async (e) => {
    try {
      e.preventDefault();
      // console.log("Check otp ", otp);
      const input = { phoneNumber: phoneNumber.phoneNumber, code: otp };
      await dispatch(verifyPlanAsync(input)).unwrap();
      await dispatch(fetchMe()).unwrap();
      navigate("/agent");
      console.log("verlifile success");
    } catch (err) {
      console.log("Error to send", err);
    }
  };

  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div className="h-screen">
        <Navbar />
        <div className=" bg-[url('/src/assets/pic/cover1.jpg')]  h-full w-full flex flex-col text-center items-center justify-center bg-cover">
          <form className=" w-[35%] h-fit flex flex-col text-center items-center gap-5 p-10 rounded-xl bg-c-white1 bg-opacity-50 backdrop-blur-sm">
            <p className=" text-lg text-c-gray3 font-semibold">
              ยืนยันตัวตนด้วยหมายเลขโทรศัพท์
            </p>
            <InputBar
              value={phoneNumber.phoneNumber}
              name="phoneNumber"
              onChange={hdlChangeInput}
            >
              ex.081xxxxxxx
            </InputBar>
            <button
              className=" w-fit px-7 py-2 rounded-full bg-c-yellow1 font-semibold transition-all hover:bg-c-yellow2 hover:scale-105 active:scale-95 active:bg-c-yellow3"
              onClick={hdlSubmit}
              // window.my_modal_3.showModal()
            >
              ขอรหัส OTP
            </button>
          </form>

          <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-c-gray3 dark:text-white">
                  กรอก OTP
                </h3>
                <div className="flex flex-col justify-center gap-5 items-center ">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    inputStyle={
                      " text-4xl font-thin w-fit h-fit text-c-gray3 border border-4 h-10 rounded-lg w-[50px] mx-2"
                    }
                    renderSeparator={<span> </span>}
                    inputType={"text"}
                    renderInput={(props) => <input {...props} />}
                  />

                  <InputErrorMessage message="testest" />

                  <ButtonYellowM onClick={hdlSubmitOtp} type="submit">
                    ยืนยัน
                  </ButtonYellowM>
                  <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    หากยังไม่ได้ข้อความ{" "}
                    <a
                      href="#"
                      class="text-blue-700 hover:underline dark:text-blue-500"
                    >
                      ขอรหัสอีกครั้ง
                    </a>
                  </div>
                </div>

                <form class="space-y-6" action="#"></form>
              </div>
            </form>
          </dialog>

          {/* Open the modal using ID.showModal() method */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
