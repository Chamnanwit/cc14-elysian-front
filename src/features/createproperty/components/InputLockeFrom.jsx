import React, { useState } from "react";

export default function InputLockeFrom() {
  const [showOption, setShowOption] = useState(false);
  const handleOptionChange = (event) => {
    setShowOption(event.target.value === "show");
  };
  return (
    <>
      <div className="rounded-md overflow-hidden flex flex-col">
        <div className="bg-c-blue3 text-white text-xl py-4 px-6">
          ตั้งค่าห้องเช่า
        </div>
        <div>
          <label
            htmlFor="option"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            แสดงห้องเช่าหรือไม่:
          </label>
          <select
            id="locked"
            name="locked"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={showOption ? "true" : "false "}
            onChange={handleOptionChange}
          >
            <option value="true">โชว์</option>
            <option value="false ">ไม่โชว์</option>
          </select>
        </div>
      </div>
    </>
  );
}
