import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { ChevronRight, EyeOff, Moon, Music2, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../../redux/toggle/toggleSlice";

const DropDown = () => {
  const dispatch = useDispatch();
  const toggled = useSelector((state) => state.toggle.toggled);
  const { setTheme } = useTheme();
  const [selectedQuality, setSelectedQuality] = useState("720p");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    const savedQuality = localStorage.getItem("quality");
    if (savedQuality) {
      setSelectedQuality(savedQuality);
    }
  }, [setTheme]);

  const sun = () => {
    setTheme("light");
    localStorage.setItem("theme", "light");
  };

  const moon = () => {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  };

  const system = () => {
    setTheme("system");
    localStorage.setItem("theme", "system");
  };

  const handleQualityChange = (quality) => {
    setSelectedQuality(quality);
    localStorage.setItem("quality", quality);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='icon'>
            <IoSettingsOutline size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 mt-2'>
          <DropdownMenuLabel>Setting</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className='my-[10px]'>
              <div className='flex items-center justify-between gap-2 w-full'>
                <div className='flex items-center gap-2 cursor-pointer'>
                  <EyeOff size={16} />
                  <span>Clean Up</span>
                </div>
                <Switch
                  checked={toggled}
                  onCheckedChange={() => dispatch(toggle())}
                />
              </div>
            </DropdownMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <DropdownMenuItem className='mb-[10px]'>
                  <div className='flex items-center justify-between gap-2 w-full'>
                    <div className='flex items-center gap-2'>
                      <Music2 size={16} />
                      <span>Select Quality</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span>{selectedQuality}</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='min-w-[16rem] flex flex-col gap-4'>
                {["4320p", "2160p", "1440p", "1080p", "720p", "360p"].map(
                  (quality, index) => (
                    <DropdownMenuItem
                      key={index}
                      className='flex items-center justify-between w-full cursor-pointer'
                      onClick={() => handleQualityChange(quality)}
                    >
                      <span>MP4</span>
                      <span>{quality}</span>
                      <span>
                        {quality === "4320p" && (
                          <>
                            <Badge variant='secondary'>8K</Badge>
                            <Badge className='ml-1' variant='secondary'>
                              60fps
                            </Badge>
                          </>
                        )}
                        {quality === "2160p" && (
                          <>
                            <Badge variant='secondary'>4K</Badge>
                            <Badge className='ml-1' variant='secondary'>
                              60fps
                            </Badge>
                          </>
                        )}
                        {quality === "1440p" && (
                          <>
                            <Badge variant='secondary'>2K</Badge>
                            <Badge className='ml-1' variant='secondary'>
                              60fps
                            </Badge>
                          </>
                        )}
                        {quality === "1080p" && (
                          <>
                            <Badge variant='secondary'>1080</Badge>
                            <Badge className='ml-1' variant='secondary'>
                              60fps
                            </Badge>
                          </>
                        )}
                        {quality === "720p" && (
                          <>
                            <Badge variant='secondary'>HD</Badge>
                            <Badge className='ml-1' variant='secondary'>
                              60fps
                            </Badge>
                          </>
                        )}
                        {quality === "360p" && <span>453.4 MB</span>}
                      </span>
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className='hover:bg-white dark:hover:bg-black'>
              <div className='flex items-center justify-between w-full'>
                <Button variant='outline' size='icon' onClick={sun}>
                  <Sun className='h-[1.2rem] w-[1.2rem]' />
                  <span className='sr-only'>Toggle theme</span>
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  className='ml-4'
                  onClick={moon}
                >
                  <Moon className='h-[1.2rem] w-[1.2rem]' />
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  className='ml-4'
                  onClick={system}
                >
                  <MdOutlineDesktopWindows className='h-[1.2rem] w-[1.2rem]' />
                </Button>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDown;
