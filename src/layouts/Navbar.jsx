import { useAuth0 } from "@auth0/auth0-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TbCards } from "react-icons/tb";
// import { MdPassword } from "react-icons/md";
// import { RiAdminLine } from "react-icons/ri";
// import { ImProfile } from "react-icons/im";
// import { BsChevronDown } from "react-icons/bs";
import LoginButton from "../features/auth/components/LoginButton";
import LogoutButton from "../features/auth/components/LogoutButton";
import Logo from "../components/logo";
import LogoWhite from "../components/LogoWhite";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout as removetoken } from "../features/auth/slice/authSlice";

export default function Navbar() {
  const { logout, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

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

            <ul className=" fixed top-0 left-0 z-40 w-[25%] h-screen shadow-lg bg-c-green4 text-base text-c-white1 p-5 pl-10 py-10 flex-col flex gap-1 transition-transform duration-[400ms]">
              <Link to="/">
                <div className="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200">
                  <div className="text-[18pt]">
                    <AiFillHome />
                  </div>
                  <span className="ml-3">หน้าแรก</span>
                </div>
              </Link>
              <Link to="/searchpage">
                <div class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200">
                  <div className="text-[18pt]">
                    <FaSearch />
                  </div>
                  <span className="ml-3">ค้นหาทั้งหมด</span>
                </div>
              </Link>
              <Link to="/packageplan">
                <div class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200">
                  <div className="text-[18pt]">
                    <TbCards />
                  </div>
                  <span class="ml-3">แพ็คเกจ</span>
                </div>
              </Link>

              <Link to="/agent">
                <span class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200">
                  <div className="text-[18pt]">
                    <RxDashboard />
                  </div>
                  <span class="ml-3">จัดการห้องเช่าของคุณ</span>
                </span>
              </Link>

              {user && isAuthenticated ? (
                <Link
                  to="/"
                  onClick={() => {
                    dispatch(logout());
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    });
                    dispatch(removetoken());
                  }}
                >
                  <div class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200">
                    <div className="text-[18pt]">
                      <FaSignOutAlt />
                    </div>
                    <span class="ml-3">ออกจากระบบ</span>
                  </div>
                </Link>
              ) : (
                false
              )}
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
