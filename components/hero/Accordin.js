import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    <div className=" max-w-[768px] sm:mx-auto  my-12">
      <div className="box  sm:p-[40px] rounded-lg sm:shadow-lg sm:border-[#dadada] sm:border dark:border-[#333]">
        <h2 className=" pb-2 border-[#dadada] border-b text-3xl font-semibold dark:border-[#333]">
          The King&apos;s Plan
        </h2>
        <div className="py-[30px]">
          {data.map((ele) => {
            return (
              <Accordion type="single" collapsible key={ele.title}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{ele.title}</AccordionTrigger>
                  <AccordionContent>{ele.content}</AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordin;
