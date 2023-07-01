import { useDispatch, useSelector } from "react-redux";
import { searchListAsync } from "../slice/search-slice";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MainSearchBar() {
  const dispatch = useDispatch();
  const [roomtype, setRoomtype] = useState("");
  const [province, setProvince] = useState("");
  let { state } = useLocation();

  const checkRoomtype = state?.roomtype;

  // setRoomtype(checkRoomtype);

  useEffect(() => {
    dispatch(searchListAsync());
  }, [dispatch]);

  const searchList = useSelector((state) => state?.searchList?.searchList);

  // console.log(searchList.roomtype);

  const hdlChangeRoomTypeInput = (e) => {
    setRoomtype(e.target.value);
  };

  const hdlChangeProvinceInput = (e) => {
    setProvince(e.target.value);
  };

  // const hdlSubmit = (e) => {
  //   try {
  //     e.preventDefault();
  //     console.log("Check output ", roomtype, province);
  //   } catch (err) {
  //     console.log("Error to send", err);
  //   }
  // };

  // console.log("check roomtype ", roomtype);

  return (
    <form className="text-lg w-full flex">
      <select
        className="flex-1 pl-10 select w-full h-full rounded-l-full ring-0 border-1 border focus:outline-none border-c-gray1 ring-c-gray1 outline-none focus:ring-none hover:ring-4 hover:ring-c-blue4 transition-all duration-300 hover:z-50"
        value={roomtype}
        onChange={hdlChangeRoomTypeInput}
      >
        <option disabled value="">
          เลือกประเภทห้อง
        </option>
        {searchList?.roomtype?.map((el) =>
          el?.name === checkRoomtype ? (
            <option key={el.id} selected value={el.name} className="text-2xl">
              {el.name}
            </option>
          ) : (
            <option key={el.id} value={el.name} className="text-2xl">
              {el.name}
            </option>
          )
        )}
        <option value="">ทั้งหมด</option>
      </select>

      <select
        className="flex-[2] pl-10 select w-full h-full text-c-blue2 rounded-none ring-0 border-1 border focus:outline-none border-c-gray1 ring-c-gray1 outline-none focus:ring-c-blue4 hover:ring-4 hover:ring-c-blue4 transition-all duration-300 hover:z-50"
        value={province}
        onChange={hdlChangeProvinceInput}
      >
        <option disabled value="">
          เลือกจังหวัด
        </option>
        {searchList?.province?.map((el) => (
          <option key={el.id} value={el.nameInThai} className="text-2xl">
            {el.nameInThai}
          </option>
        ))}
      </select>

      <Link to="/searchpage" state={{ roomtype: roomtype, province: province }}>
        <button className="w-fit px-7 py-2 rounded-r-full h-full bg-c-yellow1 font-semibold transition-all hover:bg-c-yellow2 hover:scale-105 active:scale-95 active:bg-c-yellow3 hover:z-50">
          ค้นหา
        </button>
      </Link>
    </form>
  );
}
