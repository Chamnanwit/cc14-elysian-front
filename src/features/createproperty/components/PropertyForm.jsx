import React from "react";
import { useState } from "react";
import InputErrorMessage from "../../../components/InputErrorMessage";
import InputForm from "../../../components/InputForm";
import Checkbox from "./Checkbox";

export default function PropertyForm({
  textConFirm,
  onIsAddMode,
  oldProperty,
}) {
  const initialInput = {
    price: "1003.00",
    floor: "3",
    totalArea: "3",
    totalUnit: "300",
    totalBedroom: "3",
    totalBathroom: "3",
    totalKitchen: "3",
    description: "ccc",
    latitude: "333.33",
    longitude: "444.44",
    rentPeriod: "MONTHLY",
    locked: "YES",
    published: "YES",
    userId: "1",
    roomTypeId: "2",
    subDistrictId: "3",
  };

  const data = [
    { id: 1, name: "เครื่องปรับอากาศ", type: "ROOM" },
    { id: 2, name: "TV", type: "ROOM" },
    { id: 3, name: "ตู้เย็น", type: "ROOM" },
    { id: 4, name: "เครื่องทำน้ำอุ่น", type: "ROOM" },
    { id: 5, name: "เครื่องซักผ้า", type: "ROOM" },
    { id: 6, name: "สระว่ายน้ำ", type: "COMMON" },
    { id: 7, name: "ฟิตเนส", type: "COMMON" },
    { id: 8, name: "สวน", type: "COMMON" },
    { id: 9, name: "ครัว", type: "COMMON" },
    { id: 10, name: "Co-working Space", type: "COMMON" },
  ];

  const dataRoom = data.filter((el) => el.type === "ROOM");
  const dataCommon = data.filter((el) => el.type === "COMMON");

  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const propertyType = [
    { id: 1, name: "สตูดิโอ" },
    { id: 2, name: "ห้องเพดานสูง" },
    { id: 3, name: "ห้องคู่" },
    { id: 4, name: "เพนท์เฮ้าส์" },
    { id: 5, name: "วิลล่า" },
  ];

  const period = [
    { id: 1, thaiName: "รายวัน", engName: "DAILY" },
    { id: 2, thaiName: "รายเดือน", engName: "MONTHLY" },
    { id: 3, thaiName: "รายปี", engName: "YEARLY" },
  ];
  return (
    <form className="flex flex-col gap-8">
      <div className="rounded-md overflow-hidden flex flex-col">
        <div className="bg-c-blue3 text-white text-xl py-4 px-6">
          ข้อมูลพื้นฐาน
        </div>
        <div className=" bg-white px-6 py-4">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="roomTypeId"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                ประเภทที่พัก
              </label>
              <select
                id="roomTypeId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="roomTypeId"
              >
                <option disabled selected value>
                  เลือกประเภทที่พัก
                </option>
                {propertyType.map((el) => (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                ))}
              </select>
              <div className="h-0 pb-2">
                {error.type && <InputErrorMessage message={error.type} />}
              </div>
            </div>
            <div>
              <label
                htmlFor="rentPeriod"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                ระยะเวลา
              </label>
              <select
                id="rentPeriod"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="rentPeriod"
              >
                <option disabled selected value>
                  เลือกระยะเวลา
                </option>
                {period.map((el) => (
                  <option key={el.id} value={el.engName}>
                    {el.thaiName}
                  </option>
                ))}
              </select>
              <div className="h-0 pb-2">
                {error.rentPeriod && (
                  <InputErrorMessage message={error.rentPeriod} />
                )}
              </div>
            </div>

            <div>
              <InputForm
                labelName="ราคา"
                name="price"
                placeholder=""
                value={input.price}
                onChange={handleChangeInput}
                isInvalid={error.price}
              />
              {error.price && <InputErrorMessage message={error.price} />}
            </div>
            <div>
              <div>
                <InputForm
                  labelName="ชั้น"
                  name="floor"
                  placeholder=""
                  value={input.floor}
                  onChange={handleChangeInput}
                  isInvalid={error.floor}
                />
                {error.floor && <InputErrorMessage message={error.floor} />}
              </div>
            </div>
            <div>
              <div>
                <InputForm
                  labelName="พื้นที่ทั้งหมด"
                  name="totalArea"
                  placeholder=""
                  value={input.totalArea}
                  onChange={handleChangeInput}
                  isInvalid={error.totalArea}
                />
                {error.totalArea && (
                  <InputErrorMessage message={error.totalArea} />
                )}
              </div>
            </div>
            <div>
              <div>
                <InputForm
                  labelName="ห้องทั้งหมด"
                  name="totalUnit"
                  placeholder=""
                  value={input.totalUnit}
                  onChange={handleChangeInput}
                  isInvalid={error.totalUnit}
                />
                {error.totalUnit && (
                  <InputErrorMessage message={error.totalUnit} />
                )}
              </div>
            </div>
            <div>
              <div>
                <InputForm
                  labelName="จำนวนห้องนอน"
                  name="totalBedroom"
                  placeholder=""
                  value={input.totalBedroom}
                  onChange={handleChangeInput}
                  isInvalid={error.totalBedroom}
                />
                {error.totalBedroom && (
                  <InputErrorMessage message={error.totalBedroom} />
                )}
              </div>
            </div>
            <div>
              <div>
                <InputForm
                  labelName="จำนวนห้องน้ำ"
                  name="totalBathroom"
                  placeholder=""
                  value={input.totalBathroom}
                  onChange={handleChangeInput}
                  isInvalid={error.totalBathroom}
                />
                {error.totalBathroom && (
                  <InputErrorMessage message={error.totalBathroom} />
                )}
              </div>
            </div>
            <div>
              <div>
                <InputForm
                  labelName="จำนวนห้องครัว"
                  name="totalKitchen"
                  placeholder=""
                  value={input.totalKitchen}
                  onChange={handleChangeInput}
                  isInvalid={error.totalKitchen}
                />
                {error.totalKitchen && (
                  <InputErrorMessage message={error.totalKitchen} />
                )}
              </div>
            </div>
           
            
            <div>
              <div>
                <InputForm
                  labelName="Last name"
                  name="lastName"
                  placeholder=""
                  value={input.lastName}
                  onChange={handleChangeInput}
                  isInvalid={error.lastName}
                />
                {error.lastName && (
                  <InputErrorMessage message={error.lastName} />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              รายละเอียดเพิ่มเติม
            </div>
            <textarea name="description" value={input.description} onChange={handleChangeInput} className="w-full rounded-md border-gray-300" rows="4" />
            {error.description && (
                  <InputErrorMessage message={error.description} />
            )}
          </div>
        </div>
      </div>

      <div className="rounded-md overflow-hidden flex flex-col">
        <div className="bg-c-blue3 text-white text-xl py-4 px-6">
          Property Image
        </div>
        <form className=" bg-white px-6 py-4">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <p>Image 1</p>
              <div class="flex items-center justify-center w-full">
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
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p>Image 2</p>
              <div class="flex items-center justify-center w-full">
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
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>

      <>
        <div className="rounded-md overflow-hidden flex flex-col">
          <div className="bg-c-blue3 text-white text-xl py-4 px-6">
            สิ่งอำนวยความสะดวกภายในห้อง
          </div>
          <div>
            <form className=" bg-white px-6 py-2 grid grid-cols-5 justify-content: space-between">
              {dataRoom.map((el) => (
                <Checkbox el={el} key={el.id} />
              ))}
            </form>
          </div>
        </div>

        <div className="rounded-md overflow-hidden flex flex-col">
          <div className="bg-c-blue3 text-white text-xl py-4 px-6">
            สิ่งอำนวยความสะดวกส่วนกลาง
          </div>
          <div>
            <form className=" bg-white px-6 py-2 grid grid-cols-5 justify-content: space-between">
              {dataCommon.map((el) => (
                <Checkbox el={el} key={el.id} />
              ))}
            </form>
          </div>
        </div>
        <div className="flex">
          <button
            type="submit"
            className="p-2 min-w-[80px] text-white bg-yellow-400 rounded-md w-full"
          >
            สร้างห้องเช่า
          </button>
        </div>
      </>
    </form>
  );
}
