"use client";
import React, { useEffect, useRef, useState } from "react";
import Article from "../hero/Article";
import Accordin from "../hero/Accordin";
import ReactPlayer from "react-player";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  ChevronLeft,
  Minus,
  Music,
  Pause,
  Play,
  Plus,
  ReplyAll,
  Volume2,
  VolumeX,
} from "lucide-react";
import Link from "next/link";
import { MultiSlider } from "../ui/slider";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button, buttonVariants } from "../ui/button";
import Btn from "../hero/Btn";
import Pop from "../hero/Pop";

const Cuts = () => {
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [sliderValue, setSliderValue] = useState([0, 0]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time / 60) % 60);
    const seconds = Math.floor(time % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (play && currentTime >= sliderValue[1]) {
      setPlay(false);
      if (videoRef.current) {
        videoRef.current.seekTo(sliderValue[0]);
      }
    }
  }, [currentTime, play, sliderValue]);

  const handleDuration = (duration) => {
    setDuration(duration);
    setSliderValue([0, duration]);
  };

  const handleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);

    if (videoRef.current) {
      videoRef.current.seekTo(value[0]);
    }
  };

  const togglePlay = () => {
    setPlay((prevPlay) => !prevPlay);
  };

  const toggleMute = () => {
    setMute((prevMute) => !prevMute);
  };

  const replay = () => {
    if (videoRef.current) {
      videoRef.current.seekTo(sliderValue[0]);
    }
  };
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

  const handleProgressBarClick = (event) => {
    const progressBar = event.currentTarget;
    const clickPosition = event.nativeEvent.offsetX;
    const progressBarWidth = progressBar.offsetWidth;
    const newCurrentTime = (clickPosition / progressBarWidth) * duration;

    if (newCurrentTime >= sliderValue[0] && newCurrentTime <= sliderValue[1]) {
      setCurrentTime(newCurrentTime);
      if (videoRef.current) {
        videoRef.current.seekTo(newCurrentTime);
      }
    }
  };
  return (
    <div>
      <main className='max-w-3xl px-4 mx-auto my-4 md:my-12 space-y-8'>
        <Card>
          <CardHeader className='px-0 sm:px-10 md:pt-10 flex flex-row items-center gap-4'>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href='/'
                    className={buttonVariants({
                      variant: "secondary",
                      className: "!px-2",
                    })}
                  >
                    <ChevronLeft className='w-4 h-4' />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Go Home</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div>
              <h1 className='scroll-m-20 text-2xl md:text-4xl font-bold tracking-tight'>
                Youtube Video Downloader
              </h1>
              <p className='text-lg text-muted-foreground'>
                A carousel with motion and swipe build using Embla.
              </p>
            </div>
          </CardHeader>
          <div className='px-0 sm:px-10 pb-10'>
            <div className='relative h-0 pb-[56.25%]'>
              <ReactPlayer
                url='https://www.youtube.com/embed/RD4JPW6mKaU'
                ref={videoRef}
                playing={play}
                muted={mute}
                onDuration={handleDuration}
                onProgress={handleProgress}
                width='100%'
                height='100%'
                className='absolute top-0 left-0'
              />
            </div>
            <div
              className='progress bg-green-500 h-[20px] w-full relative mt-4 rounded-full overflow-hidden cursor-pointer'
              onClick={handleProgressBarClick}
            >
              <div
                className=' h-full bg-red-500 absolute left-0 delay-300 transition-all duration-400 z-20'
                id='cut-left'
                style={{
                  width: `${(sliderValue[0] / (duration || 1)) * 100}%`,
                  transition: "width 0.3s ease-in-out",
                }}
              >
                <span className='sr-only'></span>
              </div>
              <div
                className=' h-full bg-red-500 absolute right-0 z-20'
                id='cut-right'
                style={{
                  width: `${
                    ((duration - sliderValue[1]) / (duration || 1)) * 100
                  }%`,
                  transition: "width 0.3s ease-in-out",
                }}
              >
                <span className='sr-only'></span>
              </div>
              <div
                className=' h-full bg-blue-700 absolute z-10'
                id='cut-progress'
                style={{
                  width: `${(currentTime / (duration || 1)) * 100}%`,
                  transition: "width 0.3s ease-in-out",
                }}
              >
                <span className='sr-only'></span>
              </div>
            </div>
          </div>

          <div className='flex items-center flex-col gap-4 text-center px-0 sm:px-10'>
            <MultiSlider
              defaultValue={sliderValue}
              min={10}
              max={duration}
              value={sliderValue}
              onValueChange={handleSliderChange}
            />
            <div className='flex items-center gap-4'>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size='icon'
                      variant={"outline"}
                      onClick={replay}
                      className='w-12 h-10'
                    >
                      <ReplyAll className='w-4 h-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Replay</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size='icon'
                      variant={"outline"}
                      onClick={togglePlay}
                      className='w-12 h-10'
                    >
                      {play ? (
                        <Pause className='w-4 h-4' />
                      ) : (
                        <Play className='w-4 h-4' />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{play ? "Pause" : "Play"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size='icon'
                      variant={"outline"}
                      onClick={toggleMute}
                      className='w-12 h-10'
                    >
                      {!mute ? (
                        <Volume2 className='h-4 w-4' />
                      ) : (
                        <VolumeX className='h-4 w-4' />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{!mute ? "Mute" : "Unmute"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <CardContent className='px-0 sm:px-10 pt-8 pb-20 flex gap-4 items-center justify-between flex-wrap'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-1 rounded-md border border-input bg-transparent pl-2 pr-1 h-10 text-sm shadow-sm transition-colors w-full sm:max-w-[13rem]'>
                <input
                  type='text'
                  placeholder='00:00:00'
                  className='w-full bg-transparent outline-none first'
                  value={formatTime(sliderValue[0])}
                  readOnly
                />
                <Button
                  size='icon'
                  onClick={decrementStart}
                  className='w-12 h-8'
                >
                  <Minus className='w-4 h-4' />
                </Button>
                <Button
                  size='icon'
                  onClick={incrementStart}
                  className='w-12 h-8'
                >
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
            <div className='flex items-center gap-4'>
              <Pop />
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size='icon'
                      variant={"outline"}
                      className='w-12 h-10'
                    >
                      <Music className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download mp3</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardContent>
        </Card>

        <section>
          <Article />
          <Accordin />
          <Btn />
        </section>
      </main>
    </div>
  );
};

export default Cuts;
