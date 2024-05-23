"use client";
import React from "react";

const ProgressBar = ({
  duration,
  currentTime,
  sliderValue,
  handleProgressBarClick,
  handleProgressBarHover,
  handleProgressBarLeave,
  hoverTime,
  hoverPosition,
  formatTime,
}) => (
  <div className='relative'>
    <div
      className='progress bg-blac dark:bg-white h-[15px] w-full relative  overflow-hidden cursor-pointer'
      onClick={handleProgressBarClick}
      onMouseMove={handleProgressBarHover}
      onMouseLeave={handleProgressBarLeave}
    >
      <div
        className='h-full bg-[#dadada] dark:bg-[#444] absolute left-0 z-20'
        style={{
          width: `${(sliderValue[0] / (duration || 1)) * 100}%`,
          transition: "width 0.3s ease-in-out",
        }}
      ></div>
      <div
        className='h-full bg-[#dadada] dark:bg-[#444] absolute right-0 z-20'
        style={{
          width: `${((duration - sliderValue[1]) / (duration || 1)) * 100}%`,
          transition: "width 0.3s ease-in-out",
        }}
      ></div>
      <div
        className='h-full bg-green-700 absolute z-10'
        style={{
          width: `${(currentTime / (duration || 1)) * 100}%`,
          transition: "width 0.3s ease-in-out",
        }}
      ></div>
    </div>

    {hoverTime !== null && (
      <div
        className='bg-gray-800 text-white absolute bottom-[20px] w-fit  rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
        style={{
          left: `${hoverPosition}px`,
          transform: "translateX(-50%)",
        }}
      >
        {formatTime(hoverTime)}
      </div>
    )}
  </div>
);

export default ProgressBar;
