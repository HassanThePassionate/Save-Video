import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="wrap border-t border-[#f3f3f3] dark:border-[#333]">
      <div className="container">
        <div className="flex items-center justify-center sm:justify-between px-[10px] py-[20px] gap-3  flex-wrap  ">
          <div className="logo text-[16px] font-bold flex items-center gap-3 ">
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
          </div>
          <ul className="menu flex items-center gap-4 flex-wrap justify-center">
            <li>
              <Link href="#" className=" hover:underline ">
                Demo Page
              </Link>
            </li>
            <li>
              <Link href="#" className=" hover:underline ">
                Shadcn page
              </Link>
            </li>
            <li>
              <Link href="#" className=" hover:underline ">
                Documention
              </Link>
            </li>
            <li>
              <Link href="#" className=" hover:underline ">
                Help
              </Link>
            </li>
          </ul>
          <div className="copyright">
            <span className="text-sm text-[#888] text-center">
              &copy; SaveVideo. 2018-2024{" "}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
