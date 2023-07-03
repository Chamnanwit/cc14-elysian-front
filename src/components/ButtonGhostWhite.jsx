import React from "react";

export default function ButtonGhostWhite({ children, clickme }) {
  return (
    <button
      onClick={clickme}
      class="flex text-xs items-center text-c-white1 justify-center border p-2 rounded-full w-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
    >
      {children}
    </button>
  );
}
