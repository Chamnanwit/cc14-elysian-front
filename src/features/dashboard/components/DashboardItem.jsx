import React from "react";
import { EditIcon } from "../../../icons";

export default function DashboardItem({
  children,
  bgColor,
  title,
  result = 9999.99,
}) {
  return (
    <div className="bg-white rounded-sm w-full">
      <div className="flex gap-3 max-w-sm p-3 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div
          className={`rounded-sm w-[70px] h-[70px] flex justify-center items-center bg-${bgColor}`}
        >
          {children}
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <div className="font-medium text-gray-500 ">{title}</div>
          <div className="text-2xl">{Number(result).toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
