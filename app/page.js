"use client";
import React from "react";
import Hero from "@/components/hero/Hero";
import Article from "@/components/common/Article";
// Corrected the import
import Btn from "@/components/common/Btn";
import { useSelector } from "react-redux";
import Accordin from "@/components/common/Accordin";

const Page = () => {
  const toggled = useSelector((state) => state.toggle.toggled);
  return (
    <>
      <Hero />
      {toggled && (
        <>
          <Article />
          <Accordin />
          <Btn />
        </>
      )}
    </>
  );
};

export default Page;
