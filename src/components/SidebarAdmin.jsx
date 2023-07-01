import { AiFillHome, AiFillDashboard } from "react-icons/ai";
import { FaSearch, FaSignOutAlt, FaUserTie, FaUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TbCards } from "react-icons/tb";
import { BsChevronDown } from "react-icons/bs";

import ListAdminMenuButton from "../components/ListAdminMenuButton";
import LogoWhite from "./LogoWhite";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/slice/authSlice";

export default function SidebarAdmin() {
 
  const dispatch = useDispatch()
  return (
    <div class="sticky top-0 flex flex-col flex-1 h-screen p-10 px-10 bg-c-blue2 duration-[400ms]">
      <div className="w-full flex justify-center mb-5">
        <LogoWhite />
      </div>
      <div class="py-4 overflow-y-auto  text-c-white1">
        <ul class="space-y-2 font-normal">
          <ListAdminMenuButton
            link="/admin/dashboard"
            icon={<AiFillDashboard />}
          >
            ภาพรวม
          </ListAdminMenuButton>
          <ListAdminMenuButton link="/admin/admin-list" icon={<FaUserTie />}>
            รายชื่อแอดมิน
          </ListAdminMenuButton>
          <ListAdminMenuButton link="/admin/agent-list" icon={<FaUser />}>
            รายชื่อเอเจนซี่
          </ListAdminMenuButton>

          <li>
            <details open>
              <summary class="flex items-center p-2  justify-between rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200">
                <div className="flex">
                  {" "}
                  <div className="text-[18pt]">{<RxDashboard />}</div>
                  <span class="ml-3">จัดการห้องเช่า</span>
                </div>
                <BsChevronDown />
              </summary>
              <ul>
                {/* <li>
                  <div
                    class="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                    //   class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    ห้องเช่าทั้งหมด
                  </div>
                </li> */}
                <li>
                  <Link
                    to="/admin/animity"
                    class="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"

                    //   class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    สิ่งอำนวยความสะดวก
                  </Link>
                </li>
              </ul>
            </details>
            <details open>
              <summary class="flex items-center p-2  justify-between rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200">
                <div className="flex">
                  {" "}
                  <div className="text-[18pt]">
                    <TbCards />
                  </div>
                  <span class="ml-3">จัดการแพ็คเกจ</span>
                </div>
                <BsChevronDown />
              </summary>
              <ul>
                <li>
                  <Link
                    to="/admin/pricing-plan"
                    class="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                  >
                    แพ็คเกจ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/purchase-history"
                    class="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                  >
                    ประวัติการซื้อ
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          <ListAdminMenuButton link="/adminlogin" icon={<FaSignOutAlt />} onClick={() => dispatch(logout())}>
            ออกจากระบบ
          </ListAdminMenuButton>
        </ul>
      </div>
    </div>
  );
}
