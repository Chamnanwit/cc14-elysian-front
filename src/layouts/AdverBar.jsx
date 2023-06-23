import React from "react";
import ButtonYellowM from "../components/ButtonYellowM";

export default function AdverBar() {
  return (
    <div className="py-20 text-center">
      <div className=" flex justify-between h-fit items-center">
        <div className="flex-[1.5]">
          <img
            className="w-fit h-fit"
            src="/src/assets/pic/content1.jpg"
            alt="image description"
          />
        </div>
        <div className=" flex-1 h-full p-10 w-fit text-left pl-20">
          <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white ">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              หาง่าย ขายเร็ว
            </span>
            เป็นระบบ
          </h1>
          <p class="text-base font-normal text-c-gray2 w-[70%] mt-8">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className=" flex  p-5 px-8 bg-c-green4 w-fit mt-10 rounded-md text-c-white1 transition-all hover:bg-c-green3 hover:scale-105 active:scale-95 active:bg-c-green2">
            เพิ่มห้องเช่าของคุณ
          </div>
        </div>
      </div>
    </div>
  );
}
