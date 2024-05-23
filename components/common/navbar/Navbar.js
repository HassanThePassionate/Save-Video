"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

import MobileNav from "./MobileNav";
import DropDown from "./DropDown";
import Image from "next/image";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className='wrap border-b border-[#f3f3f3] dark:border-[#333]'>
        <div className='container'>
          <div className='flex items-center justify-between px-[10px] py-5'>
            {toggle ? (
              <Menu onClick={handleMenu} className='ico' />
            ) : (
              <RxCross2 onClick={handleMenu} className='ico' />
            )}

            <div className='Desk_logo text-[16px] font-bold flex items-center gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 256 256'
                className='h-6 w-6'
              >
                <rect width='256' height='256' fill='none'></rect>
                <line
                  x1='208'
                  y1='128'
                  x2='128'
                  y2='208'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='16'
                ></line>
                <line
                  x1='192'
                  y1='40'
                  x2='40'
                  y2='192'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='16'
                ></line>
              </svg>
              <span>SaveVideo</span>
            </div>
            <div className='flex items-center gap-4'>
              <NavigationMenu>
                <NavigationMenuList>
                  <div className='nav flex items-center '>
                    <NavigationMenuItem>
                      <Link href='/' legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Youtube To MP4
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href='/cut' legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Youtube Cutter
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </div>

                  <div className='theme'></div>

                  <DropDown />
                  <NavigationMenuItem>
                    <button className='px-5 py-3 hidden bg-black text-white sm:flex items-center gap-2 text-base font-semibold rounded-md ml-[30px] transition-all hover:bg-[#444] dark:hover:bg-[#555] dark:bg-[#333]'>
                      <Image
                        src='/Chrome.png'
                        alt='img'
                        width={20}
                        height={20}
                      />
                      Add to chorme
                    </button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </div>
      <MobileNav toggle={toggle} />
    </>
  );
};

export default Navbar;
