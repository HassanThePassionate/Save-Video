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
import { X } from "lucide-react";
const Pop = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button>Download</Button>
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
                    <div className='flex items-center gap-1 px-[10px] py-[2px] dark:bg-[#555]  bg-[#F6F6F7] rounded'>
                      <span className='text-black font-semibold dark:text-white'>
                        Chrome Extension
                      </span>
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-3 w-3 text-black dark:text-white'
                      >
                        <path
                          d='M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z'
                          fill='currentColor'
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </div>
                    <div className='flex items-center gap-1 px-[10px] py-[2px] dark:bg-[#555] dark:text-white bg-[#F6F6F7] rounded'>
                      <span className='text-black font-semibold dark:text-white'>
                        Free & Unlimited
                      </span>
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-3 w-3 text-black dark:text-white'
                      >
                        <path
                          d='M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z'
                          fill='currentColor'
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
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
                <span className='text-[15px] '>Add to Firefox</span>
              </div>
            </AlertDialogAction>
            <AlertDialogAction>
              <div className='flex items-center gap-2 '>
                <Image src='/edges.webp' alt='img' width={22} height={22} />
                <span className='text-[15px] '>Add to Edge</span>
              </div>
            </AlertDialogAction>
            <AlertDialogAction>
              <div className='flex items-center gap-2 '>
                <Image src='/opera.png' alt='img' width={22} height={22} />
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
