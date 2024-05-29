import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const DownloadBtn = () => {
  const btn = [
    {
      img: "/Chrome.png",
      label: "Add to Chrome",
    },
    {
      img: "/firefoxs.png",
      label: "Add to Fire Fox",
    },
    {
      img: "/edges.webp",
      label: "Add to Edge",
    },
  ];
  return (
    <div className='flex flex-col gap-4 mb-5'>
      {btn.map((e, index) => (
        <Button className='dark:bg-[#444] dark:text-white' key={index}>
          <div className='flex items-center gap-2'>
            <Image src={e.img} alt='img' width={22} height={22} />
            <span className='text-[15px]'>{e.label}</span>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default DownloadBtn;
