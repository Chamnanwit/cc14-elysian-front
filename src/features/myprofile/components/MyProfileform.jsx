import { useState } from "react";
import Modal from "../../../components/Modal";
import InputForm from "../../../components/InputForm";
import InputErrorMessage from "../../../components/InputErrorMessage";
import {
  profileAgncyAsync,
  updateprofileAgncyAsync,
} from "../slice/myProfile-slice";
import { useDispatch, useSelector } from "react-redux";
import validateMyProfile from "../validators/myprofileValidate";
import ButtonYellowM from "../../../components/ButtonYellowM";

export default function MyProfileForm({ oldProfile }) {
  const initialInput = {
    firstName: oldProfile?.firstName || "",
    lastName: oldProfile?.lastName || "",
    profileimg: oldProfile?.profileImage || "",
  };

  const [isEditMode, setIsEditMode] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // const result = await
      const formData = new FormData();
      formData.append("profileimg", input);
      await dispatch(
        updateprofileAgncyAsync({ id: oldProfile.id, ...input })
      ).unwrap();

      await dispatch(profileAgncyAsync());
    } catch (err) {
      console.log("Error in register", err);
    }
  };
  // console.log("inProfile form", oldProfile);

  return (
    <>
      <div className="col-lg-9 col-md-8 col-12 mt-8">
        <div className="p-4 border-radius-4">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <div className="w-[345px] h-[370px]">
                <img
                  src="https://datacraft.app/uploads/custom-images/john-doe-2023-05-07-12-57-43-3520.jpg"
                  alt="agent"
                />
              </div>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <div className="mt-[30px]">
                <h3 className="text-xl m-0 font-semibold">
                  {oldProfile?.firstName}
                  {oldProfile?.lastName}
                </h3>
                <p>Real Estate Broker</p>
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-15 flex-wrap mt-4">
                <li className="flex items-center gap">
                  <img
                    src="https://datacraft.app/frontend/img/agent-phone.svg"
                    alt="phone"
                    className="mr-2"
                  />
                  {oldProfile?.phoneNumber}
                </li>
                <li className="flex items-center">
                  <img
                    src="https://datacraft.app/frontend/img/agent-email.svg"
                    alt="email"
                    className="mr-2"
                  />
                  <a href="#">{oldProfile?.email}</a>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://datacraft.app/frontend/img/agent-location.svg"
                    alt="location"
                    className="mr-2"
                  />
                  Los Angeles, CA, USA
                </li>
              </ul>
              <ul className="relative opacity-100 visible flex flex-row top-0 left-0 mt-[25px] gap-4">
                <li>
                  <a href="https://www.linkedin.com">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="top-0 m-0 p-0 mt-[30px]">
          <div className=" p-4 border-radius-4 overflow-hidden"></div>
        </div>
        <div className="row mt-8">
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
                      <InputErrorMessage message={error.name} />
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
                      <InputErrorMessage message={error.name} />
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
                      value={oldProfile?.phoneNumber}
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
                      value={oldProfile?.email}
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
                    <label
                      for="dropzone-file"
                      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          class="w-10 h-10 mb-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </td>
                </tr>
                <ButtonYellowM type="submit">ยืนยัน</ButtonYellowM>
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
