import Image from "next/image";
import React from "react";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import Faqs from "@/components/common/Faqs";
import DownloadBtn from "@/components/common/DownloadBtn";

const Page = () => {
  return (
    <div className='max-w-6xl mx-auto my-4 md:my-12 space-y-8'>
      <div className='h-full'>
        <div className='flex flex-col lg:flex-row justify-between px-4'>
          <div className='flex-1 order-2 lg:order-1'>
            <article>
              <h1 className='text-5xl font-bold leading-[56px]'>
                I’m Spencer Sharp. I live in New York City, where I design the
                future.
              </h1>
              <p className='leading-7 text-[16px] my-6'>
                I’ve loved making things for as long as I can remember, and
                wrote my first program when I was 6 years old, just two weeks
                after my mom brought home the brand new Macintosh LC 550 that I
                taught myself to type on.
              </p>
              <p className='leading-7 text-[16px] mb-6'>
                The only thing I loved more than computers as a kid was space.
                When I was 8, I climbed the 40-foot oak tree at the back of our
                yard while wearing my older sister’s motorcycle helmet, counted
                down from three, and jumped — hoping the tree was tall enough
                that with just a bit of momentum I’d be able to get to orbit.
              </p>
              <p className='leading-7 text-[16px] my-6'>
                I spent the next few summers indoors working on a rocket design,
                while I recovered from the multiple surgeries it took to fix my
                badly broken legs. It took nine iterations, but when I was 15 I
                sent my dad’s Blackberry into orbit and was able to transmit a
                photo back down to our family computer from space.
              </p>
              <p>
                Today, I’m the founder of Planetaria, where we’re working on
                civilian space suits and manned shuttle kits you can assemble at
                home so that the next generation of kids really can make it to
                orbit — from the comfort of their own backyards.
              </p>
            </article>
            <div className='block lg:hidden mt-6'>
              <DownloadBtn />
            </div>
            <div className='faq-section px-4 lg:px-0 mt-4'>
              <Faqs />
            </div>
          </div>

          <div className='lg:pl-20 lg:sticky lg:top-14 self-start order-1 lg:order-2'>
            <div className='max-w-xs px-2.5 lg:max-w-none'>
              <Image
                src='/about.webp'
                alt='img'
                width={433}
                height={433}
                className='rotate-[4deg] rounded-md mb-10 sm:mt-0 mt-10 md:mt-10'
              />
            </div>
            <div className='hidden lg:block order-3 '>
              <DownloadBtn />
            </div>

            <div className='divider div-transparent  hidden lg:flex'></div>
            <div className=' items-center gap-3 mt-6 hidden lg:flex'>
              <CiMail />
              <Link href='#' className='text-sm font-medium hover:underline'>
                web@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
