import Link from "next/link";
import React from "react";

const Logo = ({ menu }) => {
  return (
    <div onClick={menu}>
      <Link
        href="/"
        className="logo text-[16px] font-bold flex items-center gap-3 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          class="h-6 w-6"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="208"
            y1="128"
            x2="128"
            y2="208"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
          <line
            x1="192"
            y1="40"
            x2="40"
            y2="192"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
        </svg>
        <span>SaveVideo</span>
      </Link>
    </div>
  );
};

export default Logo;
