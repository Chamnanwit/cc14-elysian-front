import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import HeaderAgent from "../../../components/HeaderAgent";
import MyProfileForm from "./MyProfileform";
import { profileAgncyAsync } from "../slice/myProfile-slice";
import { useParams } from "react-router-dom";

export default function MyProfileContainer() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(profileAgncyAsync());
  }, []);

  const userObjects = useSelector((state) => state?.profileAgncy?.profileAgncy);
  // console.log(userObjects);

  return (
    <>
      <HeaderAgent topic="ข้อมูลส่วนตัว" />
      <div className="flex flex-col gap-6  mt-0">
        <MyProfileForm
          key={userObjects?.user?.id}
          oldProfile={userObjects?.user}
        />
      </div>
    </>
  );
}
