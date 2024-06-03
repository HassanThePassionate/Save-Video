"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSelector } from "react-redux";

const Faqs = () => {
  const toggled = useSelector((state) => state.toggle.toggled);
  const data = [
    {
      title: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Is it styled?",
      content:
        "Yes. It comes with default styles that match the other components' aesthetic.",
    },
    {
      title: "Is it animated?",
      content:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ];

  if (toggled) return null;

  return (
    <div>
      <h2 className="scroll-m-20 text-xl sm:text-3xl font-semibold mb-4 tracking-tight md:px-0 border-b border-black dark:border-[#222] py-4">
        Frequently Asked Questions
      </h2>

      {data.map((faq) => (
        <Accordion
          type="single"
          collapsible
          key={faq.title}
          className="mb-4 md:px-0"
        >
          <AccordionItem value={faq.title}>
            <AccordionTrigger>{faq.title}</AccordionTrigger>
            <AccordionContent>{faq.content}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default Faqs;
