"use client";
import Cuts from "@/components/cuts/Cuts";
import Accordin from "@/components/common/Accordin";
import Article from "@/components/common/Article";
import Btn from "@/components/common/Btn";
import React from "react";
import { useSelector } from "react-redux";
const page = () => {
  const toggled = useSelector((state) => state.toggle.toggled);
  return (
    <div>
      <Cuts />

      {toggled && (
        <>
          <Article />
          <Accordin />
          <Btn />
        </>
      )}
    </div>
  );
};

export default page;
