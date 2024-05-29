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
      title: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Is it styled",
      content:
        "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
      title: "Is it animated?",
      content:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ];

  return (
    !toggled && (
      <div>
        <h2 className='scroll-m-20 text-xl sm:text-3xl font-semibold mb-4 tracking-tight px-4 md:px-0 border-b border-black py-4'>
          Frequently Ask Questions
        </h2>

        {data.map((ele) => (
          <Accordion
            type='single'
            collapsible
            key={ele.title}
            className='mb-4 px-4 md:px-0 '
          >
            <AccordionItem value='item-1'>
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
