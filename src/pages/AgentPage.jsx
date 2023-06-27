import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TbCards } from "react-icons/tb";
import { MdPassword } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";

import PropertyContainer from "../features/createproperty/components/PropertyContainer";
import Navbar from "../layouts/Navbar";
import MyProfileContainer from "../features/myprofile/components/MyProfileContainer";
<<<<<<< HEAD
import MyPropertyContainer from "../features/myproperty/components/MyPropertyContainer";
import EditPropertyContainer from "../features/editproperty/components/EditPropertyContainer";

export default function AgentPage() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen border flex">
      <div className="w-1/4">
        <div className="fixed w-[360px] h-screen p-5 px-10 bg-c-blue2 duration-[400ms]">
          <div className="py-4 overflow-y-auto text-c-white1">
            <ul class="space-y-2 font-medium">
              <li>
                <a
                  href="/"
                  class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                >
                  <div className="text-[18pt]">
                    <AiFillHome />
                  </div>
                  <span class="ml-3">หน้าแรก</span>
                </a>
              </li>
              <li>
                <a
                  href="/searchpage"
                  class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                >
                  <div className="text-[18pt]">
                    <FaSearch />
                  </div>
                  <span class="ml-3">ค้นหาทั้งหมด</span>
                </a>
              </li>
              <li>
                <a
                  href="/packageplan"
                  class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                >
                  <div className="text-[18pt]">
                    <TbCards />
                  </div>
                  <span class="ml-3">แพ็คเกจ</span>
                </a>
              </li>
              <li>
                <a
                  href="/phonenumber"
                  class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                >
                  <div className="text-[18pt]">
                    <RiAdminLine />
                  </div>
                  <span class="ml-3">ยืนยันตัวตน</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  class="flex items-center w-full p-2 rounded-full hover:text-c-gray3  hover:bg-c-white1 active:scale-95 duration-200"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">
                    จัดการห้องเช่าของฉัน
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
                <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"

                      //   class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"

                      //   class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Products
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="/agent"
                  class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                >
                  <div className="text-[18pt]">
                    <RxDashboard />
                  </div>
                  <span class="ml-3">จัดการห้องเช่า</span>
                </a>
              </li>
              <li>
                <a
                  href="#ก"
                  class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                >
                  <div className="text-[18pt]">
                    <ImProfile />
                  </div>
                  <span class="ml-3">ข้อมูลส่วนตัว</span>
                </a>
              </li>
              <li>
                <a
                  href="#ก"
                  class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                >
                  <div className="text-[18pt]">
                    <MdPassword />
                  </div>
                  <span class="ml-3">เปลี่ยนรหัสผ่าน</span>
                </a>
              </li>
              <li>
                <a
                  href="#ก"
                  class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                >
                  <div className="text-[18pt]">
                    <FaSignOutAlt />
                  </div>
                  <span class="ml-3">ออกจากระบบ</span>
                </a>
              </li>
              <li>
                <a
                  href="/adminlogin"
                  class="flex items-center p-2 my-10 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
                >
                  <div className="text-[18pt]">
                    <RiAdminLine />
                  </div>
                  <span class="ml-3">ADMIN</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-3/4 bg-[#F4F6FF] text-lg">
        <PropertyContainer />
        <MyPropertyContainer />
        <EditPropertyContainer />
        <MyProfileContainer />
=======
import SidebarAgency from "../components/SidebarAgency";
import AgentDb from "../features/createproperty/components/AgentDb";

export default function AgentPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="max-w-[1440px] mx-auto min-h-screen flex">
        <SidebarAgency />
        <div className="flex-[4] bg-[#F4F6FF] text-lg">
          <AgentDb />
          <PropertyContainer />
          <PropertyEditContainer />
          <MyProfileContainer />
        </div>
>>>>>>> 2586963f111f010d731a3a8475c9d8c6ba4321e0
      </div>
    </div>
  );
}
