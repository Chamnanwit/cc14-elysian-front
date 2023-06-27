import React from "react";

export default function ListAdminMenuButton({ children, icon, link }) {
  return (
    <li>
      <a
        href={link}
        class="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
      >
        <div className="text-[18pt]">{icon}</div>
        <span class="ml-3">{children}</span>
      </a>
    </li>
  );
}
