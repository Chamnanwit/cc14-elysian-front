import { AiFillHome, AiFillDashboard } from "react-icons/ai";
import { FaSearch, FaSignOutAlt, FaUserTie, FaUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TbCards } from "react-icons/tb";
import { MdPassword } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import ListAdminMenuButton from "../components/ListAdminMenuButton";
import LogoWhite from "./LogoWhite";

export default function SidebarAdmin() {
  return (
    <div class="sticky top-0 flex flex-col flex-1 h-screen p-10 px-10 bg-c-blue2 duration-[400ms]">
      <div className="w-full flex justify-center mb-5">
        <LogoWhite />
      </div>
      <div class="py-4 overflow-y-auto  text-c-white1">
        <ul class="space-y-2 font-medium">
          <ListAdminMenuButton link="/" icon={<AiFillDashboard />}>
            ภาพรวม
          </ListAdminMenuButton>
          <ListAdminMenuButton link="/" icon={<FaUserTie />}>
            รายชื่อแอดมิน
          </ListAdminMenuButton>
          <ListAdminMenuButton link="/" icon={<FaUser />}>
            รายชื่อเอเจนซี่
          </ListAdminMenuButton>

          <li>
            <button
              type="button"
              class="flex items-center w-full p-2 rounded-full hover:text-c-gray3  hover:bg-c-white1 active:scale-95 duration-200"
              aria-controls="จัดการห้องเช่า"
              data-collapse-toggle="จัดการห้องเช่า"
            >
              <div className="text-[18pt]">{<RxDashboard />}</div>

              <span class="flex-1 ml-3 text-left whitespace-nowrap">
                จัดการห้องเช่า
              </span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <ul id="จัดการห้องเช่า" class="hidden py-2 space-y-2">
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"

                  //   class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  ห้องเช่าทั้งหมด
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"

                  //   class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  สิ่งอำนวยความสะดวก
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              class="flex items-center w-full p-2 rounded-full hover:text-c-gray3  hover:bg-c-white1 active:scale-95 duration-200"
              aria-controls="แพ็คเกจ"
              data-collapse-toggle="แพ็คเกจ"
            >
              <div className="text-[18pt]">
                <TbCards />
              </div>

              <span class="flex-1 ml-3 text-left whitespace-nowrap">
                แพ็คเกจ
              </span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <ul id="แพ็คเกจ" class="hidden py-2 space-y-2">
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                >
                  แพ็คเกจ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                >
                  ประวัติการซื้อ
                </a>
              </li>
            </ul>
          </li>

          <ListAdminMenuButton link="" icon={<FaSignOutAlt />}>
            ออกจากระบบ
          </ListAdminMenuButton>
          <ListAdminMenuButton link="/" icon={<AiFillHome />}>
            กลับหน้าแรก
          </ListAdminMenuButton>
        </ul>
      </div>
    </div>
  );
}
