"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader } from "../ui/card";

const Faqs = () => {
  const toggled = useSelector((state) => state.toggle.toggled);
  const data = [
    {
      title: "Which browsers does Savemp4 YouTube to mp4 converter work with?",
      content:
        "It works for all browsers, including Chrome, Firefox, Opera, Safari etc.",
    },
    {
      title: "Which operating systems does the Savevideo converter work with?",
      content:
        "SaveVideo is the ultimate online tool for converting Youtube videos to mp4 and it's compatible with Android, iOS, iPad, MAC, and Windows devices.",
    },
    {
      title: "Can I change Bitrates manually?",
      content:
        "Yes, you can select your favourite MP4 bitrates from the settings available in the header menu.",
    },
    {
      title: "Where are mp3s saved after being downloaded?",
      content:
        "When downloading files, they are usually saved into whatever folder you have set as your default. Your browser usually sets this folder for you. In browser settings, you can manually change and choose the destination folder for your downloaded audio files.",
    },
  ];

  return (
    !toggled && (
      <div>
        <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight  py-10'>
          Frequently Ask Questions
        </h2>

        {data.map((ele) => (
          <Accordion type='single' collapsible key={ele.title} className='mb-4'>
            <AccordionItem
              value='item-1'
              className='border-none bg-[#F4F4F5] dark:bg-[#444] px-4 rounded'
            >
              <AccordionTrigger>{ele.title}</AccordionTrigger>
              <AccordionContent>{ele.content}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    )
  );
};

export default Faqs;
