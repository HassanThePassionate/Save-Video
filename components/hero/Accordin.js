import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "../ui/card";
const Accordin = () => {
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
    <div className='max-w-3xl  mx-auto my-4 md:my-12 space-y-8'>
      <Card>
        <CardHeader className='p-4 sm:px-10 pt-10'>
          <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight border-b pb-2'>
            The King&apos;s Plan
          </h2>
        </CardHeader>
        <CardContent className='p-4 sm:px-10 pt-4 pb-10'>
          {data.map((ele) => {
            return (
              <Accordion type='single' collapsible key={ele.title}>
                <AccordionItem value='item-1'>
                  <AccordionTrigger>{ele.title}</AccordionTrigger>
                  <AccordionContent>{ele.content}</AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default Accordin;
