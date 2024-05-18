import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <div className=" max-w-[768px] mx-auto p-4 my-12">
      <div className="flex flex-col items-center justify-center">
        <h3 className=" text-xl font-light ">Get Tairo now</h3>
        <p className=" text-sm tetx-[#6b7280] w-8/12 text-center py-[10px]">
          Don&apos;t waste time, it&apos;s time to kickstart your new app. Start
          building your next project with Tairo today.
        </p>
        <button className="px-7 py-3 bg-black text-white flex items-center gap-2 text-base font-semibold rounded-md mb-[5px] ">
          <Image
            src="https://save-video-two.vercel.app/_next/image?url=%2Fchrome.png&w=16&q=75"
            alt="img"
            width={12}
            height={12}
          />
          Add to chorme
        </button>
        <p className="text-sm text-[#9ca3af]">
          Made by{" "}
          <Link href="#" className="hover:underline">
            cssninja.io
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Button;
