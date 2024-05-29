import Image from "next/image";
import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
const page = () => {
  return (
    <div className='max-w-6xl mx-auto my-4 md:my-12 space-y-8'>
      <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:grid-rows-[auto_1fr]  lg:gap-y-12 px-4'>
        <div className='lg:pl-20 '>
          <div className='max-w-xs px-2.5 lg:max-w-none'>
            <Image
              src='/about.webp'
              width={433}
              height={433}
              className=' rotate-[4deg] rounded-md mb-10'
            />
          </div>
        </div>
        <div className=' lg:order-first lg:row-span-2'>
          <article>
            <h1 className=' text-5xl font-bold leading-[56px]'>
              I’m Spencer Sharp. I live in New York City, where I design the
              future.
            </h1>
            <p className=' leading-7 text-[16px] my-6 '>
              I’ve loved making things for as long as I can remember, and wrote
              my first program when I was 6 years old, just two weeks after my
              mom brought home the brand new Macintosh LC 550 that I taught
              myself to type on.
            </p>
            <p className=' leading-7 text-[16px] mb-6 '>
              The only thing I loved more than computers as a kid was space.
              When I was 8, I climbed the 40-foot oak tree at the back of our
              yard while wearing my older sister’s motorcycle helmet, counted
              down from three, and jumped — hoping the tree was tall enough that
              with just a bit of momentum I’d be able to get to orbit.
            </p>
            <p className=' leading-7 text-[16px] my-6 '>
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
        </div>

        <div className='lg:pl-20'>
          <ul className='flex flex-col gap-5 mb-8'>
            <li>
              <Link
                href='#'
                className='flex items-center gap-3 text-sm font-medium'
              >
                <span>
                  <RiTwitterXLine />
                </span>
                <span>Follow on X</span>
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='flex items-center gap-3 text-sm font-medium'
              >
                <span>
                  <FaInstagram />
                </span>
                <span>Follow on Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='flex items-center gap-3 text-sm font-medium'
              >
                <span>
                  <FaGithub />
                </span>
                <span>Follow on Github</span>
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='flex items-center gap-3 text-sm font-medium'
              >
                <span>
                  <FaLinkedin />
                </span>
                <span>Follow on Linkedin</span>
              </Link>
            </li>
          </ul>
          <div className='divider div-transparent'></div>
          <div className='flex items-center gap-3 mt-6'>
            <CiMail />
            <Link href='#' className='text-sm font-medium'>
              web@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
