import React from "react";
import Hero from "@/components/hero/Hero";
import Article from "@/components/common/Article";
import Btn from "@/components/common/Btn";
import Accordin from "@/components/common/Accordin";
import Session from "@/components/common/Session";

const Page = () => {
  return (
    <>
      <Session />
      <Hero />
      <Article />
      <Accordin />
      <Btn />
    </>
  );
};

export default Page;
