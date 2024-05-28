import React, { useState } from "react";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";

const Content = () => {
  const items = [
    { title: "Hello" },
    { title: "Hello" },
    { title: "Hello" },
    { title: "Hello" },
    { title: "Hello" },
    { title: "Hello" },
    { title: "Hello" },
    { title: "Hello" },
    { title: "Hello" },
    { title: "Hello" },
    { title: "Hello" },
    { title: "Hello" },
    { title: "Hello" },
    { title: "Hello" },
    { title: "Hello" },
  ];

  const [visibleItems, setVisibleItems] = useState(5);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  return (
    <div>
      {items.slice(0, visibleItems).map((item, index) => (
        <div className='bg-red-500 p-3 mt-2' key={index}>
          <h1>{item.title}</h1>
        </div>
      ))}
      {visibleItems < items.length && (
        <Button onClick={loadMore} variant='outline' className='mt-3'>
          Load More
          <ArrowDown size={16} />
        </Button>
      )}
    </div>
  );
};

export default Content;
