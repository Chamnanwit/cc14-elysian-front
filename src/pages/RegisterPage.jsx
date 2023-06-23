import { useAuth0 } from "@auth0/auth0-react";
import ButtonYellowM from "../components/ButtonYellowM";
import InputBar from "../components/InputBar";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { useState } from "react";
import { register } from "../api/auth-api";
import validateRegistration from "../validators/validate";
import InputErrorMessage from "../components/InputErrorMessage";

export default function RegisterPage() {
  const { user, isAuthenticated } = useAuth0();
  const [error, setErrors] = useState({});
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    taxId: "",
    email: "",
    profileImage: "",
    confirmPassword: "",
    locked: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      phoneNumber,
      taxId,
      profileImage,
      password,
      locked,
    } = input;
    const validationErrors = validateRegistration(input);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    register({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      taxId: taxId,
      email: user.email,
      profileImage: profileImage,
      password: password,
      confirmPassword: password,
      locked: locked,
    })
      .then((rs) => {
        console.log(rs);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <Navbar />
      <div className="bg-[url('/src/assets/pic/headerbg.jpg')] h-[790px] w-full flex flex-col text-center items-center py-5 transition-all duration-200">
        <form
          className="mt-auto w-[35%] h-fit flex flex-col text-center items-center gap-5 p-10 rounded-xl bg-c-white1 opacity-90"
          onSubmit={hdlSubmit}
        >
          <p className="text-lg font-semibold text-c-white1">
            กรอกข้อมูลเพื่อยืนยันตัวตน
          </p>
          {isAuthenticated && (
            <>
              <InputBar
                value={input.firstName}
                name="firstName"
                onChange={hdlChangeInput}
                isInvalid={error.firstName}
              >
                ชื่อ
              </InputBar>
              {error.firstName && (
                <InputErrorMessage message={error.firstName} />
              )}
              <InputBar
                value={input.lastName}
                name="lastName"
                onChange={hdlChangeInput}
                isInvalid={error.lastName}
              >
                นามสกุล
              </InputBar>
              {error.lastName && <InputErrorMessage message={error.lastName} />}
              <InputBar
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={hdlChangeInput}
                isInvalid={error.phoneNumber}
              >
                เบอร์โทรศัพท์
              </InputBar>
              {error.phoneNumber && (
                <InputErrorMessage message={error.phoneNumber} />
              )}
              <InputBar type="text" value={user.email} name="email"></InputBar>
              <InputBar
                value={input.taxId}
                name="taxId"
                onChange={hdlChangeInput}
                isInvalid={error.taxId}
              >
                เลขประจำตัวผู้เสียภาษี
              </InputBar>
              {error.taxId && <InputErrorMessage message={error.taxId} />}
              <input
                className="hidden"
                value={(input.password = "123456")}
                name="password"
              />
              <input
                className="hidden"
                value={(input.confirmPassword = "123456")}
                name="confirmPassword"
              />
              <input
                className="hidden"
                value={(input.profileImage = "123456")}
                name="profileImage"
              />
              <input
                className="hidden"
                value={(input.locked = true)}
                name="locked"
              />
            </>
          )}
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">
                    คลิ๊กเพื่อเพิ่มรูปภาพโปรไฟล์
                  </span>{" "}
                  หรือลากและวาง
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <ButtonYellowM type="submit">ยืนยัน</ButtonYellowM>
        </form>
      </div>
      <Footer />
    </div>
  );
}
