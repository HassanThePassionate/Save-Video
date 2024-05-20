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
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
const Pop = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader className='relative'>
            <AlertDialogTitle>
              <AlertDialogCancel>
                <RxCross2 />
              </AlertDialogCancel>
              <div className=' flex justify-between items-center '>
                <div>
                  <h2 className='text-lg leading-8 mb-5'>
                    Last chance on our special deals
                  </h2>
                  <p className='text-base mb-8'>
                    Buy any item from this collection and get the second one at
                    50% off.
                  </p>
                  <div className='px-[30px] cursor-pointer py-[11px] border-[2px] border-black w-fit hover:bg-black hover:text-white transition-all  '>
                    COPY CODE
                  </div>
                </div>
                <div className='img_div'>
                  <Image
                    src='https://m2.getsitecontrol.com/images/32013/e8927050751a639b27ae40ecedc48f81_220016835.jpg'
                    alt='img'
                    width={500}
                    height={296}
                    className='img'
                  />
                </div>
              </div>
            </AlertDialogTitle>
            {/* <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription> */}
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Pop;
