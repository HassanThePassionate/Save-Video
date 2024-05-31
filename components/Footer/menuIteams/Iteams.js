import Link from "next/link";
import React from "react";

const Iteams = ({ text, href }) => {
  return (
    <Link href={href} className=' hover:underline '>
      {text}
    </Link>
  );
};

export default Iteams;
