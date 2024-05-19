import React from "react";
import { Skeleton } from "../ui/skeleton";

const VideoSkeleton = () => {
  return (
    <>
      <div className="flex items-center flex-col gap-4 text-center px-6 sm:px-10">
        <Skeleton className="h-2 w-full rounded-md" />
        <Skeleton className="h-4 w-[10rem] rounded-md" />
      </div>
      <div className="sm:px-10 pt-8 pb-20 flex gap-4 items-center justify-between flex-wrap">
        <div className="flex items-center gap-4">
          <Skeleton className="w-[199px] sm:w-[10rem] h-10" />
          <Skeleton className="w-[199px] sm:w-[10rem] h-10" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="w-[122px] h-10" />

          <Skeleton className="w-12 h-10" />
        </div>
      </div>
    </>
  );
};

export default VideoSkeleton;
