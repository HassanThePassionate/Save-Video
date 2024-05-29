import React, { useState } from "react";
import UserItem from "./UserItem";
import { Button } from "../ui/button";
import { ChevronRight, ChevronUp } from "lucide-react";

const UserList = () => {
  const item = [
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      name: "Olivia Martin",
      time: "8:47",
    },
  ];
  const [visibleItems, setVisibleItems] = useState(2);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };
  const showless = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems - 10);
  };
  return (
    <>
      <div className='grid'>
        {item.slice(0, visibleItems).map((e) => {
          return <UserItem key={e.name} name={e.name} time={e.time} />;
        })}
      </div>
      {visibleItems < item.length && (
        <div className='flex items-center justify-center'>
          <Button onClick={loadMore} variant='outline' className='mt-3 w-fit '>
            View more
            <ChevronRight size={16} className='ml-1' />
          </Button>
        </div>
      )}
      {visibleItems == item.length && (
        <div className='flex items-center justify-center'>
          <Button onClick={showless} variant='outline' className='mt-3 w-fit '>
            Show less
            <ChevronUp size={16} className='ml-1' />
          </Button>
        </div>
      )}
    </>
  );
};

export default UserList;
