import React from "react";
import PackageContainer from "../features/packages/components/PackageContainer";
import PurchaseHistoryContainer from "../features/purchase-history/components/PurchaseHistoryContainer";
import AgencyContainer from "../features/agencyInformation/components/AgencyContainer";
import DashboardContainer from "../features/dashboard/components/DashboardContainer";
import PaymentContainer from "../features/agencyPayment/components/PaymentContainer";
import AdminContainer from "../features/adminInformation/components/AdminContainer";
import AgencyProfile from "../features/agencyInformation/components/AgencyProfile";
import AnimityContainer from "../features/addanimity/components/AnimityContainer";
import { AiFillHome } from "react-icons/ai";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TbCards } from "react-icons/tb";
import { MdPassword } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";

export default function AdminPage() {

  const dataAdmin = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "admin1@gmail.com",
      status: 1,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      email: "admin2@gmail.com",
      status: 1,
    },
    {
      id: 3,
      firstName: "June",
      lastName: "Doe",
      email: "admin3@gmail.com",
      status: 0,
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen border flex">
      <div className="w-1/4">
        <div class="fixed w-[360px] h-screen p-5 px-10 bg-c-blue2 duration-[400ms]">
          <div class="py-4 overflow-y-auto text-c-white1">
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
        <PackageContainer />
        <PurchaseHistoryContainer />
        <DashboardContainer />
        <PaymentContainer />
        <AdminContainer data={dataAdmin} />
        <AgencyContainer />
        <AgencyProfile />
        <AnimityContainer />
      </div>
    </div>
  );
}
