"use client";
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Download,
  LoaderCircle,
  Music,
  Scissors,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Blur from "./Blur";
import { Card, CardContent, CardHeader } from "../ui/card";

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const pasteLink = async () => {
    const text = await navigator.clipboard.readText();
    setLink(text);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Wait for 2 seconds
  };
  const inputHandler = (e) => {
    setLoading(true);
    setLink(e.target.value);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className='max-w-3xl px-4 mx-auto my-4 md:my-12 space-y-8'>
      <Card>
        <CardHeader className='px-0 sm:px-10 md:pt-10'>
          <div>
            <h1 className='scroll-m-20 text-2xl md:text-4xl font-bold tracking-tight'>
              Youtube Video Downloader
            </h1>
            <p className='text-lg text-muted-foreground'>
              A carousel with motion and swipe build using Embla.
            </p>
          </div>
        </CardHeader>
        <CardContent className='px-0 sm:px-10 pt-8 pb-10 flex gap-4 flex-col flex-wrap'>
          <div className='flex w-full items-center space-x-4 px-0 '>
            <Input
              type='url'
              placeholder='Enter URL'
              value={link}
              onChange={inputHandler}
              className='!h-10'
            />
            <Button
              disabled={loading}
              onClick={pasteLink}
              variant={"secondary"}
            >
              {loading ? (
                <>
                  <LoaderCircle className='mr-2 h-4 w-4 animate-spin' />
                  Please wait
                </>
              ) : (
                "Paste Link"
              )}
            </Button>
          </div>
          <h4 className='pt-[32px] pb-4 text-[16px] font-semibold'>
            People with access
          </h4>
          <div className='grid   '>
            {loading ? (
              <>
                <Blur />
                <Blur />
              </>
            ) : (
              <>
                <div className='flex items-center justify-between gap-5 flex-wrap mb-[30px]'>
                  <div className='flex items-center gap-4'>
                    <Avatar>
                      <AvatarImage src='https://github.com/shadcn.png' />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h5 className='text-[16px] font-semibold'>
                        Olivia Martin
                      </h5>
                      <Badge variant='outline'>8:47</Badge>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 '>
                    <div className='flex items-center '>
                      <Button className='rounded-r-none'>
                        <Download className='h-4 w-4 ' />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Button variant='outline' className='rounded-l-none'>
                            Select role
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-[17.5rem] mr-[-4.1rem]'>
                          <DropdownMenuGroup>
                            <DropdownMenuItem className='justify-between'>
                              <p>
                                MP4
                                <span className='ml-2'>720p</span>
                              </p>
                              <Badge variant='secondary'>HD</Badge>

                              <DropdownMenuShortcut className='ml-0'>
                                64.6MB
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>

                            <DropdownMenuItem className='justify-between'>
                              <p>
                                MP4
                                <span className='ml-2'>360p</span>
                              </p>

                              <DropdownMenuShortcut className='ml-0'>
                                17.7MB
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>

                            <DropdownMenuItem className='justify-between'>
                              <p>
                                MP4
                                <span className='ml-2'>480p</span>
                              </p>

                              <DropdownMenuShortcut className='ml-0'>
                                39.2MB
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='justify-between'>
                              <p>
                                MP4
                                <span className='ml-2'>1080p</span>
                              </p>
                              <Badge variant='secondary'>HD</Badge>
                              <DropdownMenuShortcut className='ml-0'>
                                185.5MB
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>
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
                                  <DropdownMenuItem className='justify-between'>
                                    <p>
                                      MP4
                                      <span className='ml-2'>720p</span>
                                    </p>
                                    <Badge variant='secondary'>HD</Badge>
                                    <DropdownMenuShortcut className='ml-0'>
                                      64.6MB
                                    </DropdownMenuShortcut>
                                  </DropdownMenuItem>

                                  <DropdownMenuItem className='justify-between'>
                                    <p>
                                      MP4
                                      <span className='ml-2'>360p</span>
                                    </p>

                                    <DropdownMenuShortcut className='ml-0'>
                                      17.7MB
                                    </DropdownMenuShortcut>
                                  </DropdownMenuItem>

                                  <DropdownMenuItem className='justify-between'>
                                    <p>
                                      MP4
                                      <span className='ml-2'>480p</span>
                                    </p>

                                    <DropdownMenuShortcut className='ml-0'>
                                      39.2MB
                                    </DropdownMenuShortcut>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className='justify-between'>
                                    <p>
                                      MP4
                                      <span className='ml-2'>1080p</span>
                                    </p>
                                    <Badge variant='secondary'>HD</Badge>
                                    <DropdownMenuShortcut className='ml-0'>
                                      185.5MB
                                    </DropdownMenuShortcut>
                                  </DropdownMenuItem>
                                </div>
                              )}
                            </div>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button variant='outline' size='icon'>
                            <Scissors className='h-4 w-4 ' />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Trim Video</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button variant='outline' size='icon'>
                            <Music className='h-4 w-4 ' />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Music</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-5 flex-wrap mb-[30px]'>
                  <div className='flex items-center gap-4'>
                    <Avatar>
                      <AvatarImage src='https://github.com/shadcn.png' />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h5 className='text-[16px] font-semibold'>
                        Olivia Martin
                      </h5>
                      <Badge variant='outline'>8:47</Badge>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 '>
                    <div className='flex items-center '>
                      <Button className='rounded-r-none'>
                        <Download className='h-4 w-4 ' />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Button variant='outline' className='rounded-l-none'>
                            Select role
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-[17.5rem] mr-[-4.1rem]'>
                          <DropdownMenuGroup>
                            <DropdownMenuItem className='justify-between'>
                              <p>
                                MP4
                                <span className='ml-2'>720p</span>
                              </p>
                              <Badge variant='secondary'>HD</Badge>
                              <DropdownMenuShortcut className='ml-0'>
                                64.6MB
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>

                            <DropdownMenuItem className='justify-between'>
                              <p>
                                MP4
                                <span className='ml-2'>360p</span>
                              </p>

                              <DropdownMenuShortcut className='ml-0'>
                                17.7MB
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>

                            <DropdownMenuItem className='justify-between'>
                              <p>
                                MP4
                                <span className='ml-2'>480p</span>
                              </p>

                              <DropdownMenuShortcut className='ml-0'>
                                39.2MB
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='justify-between'>
                              <p>
                                MP4
                                <span className='ml-2'>1080p</span>
                              </p>
                              <Badge variant='secondary'>HD</Badge>
                              <DropdownMenuShortcut className='ml-0'>
                                185.5MB
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>
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
                                  <DropdownMenuItem className='justify-between'>
                                    <p>
                                      MP4
                                      <span className='ml-2'>720p</span>
                                    </p>
                                    <Badge variant='secondary'>HD</Badge>
                                    <DropdownMenuShortcut className='ml-0'>
                                      64.6MB
                                    </DropdownMenuShortcut>
                                  </DropdownMenuItem>

                                  <DropdownMenuItem className='justify-between'>
                                    <p>
                                      MP4
                                      <span className='ml-2'>360p</span>
                                    </p>

                                    <DropdownMenuShortcut className='ml-0'>
                                      17.7MB
                                    </DropdownMenuShortcut>
                                  </DropdownMenuItem>

                                  <DropdownMenuItem className='justify-between'>
                                    <p>
                                      MP4
                                      <span className='ml-2'>480p</span>
                                    </p>

                                    <DropdownMenuShortcut className='ml-0'>
                                      39.2MB
                                    </DropdownMenuShortcut>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className='justify-between'>
                                    <p>
                                      MP4
                                      <span className='ml-2'>1080p</span>
                                    </p>
                                    <Badge variant='secondary'>HD</Badge>
                                    <DropdownMenuShortcut className='ml-0'>
                                      185.5MB
                                    </DropdownMenuShortcut>
                                  </DropdownMenuItem>
                                </div>
                              )}
                            </div>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button variant='outline' size='icon'>
                            <Scissors className='h-4 w-4 ' />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Trim Video</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button variant='outline' size='icon'>
                            <Music className='h-4 w-4 ' />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Music</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Hero;
