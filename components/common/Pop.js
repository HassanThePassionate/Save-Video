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

  const finalDuration = sliderValue[1] - sliderValue[0];
  const formatDuration = formatTime(finalDuration);

  useEffect(() => {
    const result = browser();

    if (/OPR\//.test(navigator.userAgent)) {
      result.name = "opera";
    } else if (/Edg\//.test(navigator.userAgent)) {
      result.name = "edge";
    }

    const browserButtons = [
      {
        img: "/Chrome.png",
        label: "Chrome",
        browser: "chrome",
      },
      {
        img: "/firefox.png",
        label: "Firefox",
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

    let detectedBrowser = browserButtons.find((b) => b.browser === result.name);
    const otherBrowsers = browserButtons.filter((b) => b !== detectedBrowser);
    const sorted = detectedBrowser
      ? [detectedBrowser, ...otherBrowsers]
      : browserButtons;

    setSortedBtn(sorted);
  }, []);

  return (
    <>
      <div>
        <AlertDialog>
          <AlertDialogTrigger className="relative">
            <Button className="flex gap-2">
              <VideoIcon />
              Download
            </Button>
            <Link
              href="#"
              className="absolute left-0 right-0 mt-2.5  flex justify-center cursor-pointer"
            >
              <Badge variant="secondary">{formatDuration}</Badge>
            </Link>
          </AlertDialogTrigger>
          <AlertDialogContent className="mb-3  overflow-y-auto max-h-[calc(100vh-4rem)]">
            <div className="flex justify-between items-center gap-10 mb-6 flex-col sm:flex-row mt-3">
              <div>
                <Image src="/img.webp" alt="img" width={365} height={365} />
              </div>
              <div>
                <AlertDialogHeader>
                  <AlertDialogTitle>Browser Extension</AlertDialogTitle>
                  <AlertDialogDescription>
                    <div className="flex items-center gap-1 cursor-pointer">
                      <div className="px-[10px] py-[2px] dark:bg-[#555] bg-[#F6F6F7] rounded">
                        <span className="text-black font-semibold dark:text-white">
                          Chrome Extension
                        </span>
                      </div>
                      <div className="px-[10px] py-[2px] dark:bg-[#555] dark:text-white bg-[#F6F6F7] rounded">
                        <span className="text-black font-semibold dark:text-white">
                          Free & Unlimited
                        </span>
                      </div>
                    </div>
                  </AlertDialogDescription>
                  <p className="mb-[10px]">
                    This component is built using shadcn/ui&apos;s dialog and
                    drawer component, which is built on top of Vaul.
                  </p>
                  <p className="mb-[10px]">
                    It shows a dialog modal for desktop view and a bottom drawer
                    for mobile view.
                  </p>
                </AlertDialogHeader>
              </div>
            </div>
            <div className="divider div-transparent mb-4 "></div>
            <AlertDialogFooter className="gap-2 sm:gap-0">
              {sortedBtn.map((browser, index) => (
                <AlertDialogAction variant="outline" key={browser.img}>
                  <div className="flex items-center gap-2">
                    <Image src={browser.img} alt="img" width={22} height={22} />
                    <span className="text-[15px]">
                      {index === 0 ? `Add to ${browser.label}` : browser.label}
                    </span>
                  </div>
                </AlertDialogAction>
              ))}
            </AlertDialogFooter>
            <p className="mt-2 text-[12px]">
              Foxified extension is needed to make YouTube Video Downloader work
              properly.
            </p>
            <AlertDialogCancel className="rounded-full border  border-black dark:border-white p-1 absolute right-3 top-3">
              <X />
            </AlertDialogCancel>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default Pop;
