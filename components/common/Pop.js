import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { VideoIcon, X } from "lucide-react";
import browser from "browser-detect";
const Pop = () => {
  const result = browser();
  if (result.name === "firefox") {
    alert("yes");
  }
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button className='flex gap-2'>
            <VideoIcon />
            Download
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className='mb-3'>
          <AlertDialogCancel className='rounded-full border border-black dark:border-white p-1'>
            <X />
          </AlertDialogCancel>
          <div className='flex justify-between items-center gap-10 mb-6'>
            <div>
              <Image src='/img.webp' alt='img' width={365} height={365} />
            </div>
            <div>
              <AlertDialogHeader>
                <AlertDialogTitle>Browser Extension</AlertDialogTitle>
                <AlertDialogDescription>
                  <div className='flex items-center gap-1 cursor-pointer'>
                    <div className=' px-[10px] py-[2px] dark:bg-[#555]  bg-[#F6F6F7] rounded'>
                      <span className='text-black font-semibold dark:text-white'>
                        Chrome Extension
                      </span>
                    </div>
                    <div className=' px-[10px] py-[2px] dark:bg-[#555] dark:text-white bg-[#F6F6F7] rounded'>
                      <span className='text-black font-semibold dark:text-white'>
                        Free & Unlimited
                      </span>
                    </div>
                  </div>
                </AlertDialogDescription>
                <p className='mb-[10px]'>
                  This component is built using shadcn/ui&apos;s dialog and
                  drawer component, which is built on top of Vaul.
                </p>
                <p className='mb-[10px]'>
                  It shows a dialog modal for desktop view and a bottom drawer
                  for mobile view.
                </p>
              </AlertDialogHeader>
            </div>
          </div>
          <div className='divider div-transparent mb-4'></div>
          <AlertDialogFooter>
            <AlertDialogAction variant='outline'>
              <div className='flex items-center gap-2 '>
                <Image src='/Chrome.png' alt='img' width={22} height={22} />
                <span className='text-[15px] '>Add to Chorme</span>
              </div>
            </AlertDialogAction>
            <AlertDialogAction>
              <div className='flex items-center gap-2 '>
                <Image src='/firefoxs.png' alt='img' width={22} height={22} />
                <span className='text-[15px] '>Firefox</span>
              </div>
            </AlertDialogAction>
            <AlertDialogAction>
              <div className='flex items-center gap-2 '>
                <Image src='/edges.webp' alt='img' width={22} height={22} />
                <span className='text-[15px] '>Edge</span>
              </div>
            </AlertDialogAction>
            <AlertDialogAction>
              <div className='flex items-center gap-2 '>
                <Image src='/opera.png' alt='img' width={22} height={22} />
                <span className='text-[15px] '>Opera</span>
              </div>
            </AlertDialogAction>
          </AlertDialogFooter>
          <p className='mt-2 text-[12px]'>
            Foxified extension is needed to make YouTube Video Downloader work
            properly.
          </p>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Pop;
