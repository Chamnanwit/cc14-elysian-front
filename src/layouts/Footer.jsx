import Logo from "../components/logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between px-5">
          <Logo />
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <Link to="/">
              <div className="mr-4 hover:underline md:mr-6 ">หน้าแรก</div>
            </Link>
            <Link to="/searchpage">
              <p className="mr-4 hover:underline md:mr-6">ค้นหาทั้งหมด</p>
            </Link>

            <Link to="/agent">
              <div className="mr-4 hover:underline md:mr-6 ">
                เพิ่มห้องเช่าของคุณ
              </div>
            </Link>
            <Link to="/packageplan">
              <div className="hover:underline">แพ็คเกจ</div>
            </Link>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/">
            <div className="hover:underline">Elysian</div>
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
