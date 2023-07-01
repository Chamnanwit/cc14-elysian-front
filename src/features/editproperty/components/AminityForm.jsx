import React from "react";
import { useState } from "react";
import InputForm from "../../../components/InputForm";
import Checkbox from "./Checkbox";

export default function AminityForm({
  textConFirm,
  onIsAddMode,
  oldProperty,
}) {
  const data = [
    {id: 1, name: "เครื่องปรับอากาศ", type: "ROOM"},
    {id: 2, name: "TV", type: "ROOM"},
    {id: 3, name: "ตู้เย็น", type: "ROOM"},
    {id: 4, name: "เครื่องทำน้ำอุ่น", type: "ROOM"},
    {id: 5, name: "เครื่องซักผ้า", type: "ROOM"},
    {id: 6, name: "สระว่ายน้ำ", type: "COMMON"},
    {id: 7, name: "ฟิตเนส", type: "COMMON"},
    {id: 8, name: "สวน", type: "COMMON"},
    {id: 9, name: "ครัว", type: "COMMON"},
    {id: 10, name: "Co-working Space", type: "COMMON"},
  ]

    const dataRoom = data.filter(el => el.type==="ROOM")
    const dataCommon = data.filter(el => el.type==="COMMON")

  const initialInput = {};
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="rounded-md overflow-hidden flex flex-col">
        <div className="bg-c-blue3 text-white text-xl py-4 px-6">
            สิ่งอำนวยความสะดวกภายในห้อง
        </div>
        <div>
          <form className=" bg-white px-6 py-2 grid grid-cols-5 justify-content: space-between">
              {dataRoom.map(el => <Checkbox el={el} key={el.id}/>)}
          </form>
        </div>
      </div>

      <div className="rounded-md overflow-hidden flex flex-col">
        <div className="bg-c-blue3 text-white text-xl py-4 px-6">
          สิ่งอำนวยความสะดวกส่วนกลาง
        </div>
        <div>
          <form className=" bg-white px-6 py-2 grid grid-cols-5 justify-content: space-between">
              {dataCommon.map(el => <Checkbox el={el} key={el.id}/>)}
          </form>
        </div>
      </div>
      <div className="flex">
        <button type='submit' className='p-2 min-w-[80px] text-white bg-yellow-400 rounded-md w-full'>สร้างห้องเช่า</button>
      </div>
    </>
  );
}