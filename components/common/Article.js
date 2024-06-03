"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useSelector } from "react-redux";

const Article = () => {
  const toggled = useSelector((state) => state.toggle.toggled);

  if (toggled) return null;

  return (
    <div className="max-w-3xl mx-auto my-4 md:my-12 space-y-8">
      <Card>
        <CardHeader className="p-4 sm:px-10 md:pt-10">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight border-b pb-2">
            The King&apos;s Plan
          </h2>
          <p className="pt-6 text-base">
            The king thought long and hard, and finally came up with a brilliant
            plan: he would tax the jokes in the kingdom.
          </p>
        </CardHeader>
        <CardContent className="p-4 sm:px-10 pt-4 pb-10">
          <h3 className="font-heading scroll-m-20 text-2xl font-semibold tracking-tight">
            The Joke Tax
          </h3>
          <p className="py-6 text-base">
            The king&apos;s subjects were amused. They grumbled and complained,
            but the king was firm:
          </p>
          <ul className="ml-4 list-inside list-disc space-y-2">
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners: 20 gold coins</li>
          </ul>
          <p className="py-5 text-base">
            As a result, people stopped telling jokes, and the kingdom fell into
            gloom. But there was one person who refused to let the king&apos;s
            foolishness get him down: a court jester named Jokester.
          </p>
          <h3 className="font-heading scroll-m-20 text-2xl font-semibold tracking-tight">
            Jokester&apos;s Revolt
          </h3>
          <p className="pt-6 text-base">
            Jokester began sneaking into the castle in the middle of the night
            and leaving jokes all over the place: under the king&apos;s pillow,
            in his soup, even in the royal toilet. The king was furious, but he
            couldn&apos;t seem to stop Jokester.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Article;
