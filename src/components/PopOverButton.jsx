import React from "react";

export default function PopOverButton({ children, text }) {
  return (
    <div>
      <button
        data-popover-target={text}
        data-popover-trigger="hover"
        type="button"
        class="text-c-white1 hover:bg-c-gray2  font-medium rounded-full text-lg px-2 py-2 text-center"
      >
        {children}
      </button>
      <div
        data-popover
        id={text}
        role="tooltip"
        class="absolute z-40 invisible inline-block w-fit text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
      >
        <div class="px-3 py-2">
          <p>{text || "ไม่ระบุ"}</p>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>
  );
}
