"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
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

const Language = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Country",
    flag: "",
  });
  const [open, setOpen] = useState(false);

  const handleLanguageClick = (language) => {
    setSelectedCountry(language);
    setOpen(false); // Close the select content after selection
  };

  return (
    <Select open={open} onOpenChange={setOpen}>
      <SelectTrigger className='sm:w-[180px] w-[130px]'>
        <div className='flex items-center gap-3'>
          {selectedCountry.flag && (
            <Image
              src={selectedCountry.flag}
              alt='selected flag'
              height={18}
              width={18}
            />
          )}
          {selectedCountry.name}
        </div>
      </SelectTrigger>
      <SelectContent>
        <ul className='grid w-[250px] md:w-[350px] gap-2 p-2 md:grid-cols-2 max-h-[25rem] overflow-auto scrollbar-thin scrollbar-webkit'>
          {components.map((component) => (
            <li
              key={component.name}
              onClick={() => handleLanguageClick(component)}
              className='flex items-center cursor-pointer gap-2 p-2 hover:bg-gray-100 hover:dark:bg-[#333]'
            >
              <Image
                src={component.flag}
                alt={`${component.name} flag`}
                height={18}
                width={18}
              />
              {component.name}
            </li>
          ))}
        </ul>
      </SelectContent>
    </Select>
  );
};

export default Language;
