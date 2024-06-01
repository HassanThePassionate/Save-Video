import React, { useEffect, useState } from "react";
import Image from "next/image";
import browser from "browser-detect";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const Btnpop = () => {
  const [open, setOpen] = useState(false);
  const [browserName, setBrowserName] = useState("");
  useEffect(() => {
    const result = browser();
    let name = result.name;
    if (/OPR\//.test(navigator.userAgent)) {
      name = "opera";
    } else if (/Edg\//.test(navigator.userAgent)) {
      name = "edge";
    }

    setBrowserName(name);
  }, []);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <button
          id="browser_btn"
          onClick={() => setOpen(!open)}
          className="px-5 py-3 bg-black text-white lg:flex items-center gap-2 text-base font-semibold rounded-md  transition-all hover:bg-[#444] dark:hover:bg-[#555] dark:bg-[#333]"
        >
          <Image src={`/${browserName}.png`} alt="img" width={20} height={20} />
          Add to&nbsp;
          {browserName.charAt(0).toUpperCase() + browserName.slice(1)}
        </button>
      </PopoverTrigger>
      <PopoverContent onClose={() => setOpen(false)}>
        <div className="flex items-center gap-4 mt-2 ">
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
              Foxified extension is needed to make YouTube Video Downloader work
              properly.
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
  );
};

export default Btnpop;
