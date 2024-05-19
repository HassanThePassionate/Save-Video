import React from "react";

const Article = () => {
  return (
    <div className=" max-w-[768px] sm:mx-auto  my-12">
      <div className="box  sm:p-[40px] rounded-lg sm:shadow-lg sm:border-[#dadada] sm:border dark:border-[#333]">
        <h2 className=" pb-2 border-[#dadada] border-b text-3xl font-semibold dark:border-[#333]">
          The King&apos;s Plan
        </h2>
        <p className=" py-8 text-base">
          The king thought long and hard, and finally come up with a brilliant
          plan: he would tax the jokes in the kingdom
        </p>
        <h3 className=" text-2xl font-semibold ">The Joke Tax</h3>
        <p className="py-6 text-base">
          The king&apos;s subjects wen was firm amused. They grumbled and
          complained, but the king was firm:
        </p>
        <ul className=" list-disc px-6 py-4 flex flex-col gap-2">
          <li>1st lever of pung: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners 20 gold coins</li>
        </ul>
        <p className="py-5 text-base">
          As a result, people stopped telling jokes, and the kingdom fell into a
          gloom. But there was one person who refused to let the king&apos;s
          foolishness get him dowl: a court jester named Jokester.
        </p>
        <h3 className=" text-2xl font-semibold ">Jokester&apos;s Revolt</h3>
        <p className="py-5 text-base">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king&apos;s pillow, in his
          coup, even in the royal toilet. The king was furious, but he
          couldn&apos;t seem to stop Jokester
        </p>
      </div>
    </div>
  );
};

export default Article;
