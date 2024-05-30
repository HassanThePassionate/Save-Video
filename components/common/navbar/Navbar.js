"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import MobileNav from "./MobileNav";
import DropDown from "./DropDown";
import Image from "next/image";
import browser from "browser-detect";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(true);
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

  const handleClick = () => {
    if (!toggle) {
      setToggle(true);
    }
  };

  const handleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className='wrap border-b border-[#f3f3f3] dark:border-[#333]'>
        <div className='container'>
          <div className='flex items-center justify-between px-[10px] py-5'>
            <Link
              href='/'
              onClick={handleClick}
              className='Desk_logo text-[16px] font-bold flex items-center gap-3 '
            >
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
              <Badge className='sm:flex px-1 text-[10px] sm:text-[12px]'>
                100% Ad-Free!
              </Badge>
            </Link>
            <div className='flex items-center gap-4'>
              <NavigationMenu>
                <NavigationMenuList>
                  <div className='nav flex items-center gap-2'>
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
                  {toggle ? (
                    <Menu
                      onClick={handleMenu}
                      className='ico absoulte right-0'
                    />
                  ) : (
                    <RxCross2 onClick={handleMenu} className='ico' size={24} />
                  )}
                  <NavigationMenuItem>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger>
                        <button
                          id='browser_btn'
                          onClick={() => setOpen(!open)}
                          className='px-5 py-3 bg-black text-white lg:flex items-center gap-2 text-base font-semibold rounded-md ml-[30px] transition-all hover:bg-[#444] dark:hover:bg-[#555] dark:bg-[#333]'
                        >
                          <Image
                            src={`/${browserName}.png`}
                            alt='img'
                            width={20}
                            height={20}
                          />
                          Add to&nbsp;
                          {browserName.charAt(0).toUpperCase() +
                            browserName.slice(1)}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent onClose={() => setOpen(false)}>
                        <div className='flex items-center gap-4 mt-2 '>
                          <div>
                            <Image
                              src='https://i0.wp.com/addoncrop.com/wp-content/uploads/2021/03/Foxified-icon.png'
                              alt='img'
                              height={62}
                              width={62}
                            />
                          </div>
                          <div>
                            <h3 className='w-[90%]'>
                              Foxified extension is needed to make YouTube Video
                              Downloader work properly.
                            </h3>
                          </div>
                        </div>
                        <div className='flex gap-6 items-center justify-center mt-3'>
                          <button className='flex items-center gap-2 bg-[#F4F4F5] dark:bg-[#555] px-6 py-3 rounded-full'>
                            <Image
                              src='https://i3.wp.com/addoncrop.com/wp-content/themes/addoncrop/assets/images/icon-webstore.png'
                              alt='img'
                              height={20}
                              width={20}
                            />
                            Let&apos;s Go
                          </button>
                          <button className='hover:underline'>
                            Watch video
                          </button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
        <MobileNav toggle={toggle} menu={handleClick} />
      </div>
    </>
  );
};

export default Navbar;
