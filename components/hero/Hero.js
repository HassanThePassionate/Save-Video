"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Header from "../common/Header";
import LinkInput from "./LinkInput";
import UserList from "./UserList";
import Blur from "./Blur";

const Hero = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className='max-w-3xl mx-auto my-4 md:my-12 space-y-8'>
      <Card>
        <CardHeader className='p-4 sm:px-10 md:pt-10'>
          <Header />
        </CardHeader>
        <CardContent className='p-4 sm:px-10 pt-8 pb-10 flex gap-4 flex-col flex-wrap'>
          <LinkInput loading={loading} setLoading={setLoading} />
          <h4 className='pt-[32px] pb-4 text-[16px] font-semibold'>
            People with access
          </h4>
          {loading ? (
            <div className='grid'>
              <Blur />
              <Blur />
            </div>
          ) : (
            <UserList />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Hero;
