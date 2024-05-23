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

// import Image from "next/image";
// import { RxCross2 } from "react-icons/rx";
import { Button } from "../ui/button";
import Link from "next/link";
const Pop = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button>Download</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Credenza</AlertDialogTitle>
            <AlertDialogDescription>
              A responsive modal component for shadcn/ui.
            </AlertDialogDescription>
            <p className='mb-[10px]'>
              This component is built using shadcn/ui's dialog and drawer
              component, which is built on top of Vaul.
            </p>
            <p className='mb-[10px]'>
              It shows a&nbsp;
              <Link href='#' className='underline'>
                dialog
              </Link>
              &nbsp;
              <Link href='#' className='underline'>
                modal
              </Link>
              &nbsp; for desktop view and a&nbsp;
              <Link href='#' className='underline'>
                bottom drawer
              </Link>
              &nbsp;for mobile view.
            </p>
            <p className='mb-[10px]'>
              The documentation for installation and usage can be found&nbsp;
              <Link href='#' className='underline'>
                here
              </Link>
              .
            </p>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Documentation</AlertDialogAction>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Pop;
