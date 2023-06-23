import logo from "../assets/logo.png";
import Logo from "../components/logo";

export default function Footer() {
  return (
    <footer class="bg-white shadow dark:bg-gray-900">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between px-5">
          <Logo />
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                หน้าแรก
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                ค้นหาทั้งหมด
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                เพิ่มห้องเช่าของคุณ
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                แพ็คเกจ
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="/" class="hover:underline">
            Elysian
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
