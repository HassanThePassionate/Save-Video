import React from "react";
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
import Link from "next/link";
import Image from "next/image";
const Pop = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button>Download</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <div className='flex justify-between items-center gap-10'>
            <div>
              <Image src='/img.webp' alt='img' width={365} height={365} />
            </div>
            <div>
              <AlertDialogHeader>
                <AlertDialogTitle>Browser Extension</AlertDialogTitle>
                <AlertDialogDescription>
                  A responsive modal component for shadcn/ui.
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
          <AlertDialogFooter className='mt-2'>
            <AlertDialogAction>
              <div className='flex items-center gap-2 '>
                <Image src='/Chrome.png' alt='img' width={22} height={22} />
                <span className='text-[15px] uppercase'>Chorme</span>
              </div>
            </AlertDialogAction>
            <AlertDialogAction>
              <div className='flex items-center gap-2 '>
                <Image src='/firefoxs.png' alt='img' width={22} height={22} />
                <span className='text-[15px] uppercase'>Fire Fox</span>
              </div>
            </AlertDialogAction>
            {/* <AlertDialogAction>
              <div className='flex items-center gap-2 '>
                <Image src='/edges.webp' alt='img' width={22} height={22} />
                <span className='text-[15px] uppercase'>Edge</span>
              </div>
            </AlertDialogAction> */}
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Pop;
