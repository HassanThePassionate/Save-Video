import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Blur = () => {
  return (
    <div>
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="flex items-center gap-4 mb-[30px]">
          <Skeleton className="h-[3rem] w-[3rem] rounded-[10px]" />
          <div>
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-[20px] mt-1 w-[50px] rounded-full" />
          </div>
        </div>

        <div className="flex gap-2">
          <Skeleton className="h-[40px] w-[168px]" />
          <Skeleton className="h-[40px] w-[48px]" />
          <Skeleton className="h-[40px] w-[48px]" />
        </div>
      </div>
    </div>
  );
};

export default Blur;
