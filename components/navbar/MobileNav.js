import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MobileNav = ({ toggle, menu }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        className={`mobile_nav transition-all duration-1000 ease-in-out rounded-sm px-6  ${
          toggle ? "opacity-0 max-h-0" : "opacity-100 max-h-screen"
        }`}
        style={{
          transitionProperty: "opacity, max-height",
        }}
      >
        <ul className="flex flex-col gap-6 mb-4">
          <li onClick={menu}>
            <Link href="#">Youtube To MP4</Link>
          </li>
          <li onClick={menu}>
            <Link href="/player">Youtube Cutter</Link>
          </li>
          <li onClick={menu}>
            <Link href="#">Youtube To MP3</Link>
          </li>
          <li>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <button className="px-5 py-3 bg-black text-white flex items-center gap-2 text-base font-semibold rounded-md transition-all hover:bg-[#444] dark:hover:bg-[#555] dark:bg-[#333]">
                  <Image src="/Chrome.png" alt="img" width={20} height={20} />
                  Add to Chrome
                </button>
              </PopoverTrigger>
              <PopoverContent
                className={`bg-white dark:bg-[#333] p-4 mt-2 rounded-md shadow-md z-50 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl transition-opacity ${
                  open ? "opacity-100" : "opacity-0"
                }`}
                side="bottom"
                align="start"
                onInteractOutside={() => setOpen(false)} // Close when clicking outside
              >
                <div className="flex justify-end">
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col items-center gap-4 mt-2 text-center sm:text-left">
                  <div className="w-16 h-16">
                    <Image
                      src="https://i0.wp.com/addoncrop.com/wp-content/uploads/2021/03/Foxified-icon.png"
                      alt="img"
                      layout="responsive"
                      height={62}
                      width={62}
                    />
                  </div>
                  <div>
                    <h3>
                      Foxified extension is needed to make YouTube Video
                      Downloader work properly.
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-3">
                  <button className="flex items-center gap-2 bg-[#F4F4F5] dark:bg-[#777] px-6 py-3 rounded-full">
                    <Image
                      src="https://i3.wp.com/addoncrop.com/wp-content/themes/addoncrop/assets/images/icon-webstore.png"
                      alt="img"
                      height={20}
                      width={20}
                    />
                    Let&apos;s Go
                  </button>
                  <button className="hover:underline">Watch video</button>
                </div>
              </PopoverContent>
            </Popover>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
