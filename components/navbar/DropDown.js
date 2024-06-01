import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { Moon, Paintbrush, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/toggle/toggleSlice";
import { setQuality } from "@/redux/quality/qualitySlice";
import Image from "next/image";

const DropDown = () => {
  const dispatch = useDispatch();
  const toggled = useSelector((state) => state.toggle.toggled);
  const quality = useSelector((state) => state.quality.quality);
  const { setTheme } = useTheme();

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedMode, setSelectedMode] = useState("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      setSelectedMode(savedTheme); // Ensure the mode button is selected on load
    }
  }, [setTheme]);
  const handleQualityChange = (newQuality) => {
    dispatch(setQuality(newQuality));
  };
  const handleModeClick = (mode) => {
    setSelectedMode(mode);
    setTheme(mode);
    localStorage.setItem("theme", mode);
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

  const qualits = [
    { quality: "1080p" },
    { quality: "1440p" },
    { quality: "2160p" },
    { quality: "2320p" },
  ];

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost">
            <span>
              <Paintbrush size={16} />
            </span>
            <span className=" hidden sm:flex sm:pl-1 mr-[30px]">Customize</span>
          </Button>
        </SheetTrigger>

        <SheetContent className="content" side="bottom">
          <div className="max-w-3xl mx-auto my-4 md:my-12 space-y-8">
            <SheetHeader>
              <SheetTitle>
                <h1 className="font-semibold text-xl">Setting</h1>
              </SheetTitle>
            </SheetHeader>
            <div className="flex items-center justify-between gap-2 mt-5 ">
              <div>
                <h2 className="mb-2 font-semibold">Customize </h2>
                <SheetDescription>
                  <p>Pick a style and color for your components.</p>{" "}
                </SheetDescription>
              </div>

              <Switch
                checked={toggled}
                onCheckedChange={() => dispatch(toggle())}
              />
            </div>
            <div className="divider div-transparent "></div>
            <div>
              <h2 className="my-5 font-semibold"> Default Qualities</h2>
              <div className="grid grid-cols-3 sm:grid-cols-6  gap-4">
                <Button
                  variant="outline"
                  className={` ${
                    quality === "720p"
                      ? " bg-black dark:bg-[#666] hover:bg-black"
                      : ""
                  } ${
                    quality === "720p" ? "text-white hover:text-white" : ""
                  }   `}
                  onClick={() => handleQualityChange("720p")}
                >
                  720px
                </Button>
                <Button
                  variant="outline"
                  className={` ${
                    quality === "360p"
                      ? " bg-black dark:bg-[#666] hover:bg-black"
                      : ""
                  } ${
                    quality === "360p" ? "text-white hover:text-white" : ""
                  }   `}
                  onClick={() => handleQualityChange("360p")}
                >
                  360px
                </Button>
              </div>
              <h2 className="my-5 font-semibold">All Qualities</h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {qualits.map((e) => (
                  <Button
                    key={e.quality}
                    variant="outline"
                    className={` ${
                      quality === e.quality
                        ? " bg-black dark:bg-[#666] hover:bg-black"
                        : ""
                    } ${
                      quality === e.quality ? "text-white hover:text-white" : ""
                    }   `}
                    onClick={() => handleQualityChange(e.quality)}
                  >
                    {e.quality}
                  </Button>
                ))}
              </div>
            </div>
            <div className="divider div-transparent "></div>
            <div>
              <h2 className="my-5 font-semibold">Languages</h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {components.map((component) => (
                  <Button
                    key={component.name}
                    onClick={() => handleLanguageClick(component.name)}
                    variant="outline"
                    className={` ${
                      selectedLanguage === component.name
                        ? " bg-black dark:bg-[#666] hover:bg-black"
                        : ""
                    } ${
                      selectedLanguage === component.name
                        ? "text-white hover:text-white"
                        : ""
                    }   flex items-center cursor-pointer gap-1 `}
                  >
                    <Image
                      src={component.flag}
                      alt={`${component.name} flag`}
                      height={18}
                      width={18}
                    />
                    <span className="text-[12px]"> {component.name}</span>
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <div className="divider div-transparent "></div>
              <h2 className="my-5 font-semibold">Modes</h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                <Button
                  variant="outline"
                  className={` ${
                    selectedMode === "light"
                      ? " bg-black dark:bg-[#666] hover:bg-black"
                      : ""
                  } ${
                    selectedMode === "light"
                      ? "text-white hover:text-white"
                      : ""
                  }   flex items-center cursor-pointer gap-1 `}
                  onClick={() => handleModeClick("light")}
                >
                  <Sun />
                  Light
                </Button>
                <Button
                  variant="outline"
                  className={` ${
                    selectedMode === "dark"
                      ? " bg-black dark:bg-[#666] hover:bg-black"
                      : ""
                  } ${
                    selectedMode === "dark" ? "text-white hover:text-white" : ""
                  }   flex items-center cursor-pointer gap-1 `}
                  onClick={() => handleModeClick("dark")}
                >
                  <Moon />
                  Dark
                </Button>
                <Button
                  variant="outline"
                  className={` ${
                    selectedMode === "system"
                      ? " bg-black dark:bg-[#666] hover:bg-black"
                      : ""
                  } ${
                    selectedMode === "system"
                      ? "text-white hover:text-white"
                      : ""
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
