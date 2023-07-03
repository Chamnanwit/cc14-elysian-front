import React, { useState } from "react";
import InputForm from "../../../components/InputForm";
import Checkbox from "./Checkbox";
import { useSelector } from "react-redux";

export default function AminityForm({
  textConFirm,
  onIsAddMode,
  oldProperty,
  onInputChange,
}) {
  const animityRoomArrSearch = useSelector(
    (state) => state?.animity?.animityRoomFilter
  );
  const animityCommonArrSearch = useSelector(
    (state) => state?.animity?.animityCommonFilter
  );

  const initialInput = {};
  const [inputcheck, setInputcheck] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    if (e.target.checked) {
      setInputcheck({ ...inputcheck, [e.target.name]: e.target.checked });
    } else {
      const arr = { ...inputcheck };
      delete arr[e.target.name];
      setInputcheck({ ...arr });
    }

    // เรียกใช้งานฟังก์ชันที่ถูกส่งเข้ามาจากหน้าที่เรียกใช้
    onInputChange(inputcheck);
  };

  console.log("inputcheck", inputcheck);
  return (
    <>
      <div className="rounded-md overflow-hidden flex flex-col">
        <div className="bg-c-blue3 text-white text-xl py-4 px-6">
          สิ่งอำนวยความสะดวกภายในห้อง
        </div>
        <div>
          <form
            className=" bg-white px-6 py-2 grid grid-cols-5 justify-content: space-between"
            onClick={handleChangeInput}
          >
            {animityRoomArrSearch.map((el) => (
              <Checkbox el={el} key={el?.id} />
            ))}
          </form>
        </div>
      </div>

      <div className="rounded-md overflow-hidden flex flex-col">
        <div className="bg-c-blue3 text-white text-xl py-4 px-6">
          สิ่งอำนวยความสะดวกส่วนกลาง
        </div>
        <div>
          <form
            className=" bg-white px-6 py-2 grid grid-cols-5 justify-content: space-between"
            onClick={handleChangeInput}
          >
            {animityCommonArrSearch.map((el) => (
              <Checkbox el={el} key={el?.id} />
            ))}
          </form>
        </div>
      </div>
    </>
  );
}
