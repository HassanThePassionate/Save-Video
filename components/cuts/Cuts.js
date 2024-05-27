"use client";
import React, { useEffect, useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import TimeAdjuster from "./TimeAdjuster";
import { MultiSlider } from "../ui/slider";
import { Card, CardContent, CardHeader } from "../ui/card";
import Pop from "../common/Pop";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Music } from "lucide-react";
import { Button } from "../ui/button";
import Header from "../common/Header";

const Cuts = () => {
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [sliderValue, setSliderValue] = useState([0, 0]);
  const [hoverTime, setHoverTime] = useState(null);
  const [hoverPosition, setHoverPosition] = useState(0);

  const formatTime = (time) => {
    if (duration < 3600) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    } else {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time / 60) % 60);
      const seconds = Math.floor(time % 60);
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
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

  const handleProgressBarHover = (event) => {
    const progressBar = event.currentTarget;
    const hoverPosition = event.nativeEvent.offsetX;
    const progressBarWidth = progressBar.offsetWidth;
    const newHoverTime = (hoverPosition / progressBarWidth) * duration;
    setHoverTime(newHoverTime);
    setHoverPosition(hoverPosition);
  };

  const handleProgressBarLeave = () => {
    setHoverTime(null);
    setHoverPosition(0);
  };

  return (
    <div>
      <main className='max-w-3xl mx-auto my-4 md:my-12 space-y-8'>
        <Card>
          <CardHeader className='px-4 sm:px-10 md:pt-10 flex flex-row items-center gap-4'>
            <Header />
          </CardHeader>
          <div className='px-4 sm:px-10 pb-10'>
            <VideoPlayer
              url='https://www.youtube.com/embed/RD4JPW6mKaU'
              playing={play}
              muted={mute}
              onDuration={handleDuration}
              onProgress={handleProgress}
              videoRef={videoRef}
            />
            <ProgressBar
              duration={duration}
              currentTime={currentTime}
              sliderValue={sliderValue}
              handleProgressBarClick={handleProgressBarClick}
              handleProgressBarHover={handleProgressBarHover}
              handleProgressBarLeave={handleProgressBarLeave}
              hoverTime={hoverTime}
              hoverPosition={hoverPosition}
              formatTime={formatTime}
            />
          </div>
          <div className='flex items-center flex-col gap-4 text-center px-4 sm:px-10'>
            <MultiSlider
              defaultValue={sliderValue}
              min={0}
              max={duration}
              value={sliderValue}
              onValueChange={handleSliderChange}
            />
            <Controls
              play={play}
              mute={mute}
              togglePlay={togglePlay}
              toggleMute={toggleMute}
              replay={replay}
            />
          </div>
          <CardContent className='px-4 sm:px-10 pt-8 pb-20 flex gap-5 sm:gap-4 items-center justify-center sm:justify-between flex-wrap'>
            <TimeAdjuster
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              duration={duration}
              formatTime={formatTime}
              videoRef={videoRef}
            />
            <div className='flex items-center gap-4'>
              <Pop />
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size='icon' variant='outline' className='w-12 h-10'>
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
      </main>
    </div>
  );
};

export default Cuts;
