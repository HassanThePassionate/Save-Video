import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileNav = ({ toggle }) => {
  return (
    <div>
      <div
        className={`mobile_nav h-[80vh] bg-[#f2f2f2]  dark:bg-[#333]   mt-1 ${
          toggle === true ? " translate-y-[-150%]" : "float-right"
        }  transition-all duration-1000 ease-in-out right-0 absolute z-10 rounded-sm p-6`}
      >
        <div className='logo text-[16px] font-bold flex items-center gap-3 pb-4 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 256 256'
            class='h-6 w-6'
          >
            <rect width='256' height='256' fill='none'></rect>
            <line
              x1='208'
              y1='128'
              x2='128'
              y2='208'
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='16'
            ></line>
            <line
              x1='192'
              y1='40'
              x2='40'
              y2='192'
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='16'
            ></line>
          </svg>
          <span>SaveVideo</span>
        </div>
        <ul className='flex flex-col gap-8'>
          <li>
            <Link href='#'>Youtube To MP4</Link>
          </li>
          <li>
            <Link href='/cut'>Youtube Cutter</Link>
          </li>
          <li>
            <Link href='#'>Youtube To MP3</Link>
          </li>
          <li>
            <Link href='#'>Browser Extension</Link>
          </li>
          <li>
            <Link href='#'>Help</Link>
          </li>
          <div className='flex items-end h-[35vh]'>
            <button className='px-5 py-3 hidden bg-black text-white lg:flex items-center justify-center  gap-2 text-base font-semibold rounded-md ml-[30px] transition-all hover:bg-[#444] dark:hover:bg-[#555] dark:bg-[#333]'>
              <Image src='/Chrome.png' alt='img' width={20} height={20} />
              Add to chorme
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
