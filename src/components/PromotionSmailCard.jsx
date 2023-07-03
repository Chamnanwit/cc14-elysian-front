import React from "react";

export default function PromotionSmailCard({
  children,
  packname,
  price,
  time,
  onClick,
  id,
  packageId,
}) {
  return (
    <div
      onClick={() => onClick(id, packageId)}
      className="bg-c-white1  select-none cursor-pointer w-[300px] h-[320px] flex flex-col gap-5 rounded-2xl border-t-[30px] shadow-lg border-t-c-blue1  p-10 px-14 text-center hover:bg-white  hover:mt-[-30px]  hover:z-40 transition-all duration-500"
    >
      <p className=" text-xl">{packname}</p>
      <div className="text-2xl font-semibold">
        ฿{price} <p>{time}</p>
      </div>
      <div className="flex flex-col  justify-center text-center mt-2 gap-2">
        {children}
      </div>
    </div>
  );
}
