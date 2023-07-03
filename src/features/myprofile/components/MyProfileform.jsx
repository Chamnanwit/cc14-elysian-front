import { useState } from "react";
import Modal from "../../../components/Modal";
import InputForm from "../../../components/InputForm";
import InputErrorMessage from "../../../components/InputErrorMessage";
import {
  profileAgncyAsync,
  updateprofileAgncyAsync,
} from "../slice/myProfile-slice";
import defaultImage from '../../../assets/blank.png';
import { useDispatch, useSelector } from "react-redux";
import validateMyProfile from "../validators/myprofileValidate";
import ButtonYellowM from "../../../components/ButtonYellowM";
import * as profileAgncyService from "../../../api/agency-api";
import PictureForm from "./PictureForm";
import Avatar from "./Avatar";

import { useCallback } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { fetchMe } from "../../auth/slice/authSlice";
import validateAgentProfile from "../validators/myprofileValidate";
import { useRef } from "react";

export default function MyProfileForm() {
  const user = useSelector((state) => state?.auth?.user);
  const initialInput = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    profileImage: "",
  };

  const inputEl = useRef();
  const [file, setFile] = useState(null);

  const initialImage = user?.profileImage || defaultImage;
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleChangeImage = (e) => {
    setInput({ ...input, [e.target.name]: e.target.files[0] });
  };

  console.log(error);
  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = validateAgentProfile(input);
      if (result) {
        return setError(result);
      }
      setError({});
      const formData = new FormData();
      if (input.profileImage) formData.append("profileImage", input.profileImage);
      formData.append("id", user.id);
      formData.append("firstName", input.firstName);
      formData.append("lastName", input.lastName);
      console.log("dddddd", formData)
      setIsLoading(true);
      await dispatch(updateprofileAgncyAsync(formData)).unwrap();
      await dispatch(fetchMe()).unwrap();
      setIsEditMode(false);
    } catch (err) {
      console.log("Error in register", err);
    }
  };

  return (
    <>
      <div className="col-lg-9 col-md-8 col-12 mt-4 mx-28">
        <div className="p-4 border-radius-4">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <div className="w-[345px] h-[340px] border">
                <img src={initialImage} alt="agent" />
              </div>
            </div>
            <div className="ml-16 md:w-1/2 mt-4 md:mt-0 flex flex-col justify-between">
              <div>
                <div className="mt-[30px]">
                  <h3 className="text-xl my-2 font-semibold">
                    {user?.firstName} {user?.lastName}
                  </h3>
                  <p>Real Estate Broker</p>
                </div>
                <ul className="list-none p-0 m-0 flex flex-col gap-1 flex-wrap mt-4">
                  <li className="flex items-center gap">
                    <img
                      src="https://datacraft.app/frontend/img/agent-phone.svg"
                      alt="phone"
                      className="mr-2"
                    />
                    {user?.phoneNumber}
                  </li>
                  <li className="flex items-center">
                    <img
                      src="https://datacraft.app/frontend/img/agent-email.svg"
                      alt="email"
                      className="mr-2"
                    />
                    <div>{user?.email}</div>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-12 flex justify-end">
                  <button
                    data-modal-target="authentication-modal"
                    data-modal-toggle="authentication-modal"
                    class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEditMode(true);
                    }}
                  >
                    Edit profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isEditMode ? (
        <>
          <form onSubmit={hdlSubmit}>
            <Modal
              title="Edit profile"
              width="50"
              open={isEditMode}
              onClose={() => setIsEditMode(false)}
            >
              <table className="border w-full border-collapse">
                <tr>
                  <td className="w-1/2 px-3 py-2 border-b border-r">ชื่อ</td>
                  <td className="w-1/2 p-3 border-b">
                    <InputForm
                      name="firstName"
                      value={input.firstName}
                      onChange={handleChangeInput}
                      isInvalid={error.firstName}
                    />
                    {error.firstName && (
                      <InputErrorMessage message={error.firstName} />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="w-1/2 px-3 py-2 border-b border-r">นามสกุล</td>
                  <td className="w-1/2 p-3 border-b">
                    <InputForm
                      name="lastName"
                      value={input.lastName}
                      onChange={handleChangeInput}
                      isInvalid={error.lastName}
                    />
                    {error.lastName && (
                      <InputErrorMessage message={error.lastName} />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="w-1/2 px-3 py-2 border-b border-r">
                    เบอร์โทรศัพท์
                  </td>
                  <td className="w-1/2 p-3 border-b">
                    <InputForm
                      name="phonenumber"
                      value={user?.phoneNumber}
                      isInvalid={error.phonenumber}
                      disabled={true}
                    />
                    {error.phonenumber && (
                      <InputErrorMessage message={error.phonenumber} />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="w-1/2 px-3 py-2 border-b border-r">อีเมล</td>
                  <td className="w-1/2 p-3 border-b">
                    <InputForm
                      name="email"
                      value={user?.email}
                      isInvalid={error.email}
                      disabled={true}
                    />
                    {error.email && <InputErrorMessage message={error.email} />}
                  </td>
                </tr>
                <tr>
                  <td className="w-1/2 px-3 py-2 border-b border-r">
                    รูปโปรไฟล์
                  </td>                 
                  <td className="w-1/2 p-3 border-b">
                    <div>
                      <input
                        type="file"
                        className="hidden"
                        name="profileImage"
                        ref={inputEl}
                        onChange={(e) => {
                          if (e.target.files[0]) {
                            handleChangeImage(e);
                          }
                        }}
                      />
                     
                    </div>
                    <div className="flex justify-end" onClick={() => inputEl.current.click()}>
                      <img src={input.profileImage ? URL.createObjectURL(input.profileImage) : initialImage} />
                    </div>
                  </td>
                  

                </tr>
                
                  
                
                <tr>
                  <td colSpan={2}>
                    <div className="flex justify-end p-6">
                      <ButtonYellowM type="submit">ยืนยัน</ButtonYellowM>
                    </div>
                  </td>
                </tr>
              </table>
            </Modal>
          </form>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
