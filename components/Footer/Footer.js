import React from "react";
import Menu_Iteams from "./menuIteams/Menu_Iteams";
import Logo from "../common/Logo";

const Footer = () => {
  return (
    <footer className='wrap border-t border-[#f3f3f3] dark:border-[#333]'>
      <div className='container'>
        <div className='flex items-center justify-center sm:justify-between px-[10px] py-[20px] gap-3  flex-wrap  '>
          <Logo />
          <Menu_Iteams />
          <div className='copyright'>
            <span className='text-sm text-[#888] text-center'>
              &copy; SaveVideo. 2018-2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
