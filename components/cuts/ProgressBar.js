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
      className='progress bg-green-500 h-[20px] w-full relative mt-4 rounded-full overflow-hidden cursor-pointer'
      onClick={handleProgressBarClick}
      onMouseMove={handleProgressBarHover}
      onMouseLeave={handleProgressBarLeave}
    >
      <div
        className='h-full bg-red-500 absolute left-0 z-20'
        style={{
          width: `${(sliderValue[0] / (duration || 1)) * 100}%`,
          transition: "width 0.3s ease-in-out",
        }}
      ></div>
      <div
        className='h-full bg-red-500 absolute right-0 z-20'
        style={{
          width: `${((duration - sliderValue[1]) / (duration || 1)) * 100}%`,
          transition: "width 0.3s ease-in-out",
        }}
      ></div>
      <div
        className='h-full bg-blue-700 absolute z-10'
        style={{
          width: `${(currentTime / (duration || 1)) * 100}%`,
          transition: "width 0.3s ease-in-out",
        }}
      ></div>
    </div>

    {hoverTime !== null && (
      <div
        className='bg-gray-800 text-white absolute bottom-[20px] w-fit text-xs px-2 py-1 rounded'
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
