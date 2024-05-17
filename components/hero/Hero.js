import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Download, Music, Scissors } from "lucide-react";

const Hero = () => {
  return (
    <div className=' max-w-[768px] mx-auto p-4 my-12'>
      <div className='box p-[40px] rounded-lg shadow-lg'>
        <h1 className=' text-4xl font-bold '>Youtube Video Downloader</h1>
        <p className='text-lg text-[#71717a] mb-6 mt-1'>
          A carousel with motion and swipe build using Embla.
        </p>
        <div className='flex gap-3'>
          <Input type='text' />
          <Button variant='secondary'>Paste link</Button>
        </div>
        <h4 className='pt-[32px] pb-4 text-[16px] font-semibold'>
          People with access
        </h4>
        <div className='grid grid-cols-2 items-center pb-[80px] '>
          <div>
            <div className='flex items-center gap-4 mb-[30px]'>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h5 className='text-[16px] font-semibold'>Olivia Martin</h5>
                <Badge variant='outline'>8:47</Badge>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h5 className='text-[16px] font-semibold'>Olivia Martin</h5>
                <Badge variant='outline'>8:47</Badge>
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-4 mb-[30px]'>
              <div className='flex items-center '>
                <Button className='rounded-r-none'>
                  <Download className='h-4 w-4 ' />
                </Button>
                <Button variant='outline' className='rounded-l-none'>
                  Select the Image
                </Button>
              </div>
              <Button variant='outline' size='icon'>
                <Scissors className='h-4 w-4 ' />
              </Button>
              <Button variant='outline' size='icon'>
                <Music className='h-4 w-4 ' />
              </Button>
            </div>
            <div className='flex items-center gap-4 '>
              <div className='flex items-center'>
                <Button className='rounded-r-none'>
                  <Download className='h-4 w-4 ' />
                </Button>
                <Button variant='outline' className='rounded-l-none'>
                  Select the Image
                </Button>
              </div>
              <Button variant='outline' size='icon'>
                <Scissors className='h-4 w-4 ' />
              </Button>
              <Button variant='outline' size='icon'>
                <Music className='h-4 w-4 ' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
