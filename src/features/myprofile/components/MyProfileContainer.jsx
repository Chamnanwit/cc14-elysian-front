import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import HeaderAgent from "../../../components/HeaderAgent";
import MyProfileForm from "./MYProfileform";
import { profileAgncyAsync } from "../slice/myProfile-slice";

export default function MyProfileContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileAgncyAsync());
  }, []);

  const userArr = useSelector(
    (state) => state?.profileAgncyAsync?.profileAgncy
  );

  console.log("--*----*-*-----*->", userArr);
  return (
    <>
      <HeaderAgent topic="My profile" />
      <div className="flex flex-col gap-6  mt-0">
        {/* {userArr.map((el) => (
          <MyProfileForm key={el.id} oldProfile={el} />
        ))} */}
      </div>
    </>
  );
}
