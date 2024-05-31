"use client";
import Accordin from "@/components/common/Accordin";
import Article from "@/components/common/Article";
import Btn from "@/components/common/Btn";
import React from "react";
import Player from "@/components/player/Player";

const page = () => {
  return (
    <div>
      <Player />
      <Article />
      <Accordin />
      <Btn />
    </div>
  );
};

export default page;
