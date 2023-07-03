import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import HeaderAgent from "../../../components/HeaderAgent";
import MyProfileForm from "./MyProfileform";
import { profileAgncyAsync } from "../slice/myProfile-slice";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { fetchMe } from "../../auth/slice/authSlice";

export default function MyProfileContainer() {
  const user = useSelector((state) => state?.auth?.user);

  return (
    <>
      <HeaderAgent topic="ข้อมูลส่วนตัว" />
      <div className="flex flex-col gap-6  mt-0">
        <MyProfileForm
          key={user?.id}
        />
      </div>
    </>
  );
}
