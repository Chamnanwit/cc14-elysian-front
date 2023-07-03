import { AiFillHome, AiFillDashboard } from "react-icons/ai";
import { FaSearch, FaSignOutAlt, FaUserTie, FaUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

import { TbCards } from "react-icons/tb";
import { MdPassword } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import ListAdminMenuButton from "../components/ListAdminMenuButton";
import LogoWhite from "./LogoWhite";
import { useDispatch, useSelector } from "react-redux";
import { profileAgncyAsync } from "../features/myprofile/slice/myProfile-slice";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function SidebarAgency() {
  const dispatch = useDispatch();
  const { logout } = useAuth0();

  useEffect(() => {
    dispatch(profileAgncyAsync());
  }, []);
  const keyid = useSelector(
    (state) => state?.profileAgncy?.profileAgncy?.user?.id
  );

  return (
    <div className="sticky top-0 flex  flex-col flex-1 h-screen p-10 px-10 bg-c-green4 duration-[400ms]">
      <div className="w-full flex justify-center mb-5">
        <LogoWhite />
      </div>
      <div className="py-4 overflow-y-auto  text-c-white1">
        <ul className="space-y-2 font-medium">
          <ListAdminMenuButton link="/" icon={<AiFillHome />}>
            กลับหน้าแรก
          </ListAdminMenuButton>
          <ListAdminMenuButton link={`/agent`} icon={<ImProfile />}>
            ข้อมูลส่วนตัว
          </ListAdminMenuButton>
          {/* <ListAdminMenuButton link={`/agent`} icon={<AiFillDashboard />}>
            ภาพรวม
          </ListAdminMenuButton> */}
          <details open>
            <summary className="flex items-center p-2  justify-between rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200">
              <div className="flex">
                {" "}
                <div className="text-[18pt]">{<RxDashboard />}</div>
                <span className="ml-3">จัดการห้องเช่า</span>
              </div>
              <BsChevronDown />
            </summary>
            <ul>
              <li>
                <Link
                  to={`/agent/myproperty/${keyid}`}
                  className="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"

                  //   className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  ห้องเช่าทั้งหมด
                </Link>
              </li>
              <li>
                <Link
                  to="/agent/createproperty"
                  className="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"

                  //   className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  เพิ่มห้องเช่า
                </Link>
              </li>
            </ul>
          </details>
          <details open>
            <summary className="flex items-center p-2  justify-between rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200">
              <div className="flex">
                {" "}
                <div className="text-[18pt]">
                  <TbCards />
                </div>
                <span className="ml-3">จัดการแพ็คเกจ</span>
              </div>
              <BsChevronDown />
            </summary>
            <ul>
              <li>
                <Link
                  to="/packageplan"
                  className="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                >
                  ซื้อแพ็คเกจ
                </Link>
              </li>
              <li>
                <Link
                  to={`/agent/purchase-history/${keyid}`}
                  className="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                >
                  ประวัติการซื้อ
                </Link>
              </li>
            </ul>
          </details>
          {/* <ListAdminMenuButton link="/agent/myprofile" icon={<ImProfile />}>
            ข้อมูลส่วนตัว
          </ListAdminMenuButton> */}
          {/* <ListAdminMenuButton link="" icon={<MdPassword />}>
            เปลี่ยนรหัสผ่าน
          </ListAdminMenuButton> */}

          <ListAdminMenuButton link="" icon={<FaSignOutAlt />} onClick={logout}>
            ออกจากระบบ
          </ListAdminMenuButton>

          {/* <ListAdminMenuButton link="/phonenumber" icon={<RiAdminLine />}>
            ยืนยันตัวตน
          </ListAdminMenuButton> */}
        </ul>
      </div>
    </div>
  );
}
