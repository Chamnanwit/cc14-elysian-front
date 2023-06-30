import { useAuth0 } from "@auth0/auth0-react";
import ButtonYellowM from "../components/ButtonYellowM";
import InputBar from "../components/InputBar";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { useEffect, useState } from "react";
import validateRegistration from "../validators/validate-regis";
import InputErrorMessage from "../components/InputErrorMessage";
import { registerAsync } from "../features/auth/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";



export default function RegisterPage() {
  const { user, isAuthenticated } = useAuth0();
  
  const initialInput = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    // password: "123456",
    taxId: "",
    email: "",
    // profileImage: "",
    // confirmPassword: "123456",
  };
  const [error, setError] = useState({});
  const [input, setInput] = useState(initialInput);
  const navigate = useNavigate(); // ใช้เพื่อ forward ไป หน้าที่ต้องการ
  const dispatch = useDispatch();

  
  useEffect(() => {
    setInput((prevInput) => ({
      ...prevInput,
      email: user?.email || "",
    }));
  }, [user?.email]);

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log(input)
      // console.log(error)
      const result = validateRegistration(input);
      if (result) {
        console.log('error',result)
        return setError(result);
      }
      setError({});
      console.log(error)
      await dispatch(registerAsync({...input, locked: true})).unwrap();
      navigate("/");
    } catch (err) {
      console.log("Error in register", err);
    }
  };

  return (
    <>
      <div className="w-full bg-c-white1 h-auto flex flex-col justify-between max-w-[1440px] m-auto">
        <Navbar />
        <div className=" bg-[url('/src/assets/pic/cover1.jpg')]  h-fit w-full flex flex-col items-center py-16 bg-cover">
          <form
            className=" w-[35%] h-fit flex flex-col items-center gap-7 p-10 rounded-xl bg-c-white1 bg-opacity-50 backdrop-blur-sm"
            onSubmit={hdlSubmit}
          >
            <p className="text-lg font-semibold text-c-gray3">
              กรอกข้อมูลเพื่อยืนยันตัวตน
            </p>
            {isAuthenticated && (
              <>
              <div className="flex flex-col gap-[2px]">
                <InputBar
                  value={input.firstName}
                  name="firstName"
                  onChange={hdlChangeInput}
                  isInvalid={error.firstName}
                >
                  ชื่อ
                </InputBar>
                <div className='h-0 pl-5'>
                  {error.firstName && (
                    <InputErrorMessage message={error.firstName} />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-[2px]">
                <InputBar
                  value={input.lastName}
                  name="lastName"
                  onChange={hdlChangeInput}
                  isInvalid={error.lastName}
                >
                  นามสกุล
                </InputBar>
                <div className='h-0 pl-5'>
                  {error.lastName && (
                    <InputErrorMessage message={error.lastName} />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-[2px]">
                <InputBar
                  value={input.phoneNumber}
                  name="phoneNumber"
                  onChange={hdlChangeInput}
                  isInvalid={error.phoneNumber}
                >
                  เบอร์โทรศัพท์
                </InputBar>
                <div className='h-0 pl-5'>
                  {error.phoneNumber && (
                    <InputErrorMessage message={error.phoneNumber} />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-[2px]">
                <InputBar
                  type="text"
                  value={input.email}
                  name="email"
                  onChange={hdlChangeInput}
                  disabled={true}
                >
                </InputBar>
              </div>
                <div className="flex flex-col gap-[2px]">
                <InputBar
                  value={input.taxId}
                  name="taxId"
                  onChange={hdlChangeInput}
                  isInvalid={error.taxId}
                >
                  เลขประจำตัวผู้เสียภาษี
                </InputBar>
                <div className='h-0 pl-5'>
                  {error.taxId && <InputErrorMessage message={error.taxId} />}
                </div>
                </div>
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
                  value={input.profileImage}
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
    </>
  );
}
