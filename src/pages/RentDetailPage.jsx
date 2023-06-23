import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { BiTime } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";

import AgencyCard from "../components/AgencyCard";

export default function RentDetailPage() {
  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div>
        <Navbar />
        <div className="w-full flex justify-center pb-10 pt-16 text-xl font-semibold">
          เดอะออริจิ้นคอนโด - สวนสนุก
        </div>
        <div className="pb-10 shadow-xl">
          <div className="h-[330px] overflow-auto bg-c-gray3 flex justify-start gap-2 items-center">
            <img
              src="/src/assets/pic/pictest1.jpg"
              alt="pic test1"
              className="h-[300px] w-auto"
            />
            <img
              src="/src/assets/pic/pictest2.jpg"
              alt="pic test1"
              className="h-[300px] w-auto"
            />
            <img
              src="/src/assets/pic/pictest3.jpg"
              alt="pic test1"
              className="h-[300px] w-auto"
            />
            <img
              src="/src/assets/pic/mainpic.jpeg"
              alt="pic test1"
              className="h-[300px] w-auto"
            />
          </div>
        </div>
        <div className="flex w-full mt-10">
          <div className="flex-1 p-5 flex flex-col items-center gap-5">
            {/* <div className=" px-5  flex-[1] flex flex-col items-center justify-start gap-5 text-center">
      
            </div> */}
            <div className="flex flex-col w-full p-10 gap-2 items-center bg-white rounded-xl shadow-lg">
              <p>รายละเอียดห้อง</p>
              <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                <p>อาคาร</p>
                <p>A</p>
              </div>
              <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                <p>ประเภทห้อง</p>
                <p>สตูดิโอ</p>
              </div>
              <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                <p>ชั้น</p>
                <p>4</p>
              </div>
              <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                <p>ห้องนอน</p>
                <p>1 ห้อง</p>
              </div>

              <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                <p>ห้องน้ำ</p>
                <p>4 ห้อง</p>
              </div>
              <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                <p>ห้องครัว</p>
                <p>4 ห้อง</p>
              </div>
              <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                <p>จำนวนห้องเช่า</p>
                <p>xxx ห้อง</p>
              </div>
              <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                <p>พื้นที่ห้อง</p>
                <p>ตร.ว.</p>
              </div>
            </div>
          </div>
          <div className="flex-[3] p-5 flex flex-col gap-5">
            <div className="flex justify-between text-c-gray3">
              <div>
                <div className="flex gap-2  text-c-gray2 pt-4">
                  <BiTime />
                  <p className="text-xs items-center"> 4 ชั่วโมง</p>
                </div>
                <br />

                <hr />
                <br />
                <div className="w-full text-2xl font-semibold">
                  เดอะออริจิ้นคอนโด - สวนสนุก
                </div>
                <div className=" text-c-blue1 text-xl py-5">
                  ราคาเช่า ฿28,000 / เดือน
                </div>
                <div className=" text-sm text-c-gray2">
                  มัดจำ/ประกัน: 2 เดือน
                </div>
                <div className=" text-sm text-c-gray2">
                  จ่ายล่วงหน้า 2 เดือน
                </div>
                <div className="text-lg mt-5 text-c-gray2 flex gap-1">
                  <div>
                    <MdLocationOn />
                  </div>
                  <div>
                    624 ถนนอโศก - ดินแดง แขวงดินแดง เขตดินแดง กรุงเทพมหานคร
                  </div>
                </div>
              </div>

              <AgencyCard />
            </div>

            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-c-white1 dark:bg-gray-900 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <h2 id="accordion-flush-heading-1">
                <button
                  type="button"
                  class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-1"
                >
                  <span>รายละเอียด</span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0"
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
              </h2>
              <div
                id="accordion-flush-body-1"
                class="hidden"
                aria-labelledby="accordion-flush-heading-1"
              >
                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    ในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์
                    มีโปร วันเสาร์ วันศุกร์พบเด็ก มีๆรเจอกัล ในน้ำมีปลา
                    ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปร
                    วันเสาร์ วันศุกร์พบเด็ก มีๆรเจอกัลในน้ำมีปลา ในนามีข้าว
                    มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปร วันเสาร์
                    วันศุกร์พบเด็ก มีๆรเจอกัล
                  </p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-2">
                <button
                  type="button"
                  class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-2"
                >
                  <span>ข้อมูลโครงการ</span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 shrink-0"
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
              </h2>
              <div
                id="accordion-flush-body-2"
                class="hidden"
                aria-labelledby="accordion-flush-heading-2"
              >
                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    ในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์
                    มีโปร วันเสาร์ วันศุกร์พบเด็ก มีๆรเจอกัล ในน้ำมีปลา
                    ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปร
                    วันเสาร์ วันศุกร์พบเด็ก มีๆรเจอกัลในน้ำมีปลา ในนามีข้าว
                    มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปร วันเสาร์
                    วันศุกร์พบเด็ก มีๆรเจอกัล
                  </p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-3">
                <button
                  type="button"
                  class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-3"
                >
                  <span>สิ่งอำนวยความสะดวก</span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 shrink-0"
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
              </h2>
              <div
                id="accordion-flush-body-3"
                class="hidden"
                aria-labelledby="accordion-flush-heading-3"
              >
                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    ในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์
                    มีโปร วันเสาร์ วันศุกร์พบเด็ก มีๆรเจอกัล ในน้ำมีปลา
                    ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปร
                    วันเสาร์ วันศุกร์พบเด็ก มีๆรเจอกัลในน้ำมีปลา ในนามีข้าว
                    มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปร วันเสาร์
                    วันศุกร์พบเด็ก มีๆรเจอกัล Learn more about these
                    technologies:
                  </p>
                  <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                    <li>co working space</li>
                    <li>fitness</li>
                  </ul>
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
