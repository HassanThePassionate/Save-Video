import React from "react";
import MenuItems from "./menuIteams/Menu_Items";
import Logo from "../common/Logo";

const Footer = () => {
  return (
    <footer className="wrap border-t border-[#f3f3f3] dark:border-[#333]">
      <div className="container">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between px-4 py-6 gap-3">
          <Logo />
          <MenuItems />
          <div className="text-center sm:text-left">
            <span className="text-sm text-[#888]">
              &copy; SaveVideo. 2018-2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
