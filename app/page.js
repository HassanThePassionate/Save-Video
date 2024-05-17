import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar/Navbar";
const page = () => {
  return (
    <>
      <Navbar />
      <div className='flex items-center flex-col justify-center '>
        <h1 className='text-center mt-[50px]  text-[50px]'>
          Build a Professional Ui In Shadcn
        </h1>
        <p className='text-center w-[30%] mt-[20px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quibusdam quaerat sequi tenetur temporibus enim vero, aperiam, nihil
          ipsum corrupti dolor saepe vitae veritatis voluptate omnis sunt alias
          blanditiis maiores.
        </p>
        <div className='flex items-center gap-5 mt-[30px]'>
          <Button variant='outline' size='lg'>
            GitHub
          </Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </>
  );
};

export default page;
