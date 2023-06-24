import ButtonYellowM from "../components/ButtonYellowM";
import InputBar from "../components/InputBar";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

export default function PhoneNumberPage() {
  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div>
        <Navbar />
        <div className=" bg-[url('/src/assets/pic/cover1.jpg')]  h-[700px] w-full flex flex-col text-center items-center py-16 bg-cover">
          <form className="mt-14 w-[35%] h-fit flex flex-col text-center items-center gap-5 p-10 rounded-xl bg-c-white1 bg-opacity-50 backdrop-blur-sm">
            <p className=" text-lg text-c-gray3 font-semibold">ยืนยันตัวตน</p>
            <InputBar>กรอกหมายเลขโทรศัพท์ ex.081xxxxxxx</InputBar>
            <button
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              className=" w-fit px-7 py-2 rounded-full bg-c-yellow1 font-semibold transition-all hover:bg-c-yellow2 hover:scale-105 active:scale-95 active:bg-c-yellow3"
              type="button"
            >
              ขอรหัส OTP
            </button>
          </form>
          <div
            id="authentication-modal"
            tabindex="-1"
            aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                  <h3 class="mb-4 text-xl font-medium text-c-gray3 dark:text-white">
                    OTP REF: refe
                  </h3>
                  <form class="space-y-6" action="#">
                    <div className="flex gap-5 justify-center">
                      <input
                        type="text"
                        name="otp"
                        class="bg-gray-50 border w-10 text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder=""
                        required
                      />
                      <input
                        type="text"
                        name="otp"
                        class="bg-gray-50 border w-10 text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder=""
                        required
                      />
                      <input
                        type="text"
                        name="otp"
                        class="bg-gray-50 border w-10 text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder=""
                        required
                      />
                      <input
                        type="text"
                        name="otp"
                        class="bg-gray-50 border w-10 text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder=""
                        required
                      />
                      <input
                        type="text"
                        name="otp"
                        class="bg-gray-50 border w-10 text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder=""
                        required
                      />
                      <input
                        type="text"
                        name="otp"
                        class="bg-gray-50 border w-10 text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder=""
                        required
                      />
                    </div>
                    <ButtonYellowM>ยืนยัน</ButtonYellowM>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                      หากยังไม่ได้ข้อความ{" "}
                      <a
                        href="#"
                        class="text-blue-700 hover:underline dark:text-blue-500"
                      >
                        ขอรหัสอีกครั้ง
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
