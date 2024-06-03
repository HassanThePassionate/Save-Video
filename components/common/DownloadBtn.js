"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const DownloadBtn = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const btns = [
    {
      img: "/Chrome.png",
      label: "Add to Chrome",
    },
    {
      img: "/firefox.png",
      label: "Add to Firefox",
    },
    {
      img: "/edge.png",
      label: "Add to Edge",
    },
  ];

  const handleOpenChange = (index, isOpen) => {
    setOpenIndex(isOpen ? index : null);
  };

  return (
    <div className="flex flex-col gap-4 mb-5 w-[50%]">
      {btns.map((btn, index) => (
        <Popover
          key={index}
          open={openIndex === index}
          onOpenChange={(isOpen) => handleOpenChange(index, isOpen)}
        >
          <PopoverTrigger>
            <Button
              className="dark:bg-[#444] dark:text-white min-w-[200px]"
              onClick={() => handleOpenChange(index, openIndex !== index)}
            >
              <div className="flex items-center gap-2">
                <Image src={btn.img} alt="img" width={22} height={22} />
                <span className="text-[15px]">{btn.label}</span>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent onClose={() => setOpenIndex(null)}>
            <div className="flex items-center gap-4 mt-2">
              <div>
                <Image
                  src="https://i0.wp.com/addoncrop.com/wp-content/uploads/2021/03/Foxified-icon.png"
                  alt="img"
                  height={62}
                  width={62}
                />
              </div>
              <div>
                <h3 className="w-[90%]">
                  Foxified extension is needed to make YouTube Video Downloader
                  work properly.
                </h3>
              </div>
            </div>
            <div className="flex gap-6 items-center justify-center mt-3">
              <button className="flex items-center gap-2 bg-[#F4F4F5] dark:bg-[#555] px-6 py-3 rounded-full">
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
      ))}
    </div>
  );
};

export default DownloadBtn;
