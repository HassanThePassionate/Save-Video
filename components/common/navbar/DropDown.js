// import React, { useEffect, useState } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Badge } from "@/components/ui/badge";
// import { MdOutlineDesktopWindows } from "react-icons/md";
// import { IoSettingsOutline } from "react-icons/io5";
// import { ChevronRight, EyeOff, Moon, Music2, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "next-themes";
// import { Switch } from "@/components/ui/switch";
// import { useSelector, useDispatch } from "react-redux";
// import { toggle } from "../../../redux/toggle/toggleSlice";

// const DropDown = () => {

//

//   const handleQualityChange = (quality) => {
//     setSelectedQuality(quality);
//     localStorage.setItem("quality", quality);
//   };

//   return (
//     <div>
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant='outline' size='icon'>
//             <IoSettingsOutline size={20} />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className='w-56 mt-2'>
//           <DropdownMenuLabel>Setting</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuGroup>
//             <DropdownMenuItem className='my-[10px]'>
//               <div className='flex items-center justify-between gap-2 w-full'>
//                 <div className='flex items-center gap-2 cursor-pointer'>
//                   <EyeOff size={16} />
//                   <span>Clean Up</span>
//                 </div>
//                 <Switch
//                   checked={toggled}
//                   onCheckedChange={() => dispatch(toggle())}
//                 />
//               </div>
//             </DropdownMenuItem>
//             <DropdownMenu>
//               <DropdownMenuTrigger>
//                 <DropdownMenuItem className='mb-[10px]'>
//                   <div className='flex items-center justify-between gap-2 w-full'>
//                     <div className='flex items-center gap-2'>
//                       <Music2 size={16} />
//                       <span>Select Quality</span>
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <span>{selectedQuality}</span>
//                       <ChevronRight size={16} />
//                     </div>
//                   </div>
//                 </DropdownMenuItem>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className='min-w-[16rem] flex flex-col gap-4'>
//                 {["4320p", "2160p", "1440p", "1080p", "720p", "360p"].map(
//                   (quality, index) => (
//                     <DropdownMenuItem
//                       key={index}
//                       className='flex items-center justify-between w-full cursor-pointer'
//                       onClick={() => handleQualityChange(quality)}
//                     >
//                       <span>MP4</span>
//                       <span>{quality}</span>
//                       <span>
//                         {quality === "4320p" && (
//                           <>
//                             <Badge variant='secondary'>8K</Badge>
//                             <Badge className='ml-1' variant='secondary'>
//                               60fps
//                             </Badge>
//                           </>
//                         )}
//                         {quality === "2160p" && (
//                           <>
//                             <Badge variant='secondary'>4K</Badge>
//                             <Badge className='ml-1' variant='secondary'>
//                               60fps
//                             </Badge>
//                           </>
//                         )}
//                         {quality === "1440p" && (
//                           <>
//                             <Badge variant='secondary'>2K</Badge>
//                             <Badge className='ml-1' variant='secondary'>
//                               60fps
//                             </Badge>
//                           </>
//                         )}
//                         {quality === "1080p" && (
//                           <>
//                             <Badge variant='secondary'>1080</Badge>
//                             <Badge className='ml-1' variant='secondary'>
//                               60fps
//                             </Badge>
//                           </>
//                         )}
//                         {quality === "720p" && (
//                           <>
//                             <Badge variant='secondary'>HD</Badge>
//                             <Badge className='ml-1' variant='secondary'>
//                               60fps
//                             </Badge>
//                           </>
//                         )}
//                         {quality === "360p" && <span>453.4 MB</span>}
//                       </span>
//                     </DropdownMenuItem>
//                   )
//                 )}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </DropdownMenuGroup>
//           <DropdownMenuSeparator />
//           <DropdownMenuGroup>
//             <DropdownMenuItem className='hover:bg-white dark:hover:bg-black'>
//               <div className='flex items-center justify-between w-full'>
//                 <Button variant='outline' size='icon' onClick={sun}>
//                   <Sun className='h-[1.2rem] w-[1.2rem]' />
//                   <span className='sr-only'>Toggle theme</span>
//                 </Button>
//                 <Button
//                   variant='outline'
//                   size='icon'
//                   className='ml-4'
//                   onClick={moon}
//                 >
//                   <Moon className='h-[1.2rem] w-[1.2rem]' />
//                 </Button>
//                 <Button
//                   variant='outline'
//                   size='icon'
//                   className='ml-4'
//                   onClick={system}
//                 >
//                   <MdOutlineDesktopWindows className='h-[1.2rem] w-[1.2rem]' />
//                 </Button>
//               </div>
//             </DropdownMenuItem>
//           </DropdownMenuGroup>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// };

// export default DropDown;

import React, { useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import {
  Brush,
  ChevronRight,
  EyeOff,
  Moon,
  Music2,
  Paintbrush,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../../redux/toggle/toggleSlice";
import Image from "next/image";

const DropDown = () => {
  const dispatch = useDispatch();
  const toggled = useSelector((state) => state.toggle.toggled);
  const { setTheme } = useTheme();
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
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
  const components = [
    {
      name: "العربية",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/ar.png",
    },
    {
      name: "简体中文",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/zh-hans.png",
    },
    {
      name: "Nederlands",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/nl.png",
    },
    {
      name: "English",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png",
    },
    {
      name: "Français",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/fr.png",
    },
    {
      name: "Deutsch",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/de.png",
    },
    {
      name: "हिन्दी",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/hi.png",
    },
    {
      name: "עברית",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/he.png",
    },
    {
      name: "Italiano",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/it.png",
    },
    {
      name: "Indonesia",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/id.png",
    },
    {
      name: "日本語",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/ja.png",
    },
    {
      name: "한국어",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/ko.png",
    },
    {
      name: "Melayu",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/ms.png",
    },
    {
      name: "Polski",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/pl.png",
    },
    {
      name: "Português",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/pt-pt.png",
    },
    {
      name: "فارسی",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/fa.png",
    },
    {
      name: "Română",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/ro.png",
    },
    {
      name: "Русский",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/ru.png",
    },
    {
      name: "Español",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/es.png",
    },
    {
      name: "Svenska",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/sv.png",
    },
    {
      name: "ไทย",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/th.png",
    },
    {
      name: "Türkçe",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/tr.png",
    },
    {
      name: "Українська",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/uk.png",
    },
    {
      name: "Tiếng Việt",
      flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/vi.png",
    },
  ];
  const quality = [
    {
      quality: "720p",
    },
    {
      quality: "1080p",
    },
    {
      quality: "1440p",
    },
    {
      quality: "2160p",
    },
    {
      quality: "2320p",
    },
    {
      quality: "720p",
    },
  ];
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant='ghost'>
            <span className='mr-2'>
              <Paintbrush size={16} />
            </span>
            Customize
          </Button>
        </SheetTrigger>
        <SheetContent className='content'>
          <SheetHeader>
            <SheetTitle>Setting</SheetTitle>
            <SheetDescription>
              Pick a style and color for your components.
            </SheetDescription>
          </SheetHeader>
          <div className='flex items-center justify-between gap-2 mt-5 '>
            <div>
              <h3 className='mb-2'>Customize </h3>
              <SheetDescription>
                <p>Pick a style and color for your components.</p>{" "}
              </SheetDescription>
            </div>

            <Switch
              checked={toggled}
              onCheckedChange={() => dispatch(toggle())}
            />
          </div>

          <div>
            <h3 className='my-5'> Default Qualities</h3>
            <div className='flex gap-4'>
              <Button variant='outline'>720px</Button>
              <Button variant='outline'>360px</Button>
            </div>
            <h3 className='my-5'>All Qualities</h3>
            <div className='grid grid-cols-3 gap-4'>
              {quality.map((e) => {
                return (
                  <Button key={e.quality} variant='outline'>
                    {e.quality}
                  </Button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className='my-5'>Languages</h3>
            <div className='grid grid-cols-3 gap-4'>
              {components.map((component) => (
                <Button
                  key={component.name}
                  // onClick={() => handleLanguageClick(component)}
                  variant='outline'
                  className='flex items-center cursor-pointer gap-1 '
                >
                  <Image
                    src={component.flag}
                    alt={`${component.name} flag`}
                    height={18}
                    width={18}
                  />
                  <span className='text-[12px]'> {component.name}</span>
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className='my-5'>Mode</h3>
            <div className='grid grid-cols-3 gap-3'>
              <Button variant='outline' className='flex gap-2' onClick={moon}>
                <span>
                  <Moon className='h-[1rem] w-[1rem]' />
                </span>
                Dark
              </Button>
              <Button variant='outline' className='flex gap-2' onClick={sun}>
                <span>
                  <Sun className='h-[1rem] w-[1rem]' />
                </span>
                Light
              </Button>
              <Button variant='outline' className='flex gap-2' onClick={system}>
                <span>
                  <MdOutlineDesktopWindows className='h-[1rem] w-[1rem]' />
                </span>
                System
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DropDown;
