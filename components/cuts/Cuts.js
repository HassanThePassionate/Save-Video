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
  const [mute, setMute] = useState();
  const videoRef = useRef(null);
  const [duration, setDuration] = useState("00:00:00");
  const [update, setUpdate] = useState("00:00:00");
  const [sliderValue, setSliderValue] = useState([0, 0]);
  const [playbtn, setPlaybtn] = useState(false);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time / 60) % 60);
    const seconds = Math.floor(time % 60);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  useEffect(() => {
    const onPlayerReady = (event) => {
      const videoDuration = event.target.getDuration();
      setDuration(formatTime(videoDuration));
      setSliderValue([0, videoDuration]);
    };

    const onPlayerStateChange = (event) => {
      if (event.data === YT.PlayerState.PLAYING) {
        setPlay(true);
        setPlaybtn(true);
      } else {
        setPlay(false);
      }
    };

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      videoRef.current = new YT.Player("video-player", {
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };
  }, []);

  const timeUpdate = () => {
    const currentTime = videoRef.current.getCurrentTime();
    // setUpdate(formatTime(currentTime));

    const progress = (currentTime / videoRef.current.getDuration()) * 100;
    document.getElementById("cut-progress").style.width = `${progress}%`;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current && videoRef.current.getCurrentTime) {
        timeUpdate();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const handleSliderChange = (value) => {
    setSliderValue(value);
    setUpdate(formatTime(value[0]));
    setDuration(formatTime(value[1]));
  };
  const vidoPlay = () => {
    if (playbtn === true) {
      setPlay(!play);
      if (play) {
        videoRef.current.pauseVideo();
      } else {
        videoRef.current.playVideo();
      }
    }
  };

  const replay = () => {
    if (playbtn === true) {
      videoRef.current.seekTo(0);
    }
  };

  const muted = () => {
    if (playbtn === true) {
      setMute(!mute);
      videoRef.current.mute();
    }
    if (mute) {
      videoRef.current.unMute();
    }
  };
  const updateplus = () => {
    const videoDuration = videoRef.current.getDuration();
    const currentEndTime = sliderValue[1];
    const newEndTime = Math.min(currentEndTime + 1, videoDuration);

    setSliderValue([sliderValue[0], newEndTime]);
    setDuration(formatTime(newEndTime));
  };

  const dec = () => {
    const currentEndTime = sliderValue[1];
    const newEndTime = Math.max(currentEndTime - 1, 1);

    setSliderValue([sliderValue[0], newEndTime]);
    setDuration(formatTime(newEndTime));
  };
  const minus = () => {
    const currentStartTime = sliderValue[0];
    const newStartTime = Math.max(currentStartTime - 1, 1);

    setSliderValue([newStartTime, sliderValue[1]]);
    setUpdate(formatTime(newStartTime));
  };
  const plus = () => {
    const currentStartTime = sliderValue[0];
    const newStartTime = Math.max(currentStartTime + 1, 1);

    setSliderValue([newStartTime, sliderValue[1]]);
    setUpdate(formatTime(newStartTime));
  };
  return (
    <div>
      <main className='max-w-3xl px-4 mx-auto my-4 md:my-12 space-y-8'>
        <Card className=' '>
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
              <iframe
                id='video-player'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/RD4JPW6mKaU?enablejsapi=1'
                title='YouTube video player'
                allowFullScreen
                className='absolute top-0 left-0 w-full h-full'
              ></iframe>
            </div>

            <div className='progress bg-yellow-500 h-[20px] w-full relative mt-4 rounded-full overflow-hidden'>
              <div
                className='progress-bar progress-bar-primary progress-bar-striped h-full bg-blue-500 absolute left-0 delay-300 transition-all duration-400 '
                id='cut-left'
                style={{
                  width: `${
                    (sliderValue[0] / (videoRef.current?.getDuration() || 1)) *
                    100
                  }%`,
                  transition: "width 0.3s ease-in-out",
                  transitionDelay: "0.3s", // Add a delay of 0.3 seconds
                }}
              >
                <span className='sr-only'></span>
              </div>
              <div
                className='progress-bar progress-bar-primary progress-bar-striped h-full bg-blue-500 absolute right-0'
                id='cut-right'
                style={{
                  width: `${
                    (((videoRef.current?.getDuration() || 1) - sliderValue[1]) /
                      (videoRef.current?.getDuration() || 1)) *
                    100
                  }%`,
                  transition: "width 0.3s ease-in-out",
                  transitionDelay: "0.3s", // Add a delay of 0.3 seconds
                }}
              >
                <span className='sr-only'></span>
              </div>
              <div
                className='progress-bar progress-bar-primary progress-bar-striped h-full bg-green-700 absolute'
                id='cut-progress'
                style={{
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
              min={0}
              max={videoRef.current ? videoRef.current.getDuration() : 100}
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
                      onClick={vidoPlay}
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
                      onClick={muted}
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
                  className='w-full bg-transparent outline-none'
                  value={update}
                  readOnly
                />
                <Button size='icon' onClick={minus} className='w-12 h-8'>
                  <Minus className='w-4 h-4' />
                </Button>
                <Button size='icon' onClick={plus} className='w-12 h-8'>
                  <Plus className='w-4 h-4' />
                </Button>
              </div>

              <div className='flex items-center gap-1 rounded-md border border-input bg-transparent pl-2 pr-1 h-10 text-sm shadow-sm transition-colors w-full sm:max-w-[13rem]'>
                <input
                  type='text'
                  placeholder='00:00:00'
                  className='w-full bg-transparent outline-none'
                  value={duration}
                  readOnly
                />
                <Button size='icon' onClick={dec} className='w-12 h-8'>
                  <Minus className='w-4 h-4' />
                </Button>
                <Button size='icon' onClick={updateplus} className='w-12 h-8'>
                  <Plus className='w-4 h-4' />
                </Button>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Button className='h-10'>Download</Button>
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
        <Article />
        <Accordin />
        <Btn />
      </main>
    </div>
  );
};

export default Cuts;
