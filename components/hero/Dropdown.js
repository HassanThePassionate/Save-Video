"use client";

import React, { useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Download, Scissors, Music } from "lucide-react";
import { useSelector } from "react-redux";
const Dropdown = () => {
  const quality = useSelector((state) => state.quality.quality);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const dropdownItems = [
    { label: "720p", size: "64.6MB", badge: true },
    { label: "360p", size: "17.7MB", badge: false },
    { label: "480p", size: "39.2MB", badge: false },
    { label: "1080p", size: "185.5MB", badge: true },
  ];

  return (
    <div className='flex items-center gap-4'>
      <div className='flex items-center'>
        <Button className='rounded-r-none dark:hover:bg-[#dadada] hover:bg-[#333]'>
          <Download className='h-4 w-4' />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant='outline' className='rounded-l-none'>
              <span>MP4 {quality}</span>
              <span className='pl-2'>
                <ChevronDown size={14} />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-[17.5rem] mr-[-4.1rem]'>
            <DropdownMenuGroup>
              {dropdownItems.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  className='justify-between cursor-pointer'
                >
                  <p>
                    MP4
                    <span className='ml-2'>{item.label}</span>
                  </p>
                  {item.badge && <Badge variant='secondary'>HD</Badge>}
                  <DropdownMenuShortcut className='ml-0'>
                    {item.size}
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
              <div className='relative' ref={dropdownRef}>
                {!isDropdownOpen ? (
                  <button
                    onClick={toggleDropdown}
                    className='hover:bg-secondary text-secondary-foreground flex justify-between items-center text-xs w-full py-1 px-2'
                  >
                    More <ChevronDown className='w-4 h-4' />
                  </button>
                ) : (
                  <div className='w-full'>
                    {dropdownItems.map((item, index) => (
                      <DropdownMenuItem
                        key={index + dropdownItems.length}
                        className='justify-between cursor-pointer'
                        onClick={() => handleQualityChange(item.label)}
                      >
                        <p>
                          MP4
                          <span className='ml-2'>{item.label}</span>
                        </p>
                        {item.badge && <Badge variant='secondary'>HD</Badge>}
                        <DropdownMenuShortcut className='ml-0'>
                          {item.size}
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                    ))}
                  </div>
                )}
              </div>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
            <Button variant='outline' size='icon'>
              <Scissors className='h-4 w-4' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Trim Video</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
            <Button variant='outline' size='icon'>
              <Music className='h-4 w-4' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Music</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Dropdown;
