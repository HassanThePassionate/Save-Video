import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Article from "@/components/hero/Article";
import Accordin from "@/components/hero/Accordin";
import Button from "@/components/hero/Button";
import Footer from "@/components/footer/Footer";

const page = () => {
  return (
    <>
      <Navbar />

      <Hero />
      <Article />
      <Accordin />
      <Button />
      <Footer />
    </>
  );
};

export default page;
