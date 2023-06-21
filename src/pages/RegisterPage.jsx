import ButtonYellowM from "../components/ButtonYellowM";
import InputBar from "../components/InputBar";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

export default function RegisterPage() {
  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div>
        <Navbar />
        <div className=" bg-[url('/src/assets/pic/headerbg.jpg')]  h-[790px] w-full flex flex-col text-center items-center py-5 transition-all duration-200">
          <form className="mt-auto w-[35%] h-fit flex flex-col text-center items-center gap-5 p-10 rounded-xl bg-c-white1 opacity-90 ">
            <p className=" text-lg text-c-gray3 font-semibold">
              กรอกข้อมูลเพื่อยืนยันตัวตน
            </p>
            <InputBar>อีเมล์</InputBar>
            <InputBar>ชื่อ</InputBar>
            <InputBar>นามสกุล</InputBar>
            <InputBar>เบอร์โทรศัพท์</InputBar>
            <InputBar>หมายเลขบัตรประชะชน</InputBar>

            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">
                      คลิ๊ก เพื่อเพิ่มรูปภาพโปรไฟล์
                    </span>{" "}
                    หรือ ลากและวาง
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>

            <ButtonYellowM>ยืนยัน</ButtonYellowM>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
