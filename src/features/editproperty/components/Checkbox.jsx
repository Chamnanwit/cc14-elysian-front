import React from "react";
export default function Checkbox({ el }) {
  const hdlClick = (e) => {
    console.log(e.target.value, e.target.checked);
  };
  return (
    <div class="flex items-center border-gray-200 rounded dark:border-gray-700">
      <input
        id={el.id}
        type="checkbox"
        value={el.id}
        name={el.id}
        checked
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onClick={hdlClick}
      />
      <label
        htmlFor={el.id}
        class="w-full py-4 ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
      >
        {el.name}
      </label>
    </div>
  );
}
