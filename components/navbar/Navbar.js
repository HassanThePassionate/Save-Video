"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "../common/Logo";
import MobileNav from "./MobileNav";
import DropDown from "./DropDown";
import Btnpop from "./Btnpop";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="wrap border-b border-[#f3f3f3] dark:border-[#333]">
        <div className="container">
          <div className="flex items-center justify-between px-[10px] py-5">
            <Logo menu={toggleMenu} />
            <div className="flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <div className="nav flex items-center gap-2">
                    <NavigationMenuItem>
                      <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Youtube To MP4
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/player" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Youtube Cutter
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </div>

                  <div className="theme"></div>

                  <DropDown />
                  {toggle ? (
                    <Menu
                      onClick={toggleMenu}
                      className="ico absoulte right-0"
                    />
                  ) : (
                    <RxCross2 onClick={toggleMenu} className="ico" size={24} />
                  )}
                  <NavigationMenuItem>
                    <div className="ml-[30px] hidden lg:flex">
                      <Btnpop />
                    </div>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
        <MobileNav toggle={toggle} menu={toggleMenu} />
      </div>
    </>
  );
};

export default Navbar;
