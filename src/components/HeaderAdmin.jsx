import React from "react";

export default function HeaderAdmin({ topic }) {
  return (
    <>
      <div className="bg-c-blue4 h-[120px]"></div>
      <div className="flex flex-col mx-8 gap-6">
        <div className="bg-white h-[80px] rounded-md -mt-10 flex items-center mb-8">
          <p className="text-2xl font-semibold px-6">{topic}</p>
        </div>
      </div>
    </>
  );
}
