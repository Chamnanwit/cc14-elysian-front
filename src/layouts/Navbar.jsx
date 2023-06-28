import { useAuth0 } from "@auth0/auth0-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TbCards } from "react-icons/tb";
import { MdPassword } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { BsChevronDown } from "react-icons/bs";
import LoginButton from "../features/auth/components/LoginButton";
import LogoutButton from "../features/auth/components/LogoutButton";
import Logo from "../components/logo";
import LogoWhite from "../components/LogoWhite";

export default function Navbar() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="mx-auto bg-c-white1 h-[60px] w-full flex items-center p-5 px-10 shadow-lg sticky top-0 z-50">
      <div class="text-center text-c-gray1 text-[25px] flex-1 flex justify-start ">
        {/* <button
          class="hover:scale-105 transition-all duration-200 hover:bg-white p-1 rounded-lg"
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          <GiHamburgerMenu />
        </button> */}
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className=" drawer-content text-center text-c-gray1  flex-1 flex justify-start ">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className=" flex flex-col items-center drawer-button hover:scale-105 text-[25px] transition-all duration-200 hover:bg-white p-2  rounded-lg"
            >
              <GiHamburgerMenu />
            </label>
          </div>
          <div className="drawer-side ">
            <label htmlFor="my-drawer" className="drawer-overlay "></label>

            <ul class=" fixed top-0 left-0 z-40 w-[25%] h-screen shadow-lg bg-c-green4 text-base text-c-white1 p-5 pl-10 py-10 flex-col flex gap-1 transition-transform duration-[400ms]">
              <li>
                <details open>
                  <summary class="flex items-center p-2  justify-between rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200">
                    <div className="flex">
                      {" "}
                      <div className="text-[18pt]">
                        <TbCards />
                      </div>
                      <span class="ml-3">แพ็คเกจ</span>
                    </div>
                    <BsChevronDown />
                  </summary>
                  <ul>
                    <li className="flex items-center p-2 pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200">
                      <p>level 2 item 1</p>
                    </li>
                  </ul>
                </details>
              </li>
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
              {/* <li>
        <a
          href="#ก"
          class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
        >
          <div className="text-[18pt]">
            <FaSearchLocation />
          </div>
          <span class="ml-3">ค้นหาโดยแผนที่</span>
        </a>
      </li> */}

              {/* dropdown */}
              {/* <li>
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
      </li> */}

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

      <div className=" flex-1 flex justify-center">
        <Logo />
        {/* <img src={logo} alt="logo" className="pl-20 h-10 min-w-fit" /> */}
      </div>

      <div className="flex-1 flex justify-end">
        <LoginButton />
        <LogoutButton />
      </div>
    </div>
  );
}

// <div
//   id="drawer-navigation"
//   class="fixed top-0 left-0 z-40 w-[25%] h-screen p-5 pl-10 overflow-y-auto transition-transform -translate-x-full bg-c-green4 duration-[400ms]"
//   tabindex="-1"
//   aria-labelledby="drawer-navigation-label"
// >
//   <div className=" flex justify-between">
//     <h5
//       id="drawer-navigation-label"
//       class="text-base text-c-white1 font-semibold uppercase dark:text-gray-400"
//     >
//       Menu
//     </h5>

//     <button
//       type="button"
//       data-drawer-hide="drawer-navigation"
//       aria-controls="drawer-navigation"
//       class="text-c-white1 bg-transparent hover:bg-c-white1 hover:text-c-gray3 rounded-full text-sm p-1.5 absolute top-3.5 right-2.5 inline-flex transition-all  duration-200"
//     >
//       <svg
//         aria-hidden="true"
//         class="w-5 h-5"
//         fill="currentColor"
//         viewBox="0 0 20 20"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           fill-rule="evenodd"
//           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//           clip-rule="evenodd"
//         ></path>
//       </svg>
//       <span class="sr-only">Close menu</span>
//     </button>
//   </div>

//   <div class="py-4 overflow-y-auto  text-c-white1">
//     <ul class="space-y-2 font-medium">
//       <li>
//         <a
//           href="/"
//           class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
//         >
//           <div className="text-[18pt]">
//             <AiFillHome />
//           </div>
//           <span class="ml-3">หน้าแรก</span>
//         </a>
//       </li>
//       <li>
//         <a
//           href="/searchpage"
//           class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
//         >
//           <div className="text-[18pt]">
//             <FaSearch />
//           </div>
//           <span class="ml-3">ค้นหาทั้งหมด</span>
//         </a>
//       </li>
//       <li>
//         <a
//           href="/packageplan"
//           class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
//         >
//           <div className="text-[18pt]">
//             <TbCards />
//           </div>
//           <span class="ml-3">แพ็คเกจ</span>
//         </a>
//       </li>
//       <li>
//         <a
//           href="/phonenumber"
//           class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
//         >
//           <div className="text-[18pt]">
//             <RiAdminLine />
//           </div>
//           <span class="ml-3">ยืนยันตัวตน</span>
//         </a>
//       </li>
//       {/* <li>
//         <a
//           href="#ก"
//           class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
//         >
//           <div className="text-[18pt]">
//             <FaSearchLocation />
//           </div>
//           <span class="ml-3">ค้นหาโดยแผนที่</span>
//         </a>
//       </li> */}

//       {/* dropdown */}
//       {/* <li>
//         <button
//           type="button"
//           class="flex items-center w-full p-2 rounded-full hover:text-c-gray3  hover:bg-c-white1 active:scale-95 duration-200"
//           aria-controls="dropdown-example"
//           data-collapse-toggle="dropdown-example"
//         >
//           <svg
//             aria-hidden="true"
//             class="flex-shrink-0 w-6 h-6"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//           <span class="flex-1 ml-3 text-left whitespace-nowrap">
//             จัดการห้องเช่าของฉัน
//           </span>
//           <svg
//             class="w-6 h-6"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//         </button>
//         <ul id="dropdown-example" class="hidden py-2 space-y-2">
//           <li>
//             <a
//               href="#"
//               class="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"

//               //   class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//             >
//               Products
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="flex items-center p-2 w-full pl-11 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"

//               //   class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//             >
//               Products
//             </a>
//           </li>
//         </ul>
//       </li> */}

//       <li>
//         <a
//           href="/agent"
//           class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
//         >
//           <div className="text-[18pt]">
//             <RxDashboard />
//           </div>
//           <span class="ml-3">จัดการห้องเช่า</span>
//         </a>
//       </li>
//       <li>
//         <a
//           href="#ก"
//           class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
//         >
//           <div className="text-[18pt]">
//             <ImProfile />
//           </div>
//           <span class="ml-3">ข้อมูลส่วนตัว</span>
//         </a>
//       </li>
//       <li>
//         <a
//           href="#ก"
//           class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
//         >
//           <div className="text-[18pt]">
//             <MdPassword />
//           </div>
//           <span class="ml-3">เปลี่ยนรหัสผ่าน</span>
//         </a>
//       </li>
//       <li>
//         <a
//           href="#ก"
//           class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
//         >
//           <div className="text-[18pt]">
//             <FaSignOutAlt />
//           </div>
//           <span class="ml-3">ออกจากระบบ</span>
//         </a>
//       </li>
//       <li>
//         <a
//           href="/adminlogin"
//           class="flex items-center p-2 my-10 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
//         >
//           <div className="text-[18pt]">
//             <RiAdminLine />
//           </div>
//           <span class="ml-3">ADMIN</span>
//         </a>
//       </li>
//     </ul>
//   </div>
// </div>
