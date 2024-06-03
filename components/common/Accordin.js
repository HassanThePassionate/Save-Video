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

const Accordin = () => {
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
    <div className="max-w-3xl mx-auto my-4 md:my-12 space-y-8">
      <Card>
        <CardHeader className="p-4 sm:px-10 pt-10">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight border-b pb-2">
            The King&apos;s Plan
          </h2>
        </CardHeader>
        <CardContent className="p-4 sm:px-10 pt-4 pb-10">
          {data.map((item) => (
            <Accordion type="single" collapsible key={item.title}>
              <AccordionItem value={item.title}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Accordin;
