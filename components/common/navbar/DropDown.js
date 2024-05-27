import React, { useEffect, useState } from "react";
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

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedQuality, setSelectedQuality] = useState("720p");
  const [selectedMode, setSelectedMode] = useState("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      setSelectedMode(savedTheme); // Ensure the mode button is selected on load
    }
  }, [setTheme]);

  const handleModeClick = (mode) => {
    setSelectedMode(mode);
    setTheme(mode);
    localStorage.setItem("theme", mode);
  };

  const handleQualityClick = (quality) => {
    setSelectedQuality(quality);
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
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
    { quality: "1080p" },
    { quality: "1440p" },
    { quality: "2160p" },
    { quality: "2320p" },
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
          <div className='max-w-3xl mx-auto my-4 md:my-12 space-y-8'>
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
              <div className='grid grid-cols-3 sm:grid-cols-6  gap-4'>
                <Button
                  variant='outline'
                  className={` ${
                    selectedQuality === "720p" ? " bg-black dark:bg-[#666]" : ""
                  } ${selectedQuality === "720p" ? "text-white" : ""}   `}
                  onClick={() => handleQualityClick("720p")}
                >
                  720px
                </Button>
                <Button
                  variant='outline'
                  className={` ${
                    selectedQuality === "360p" ? " bg-black dark:bg-[#666]" : ""
                  } ${selectedQuality === "360p" ? "text-white" : ""}   `}
                  onClick={() => handleQualityClick("360p")}
                >
                  360px
                </Button>
              </div>
              <h3 className='my-5'>All Qualities</h3>
              <div className='grid grid-cols-3 sm:grid-cols-6 gap-4'>
                {quality.map((e) => (
                  <Button
                    key={e.quality}
                    variant='outline'
                    className={` ${
                      selectedQuality === e.quality
                        ? " bg-black dark:bg-[#666]"
                        : ""
                    } ${selectedQuality === e.quality ? "text-white" : ""}   `}
                    onClick={() => handleQualityClick(e.quality)}
                  >
                    {e.quality}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className='my-5'>Languages</h3>
              <div className='grid grid-cols-3 sm:grid-cols-6 gap-4'>
                {components.map((component) => (
                  <Button
                    key={component.name}
                    onClick={() => handleLanguageClick(component.name)}
                    variant='outline'
                    className={` ${
                      selectedLanguage === component.name
                        ? " bg-black dark:bg-[#666]"
                        : ""
                    } ${
                      selectedLanguage === component.name ? "text-white" : ""
                    }   flex items-center cursor-pointer gap-1 `}
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
              <h3 className='my-5'>Modes</h3>
              <div className='grid grid-cols-3 sm:grid-cols-6 gap-4'>
                <Button
                  variant='outline'
                  className={` ${
                    selectedMode === "light" ? " bg-black dark:bg-[#666]" : ""
                  } ${
                    selectedMode === "light" ? "text-white" : ""
                  }   flex items-center cursor-pointer gap-1 `}
                  onClick={() => handleModeClick("light")}
                >
                  <Sun />
                  Light
                </Button>
                <Button
                  variant='outline'
                  className={` ${
                    selectedMode === "dark" ? " bg-black dark:bg-[#666]" : ""
                  } ${
                    selectedMode === "dark" ? "text-white" : ""
                  }   flex items-center cursor-pointer gap-1 `}
                  onClick={() => handleModeClick("dark")}
                >
                  <Moon />
                  Dark
                </Button>
                <Button
                  variant='outline'
                  className={` ${
                    selectedMode === "system" ? " bg-black dark:bg-[#666]" : ""
                  } ${
                    selectedMode === "system" ? "text-white" : ""
                  }     flex items-center cursor-pointer gap-1`}
                  onClick={() => handleModeClick("system")}
                >
                  <MdOutlineDesktopWindows size={20} />
                  System
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DropDown;
