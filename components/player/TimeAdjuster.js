"use client";
import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

const TimeAdjuster = ({
  sliderValue,
  setSliderValue,
  duration,
  formatTime,
  videoRef,
}) => {
  const incrementStart = () => {
    setSliderValue(([start, end]) => [Math.min(start + 1, end), end]);
    if (videoRef.current) {
      videoRef.current.seekTo(sliderValue[0] - 1);
    }
  };

  const decrementStart = () => {
    setSliderValue(([start, end]) => [Math.max(start - 1, 0), end]);
    if (videoRef.current) {
      videoRef.current.seekTo(sliderValue[0] - 1);
    }
  };

  const incrementEnd = () => {
    setSliderValue(([start, end]) => [start, Math.min(end + 1, duration)]);
  };

  const decrementEnd = () => {
    setSliderValue(([start, end]) => [start, Math.max(end - 1, start)]);
  };
  return (
    <div className='flex items-center gap-4'>
      <div className='flex items-center gap-1 rounded-md border border-input bg-transparent pl-2 pr-1 h-10 text-sm shadow-sm transition-colors w-full sm:max-w-[13rem]'>
        <input
          type='text'
          placeholder='00:00:00'
          className='w-full bg-transparent outline-none'
          value={formatTime(sliderValue[0])}
          readOnly
        />
        <Button size='icon' onClick={decrementStart} className='w-12 h-8'>
          <Minus className='w-4 h-4' />
        </Button>
        <Button size='icon' onClick={incrementStart} className='w-12 h-8'>
          <Plus className='w-4 h-4' />
        </Button>
      </div>
      <div className='flex items-center gap-1 rounded-md border border-input bg-transparent pl-2 pr-1 h-10 text-sm shadow-sm transition-colors w-full sm:max-w-[13rem]'>
        <input
          type='text'
          placeholder='00:00:00'
          className='w-full bg-transparent outline-none'
          value={formatTime(sliderValue[1])}
          readOnly
        />
        <Button size='icon' onClick={decrementEnd} className='w-12 h-8'>
          <Minus className='w-4 h-4' />
        </Button>
        <Button size='icon' onClick={incrementEnd} className='w-12 h-8'>
          <Plus className='w-4 h-4' />
        </Button>
      </div>
    </div>
  );
};

export default TimeAdjuster;
