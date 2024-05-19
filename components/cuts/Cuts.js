"use client";
import React, { useEffect, useRef, useState } from "react";
import VideoSkeleton from "../hero/VideoSkeleton";
import Article from "../hero/Article";
import Accordin from "../hero/Accordin";
import { Progress } from "@/components/ui/progress";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  ArrowDownToLine,
  ChevronLeft,
  LoaderCircle,
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
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [reachedEndTime, setReachedEndTime] = useState(false);
  const [isPageReady, setIsPageReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef(null);
  const timeoutRef = useRef(null);
  const [startTime, setStartTime] = useState("00:00:00");
  const [endTime, setEndTime] = useState("00:00:00");
  const [sliderValue, setSliderValue] = useState([0, 0]);

  const handleSliderChange = (values) => {
    const [start, end] = values;
    if (end - start < 1) {
      return; // Ensure minimum range of 1 second
    }
    setSliderValue(values);
    setStartTime(secondsToTime(start));
    setEndTime(secondsToTime(end));

    if (videoRef.current) {
      videoRef.current.currentTime = start;
      setReachedEndTime(false);
      updateProgress();
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleStartTimeChange = (val) => {
    const newStartTime = Math.max(0, timeToSeconds(startTime) + val);
    if (newStartTime < timeToSeconds(endTime)) {
      setStartTime(secondsToTime(newStartTime));
      setSliderValue([newStartTime, sliderValue[1]]);
      if (videoRef.current) {
        videoRef.current.currentTime = newStartTime;
        setReachedEndTime(false);
        updateProgress();
      }
    }
  };

  const handleEndTimeChange = (val) => {
    if (videoRef.current) {
      const newEndTime = Math.min(
        videoRef.current.duration,
        timeToSeconds(endTime) + val
      );
      if (newEndTime > timeToSeconds(startTime)) {
        setEndTime(secondsToTime(newEndTime));
        setSliderValue([sliderValue[0], newEndTime]);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        updateProgress();
      }
    }
  };

  const updateProgress = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const totalDuration = videoRef.current.duration;
      const [start, end] = sliderValue;

      const leftWidth = (start / totalDuration) * 100;
      const rightWidth = 100 - (end / totalDuration) * 100;

      const currentProgress = ((currentTime - start) / (end - start)) * 100;
      setProgress(currentProgress);

      document.getElementById("cut-left").style.width = `${leftWidth}%`;
      document.getElementById("cut-right").style.width = `${rightWidth}%`;
      document.getElementById(
        "cut-progress"
      ).style.width = `${currentProgress}%`;
    }
  };

  const timeToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const secondsToTime = (seconds) => {
    const hh = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const mm = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const ss = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  };

  const calculateCroppedTime = () => {
    const startTimeArr = startTime.split(":").map(Number);
    const endTimeArr = endTime.split(":").map(Number);
    const croppedTimeArr = [0, 0, 0];

    for (let i = 0; i < startTimeArr.length; i++) {
      croppedTimeArr[i] = endTimeArr[i] - startTimeArr[i];
    }

    for (let i = croppedTimeArr.length - 1; i > 0; i--) {
      if (croppedTimeArr[i] < 0) {
        croppedTimeArr[i] += 60;
        croppedTimeArr[i - 1]--;
      }
    }

    return croppedTimeArr
      .map((num) => num.toString().padStart(2, "0"))
      .join(":");
  };

  useEffect(() => {
    setTimeout(() => {
      if (videoRef?.current && videoRef?.current.readyState >= 2) {
        const { currentTime, duration } = videoRef.current;
        setStartTime(secondsToTime(currentTime));
        setEndTime(secondsToTime(duration));
        setSliderValue([currentTime, duration]);
        setIsPageReady(true);
      }
    }, 1000);
  }, [videoRef.current]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !muted;
      setMuted(!muted);
    }
  };

  useEffect(() => {
    if (playing) {
      const intervalId = setInterval(() => {
        if (videoRef.current) {
          const currentTime = videoRef.current.currentTime;
          const remainingTime = timeToSeconds(endTime) - currentTime;
          if (remainingTime <= 0) {
            videoRef.current.pause();
            setReachedEndTime(true);
            setPlaying(false);
          }
          updateProgress();
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [playing, endTime]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (!playing && !reachedEndTime) {
        video.play();
        setPlaying(true);
      } else {
        video.pause();
        setPlaying(false);
      }
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div>
      <main className="max-w-3xl px-4 mx-auto my-4 md:my-12 space-y-8">
        <Card className=" ">
          <CardHeader className="px-0 Ssm:px-10 md:pt-10 flex flex-row items-center gap-4">
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
              onTimeUpdate={() => updateProgress()}
            />
            <div className="progress bg-red-500 h-[20px] w-full relative">
              <div
                className="progress-bar progress-bar-primary progress-bar-striped h-full bg-green-500 absolute left-0"
                id="cut-left"
                style={{ width: 0 }}
              >
                <span className="sr-only"></span>
              </div>
              <div
                className="progress-bar progress-bar-primary progress-bar-striped h-full bg-green-500 absolute right-0"
                id="cut-right"
                style={{ width: 0 }}
              >
                <span className="sr-only"></span>
              </div>
              <div
                className="progress-bar progress-bar-primary progress-bar-striped h-full bg-blue-500 absolute"
                id="cut-progress"
                style={{ width: `${progress}%` }}
              >
                <span className="sr-only"></span>
              </div>
            </div>
          </div>
          {isPageReady ? (
            <>
              <div className="flex items-center flex-col gap-4 text-center px-0 sm:px-10">
                <MultiSlider
                  defaultValue={sliderValue}
                  min={0}
                  max={486.6}
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
                          onClick={() =>
                            handleSliderChange([
                              timeToSeconds(startTime),
                              timeToSeconds(endTime),
                            ])
                          }
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
                          onClick={togglePlay}
                          className="w-12 h-10"
                        >
                          {playing ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{playing ? "Pause" : "Play"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <p>Crop size: {calculateCroppedTime()}</p>

                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="icon"
                          variant={"outline"}
                          onClick={toggleMute}
                          className="w-12 h-10"
                        >
                          {!muted ? (
                            <Volume2 className="h-4 w-4" />
                          ) : (
                            <VolumeX className="h-4 w-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{!muted ? "Mute" : "Unmute"}</p>
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
                      value={startTime}
                      readOnly
                    />
                    <Button
                      size="icon"
                      onClick={() => handleStartTimeChange(-1)}
                      className="w-12 h-8"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      onClick={() => handleStartTimeChange(1)}
                      className="w-12 h-8"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-1 rounded-md border border-input bg-transparent pl-2 pr-1 h-10 text-sm shadow-sm transition-colors w-full sm:max-w-[13rem]">
                    <input
                      type="text"
                      placeholder="00:00:00"
                      className="w-full bg-transparent outline-none"
                      value={endTime}
                      readOnly
                    />
                    <Button
                      size="icon"
                      onClick={() => handleEndTimeChange(-1)}
                      className="w-12 h-8"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      onClick={() => handleEndTimeChange(1)}
                      className="w-12 h-8"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    className="h-10"
                    disabled={loading}
                    onClick={() => {
                      setLoading(true);

                      setTimeout(() => {
                        setLoading(false);
                      }, 2000); // Wait for 2 seconds
                    }}
                  >
                    {loading ? (
                      <>
                        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                        preparing
                      </>
                    ) : (
                      <>
                        <ArrowDownToLine className="mr-2 h-4 w-4" />
                        Download
                      </>
                    )}
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
            </>
          ) : (
            <VideoSkeleton />
          )}
        </Card>
        <Article />
        <Accordin />
        <Btn />
      </main>
    </div>
  );
};

export default Cuts;
