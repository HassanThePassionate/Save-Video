import React from "react";
import Iteams from "./Iteams";

const Menu_Iteams = () => {
  const Iteam = [
    { href: "/privacy", text: "Cookies Policy" },
    { href: "#", text: "EULA" },
    { href: "#", text: "Terms and Conditions" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact Us" },
  ];
  return (
    <div>
      <ul className="menu flex items-center gap-8 flex-wrap justify-center">
        {Iteam.map((item, index) => (
          <li key={index}>
            <Iteams href={item.href} text={item.text} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu_Iteams;
