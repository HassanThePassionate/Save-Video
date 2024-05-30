import React, { useState, useEffect } from "react";
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
import { Badge } from "../ui/badge";
import Link from "next/link";

const Pop = ({ sliderValue, formatTime }) => {
  const [sortedBtn, setSortedBtn] = useState([]);
  const finalduration = sliderValue[1] - sliderValue[0];
  let formatduration = formatTime(finalduration);

  useEffect(() => {
    const result = browser();

    // Adjust detection for Opera and Edge
    if (/OPR\//.test(navigator.userAgent)) {
      result.name = "opera";
    } else if (/Edg\//.test(navigator.userAgent)) {
      result.name = "edge";
    }

    const btn = [
      {
        img: "/Chrome.png",
        label: "Chrome",
        browser: "chrome",
      },
      {
        img: "/firefox.png",
        label: "Fire Fox",
        browser: "firefox",
      },
      {
        img: "/edge.png",
        label: "Edge",
        browser: "edge",
      },
      {
        img: "/opera.png",
        label: "Opera",
        browser: "opera",
      },
    ];

    let detectedBrowser = btn.find((b) => {
      if (result.name === "chrome" && b.browser === "chrome") return true;
      if (result.name === "firefox" && b.browser === "firefox") return true;
      if (result.name === "edge" && b.browser === "edge") return true;
      if (result.name === "opera" && b.browser === "opera") return true;
      return false;
    });

    const otherBrowsers = btn.filter((b) => b !== detectedBrowser);
    const sorted = detectedBrowser ? [detectedBrowser, ...otherBrowsers] : btn;

    setSortedBtn(sorted);
  }, []);

  return (
    <>
      <div>
        <AlertDialog>
          <AlertDialogTrigger className='relative'>
            <Button className='flex gap-2'>
              <VideoIcon />
              Download
            </Button>
            <Link
              href='#'
              className='absolute left-0 right-0 mt-2.5  flex justify-center cursor-pointer'
            >
              <Badge variant='secondary'>{formatduration}</Badge>
            </Link>
          </AlertDialogTrigger>
          <AlertDialogContent className='mb-3 overflow-y-auto max-h-[calc(100vh-4rem)]'>
            <AlertDialogCancel className='rounded-full border border-black dark:border-white p-1'>
              <X />
            </AlertDialogCancel>
            <div className='flex justify-between items-center gap-10 mb-6 flex-col sm:flex-row'>
              <div>
                <Image src='/img.webp' alt='img' width={365} height={365} />
              </div>
              <div>
                <AlertDialogHeader>
                  <AlertDialogTitle>Browser Extension</AlertDialogTitle>
                  <AlertDialogDescription>
                    <div className='flex items-center gap-1 cursor-pointer'>
                      <div className='px-[10px] py-[2px] dark:bg-[#555] bg-[#F6F6F7] rounded'>
                        <span className='text-black font-semibold dark:text-white'>
                          Chrome Extension
                        </span>
                      </div>
                      <div className='px-[10px] py-[2px] dark:bg-[#555] dark:text-white bg-[#F6F6F7] rounded'>
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
            <AlertDialogFooter className='gap-2 sm:gap-0'>
              {sortedBtn.map((e, index) => (
                <AlertDialogAction variant='outline' key={e.img}>
                  <div className='flex items-center gap-2'>
                    <Image src={e.img} alt='img' width={22} height={22} />
                    <span className='text-[15px]'>
                      {index === 0 ? `Add to ${e.label}` : e.label}
                    </span>
                  </div>
                </AlertDialogAction>
              ))}
            </AlertDialogFooter>
            <p className='mt-2 text-[12px]'>
              Foxified extension is needed to make YouTube Video Downloader work
              properly.
            </p>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default Pop;
