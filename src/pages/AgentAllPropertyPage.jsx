import { useDispatch, useSelector } from "react-redux";
import SidebarAgency from "../components/SidebarAgency";
import MyPropertyContainer from "../features/myproperty/components/MyPropertyContainer";
import { profileAgncyAsync } from "../features/myprofile/slice/myProfile-slice";
import { useEffect } from "react";

export default function AgentAllPropertyPage() {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(profileAgncyAsync());
}, []);
const userObjects = useSelector((state) => state?.profileAgncy?.profileAgncy);


  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex ">
      <SidebarAgency />
      <div className="w-3/4 flex flex-col bg-[#F4F6FF] text-lg border-r">
        <MyPropertyContainer    />
      </div>
    </div>
  );
}
