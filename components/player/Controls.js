"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReplyAll, Pause, Play, Volume2, VolumeX } from "lucide-react";

const Controls = ({ play, mute, togglePlay, toggleMute, replay }) => (
  <div className='flex items-center gap-4'>
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size='icon'
            variant='outline'
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
            variant='outline'
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
            variant='outline'
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
);

export default Controls;
