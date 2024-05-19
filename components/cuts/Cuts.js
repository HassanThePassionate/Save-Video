"use client";
import React, { useEffect, useRef, useState } from "react";
import Article from "../hero/Article";
import Accordin from "../hero/Accordin";
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

const Cuts = () => {
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const videoRef = useRef(null);
  const [duration, setDuration] = useState("00:00:00");
  const [update, setUpdate] = useState("00:00:00");
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
    const video = videoRef.current;

    if (video) {
      const videoDuration = video.duration;
      setDuration(formatTime(videoDuration));
      setSliderValue([0, videoDuration]);
    }
  }, []);

  const timeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    setUpdate(formatTime(currentTime));

    const progress = (currentTime / videoRef.current.duration) * 100;
    document.getElementById("cut-progress").style.width = `${progress}%`;
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
    videoRef.current.currentTime = value[0];
  };

  const videoPlay = () => {
    setPlay(!play);
    if (play) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const replay = () => {
    videoRef.current.currentTime = 0;
  };

  const muted = () => {
    setMute(!mute);
    videoRef.current.muted = !mute;
  };

  const updateplus = () => {
    videoRef.current.currentTime += 1;
  };

  const dec = () => {
    videoRef.current.currentTime -= 1;
  };

  return (
    <div>
      <main className="max-w-3xl px-4 mx-auto my-4 md:my-12 space-y-8">
        <Card className=" ">
          <CardHeader className="px-0 sm:px-10 md:pt-10 flex flex-row items-center gap-4">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/"
                    className={buttonVariants({
                      variant: "secondary",
                      className: "!px-2",
                    })}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Go Home</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div>
              <h1 className="scroll-m-20 text-2xl md:text-4xl font-bold tracking-tight">
                Youtube Video Downloader
              </h1>
              <p className="text-lg text-muted-foreground">
                A carousel with motion and swipe build using Embla.
              </p>
            </div>
          </CardHeader>
          <div className="px-0 sm:px-10 pb-10">
            <video
              ref={videoRef}
              src="/video.mp4"
              controls={false}
              className="h-full w-full rounded-md"
              onTimeUpdate={timeUpdate}
              onLoadedMetadata={() => {
                setDuration(formatTime(videoRef.current.duration));
                setSliderValue([0, videoRef.current.duration]);
              }}
            />
            <div className="progress bg-red-500 h-[20px] w-full relative">
              <div
                className="progress-bar progress-bar-primary progress-bar-striped h-full bg-green-500 absolute left-0"
                id="cut-left"
                style={{
                  width: `${
                    (sliderValue[0] / (videoRef.current?.duration || 1)) * 100
                  }%`,
                }}
              >
                <span className="sr-only"></span>
              </div>
              <div
                className="progress-bar progress-bar-primary progress-bar-striped h-full bg-green-500 absolute right-0"
                id="cut-right"
                style={{
                  width: `${
                    (((videoRef.current?.duration || 1) - sliderValue[1]) /
                      (videoRef.current?.duration || 1)) *
                    100
                  }%`,
                }}
              >
                <span className="sr-only"></span>
              </div>
              <div
                className="progress-bar progress-bar-primary progress-bar-striped h-full bg-blue-500 absolute"
                id="cut-progress"
              >
                <span className="sr-only"></span>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col gap-4 text-center px-0 sm:px-10">
            <MultiSlider
              defaultValue={sliderValue}
              min={0}
              max={videoRef.current ? videoRef.current.duration : 100}
              value={sliderValue}
              onValueChange={handleSliderChange}
            />
            <div className="flex items-center gap-4">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant={"outline"}
                      onClick={replay}
                      className="w-12 h-10"
                    >
                      <ReplyAll className="w-4 h-4" />
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
                      size="icon"
                      variant={"outline"}
                      onClick={videoPlay}
                      className="w-12 h-10"
                    >
                      {play ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
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
                      size="icon"
                      variant={"outline"}
                      onClick={muted}
                      className="w-12 h-10"
                    >
                      {!mute ? (
                        <Volume2 className="h-4 w-4" />
                      ) : (
                        <VolumeX className="h-4 w-4" />
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

          <CardContent className="px-0 sm:px-10 pt-8 pb-20 flex gap-4 items-center justify-between flex-wrap">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 rounded-md border border-input bg-transparent pl-2 pr-1 h-10 text-sm shadow-sm transition-colors w-full sm:max-w-[13rem]">
                <input
                  type="text"
                  placeholder="00:00:00"
                  className="w-full bg-transparent outline-none"
                  value={update}
                  readOnly
                />
                <Button size="icon" onClick={dec} className="w-12 h-8">
                  <Minus className="w-4 h-4" />
                </Button>
                <Button size="icon" onClick={updateplus} className="w-12 h-8">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center gap-1 rounded-md border border-input bg-transparent pl-2 pr-1 h-10 text-sm shadow-sm transition-colors w-full sm:max-w-[13rem]">
                <input
                  type="text"
                  placeholder="00:00:00"
                  className="w-full bg-transparent outline-none"
                  value={duration}
                  readOnly
                />
                <Button size="icon" onClick={dec} className="w-12 h-8">
                  <Minus className="w-4 h-4" />
                </Button>
                <Button size="icon" onClick={updateplus} className="w-12 h-8">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button className="h-10">
                {/* Add your download functionality here */}
              </Button>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant={"outline"}
                      className="w-12 h-10"
                    >
                      <Music className="h-4 w-4" />
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
        <Article />
        <Accordin />
        <Btn />
      </main>
    </div>
  );
};

export default Cuts;
