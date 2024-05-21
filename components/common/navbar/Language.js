"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

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

  const handleLanguageClick = (language) => {
    setSelectedCountry(language);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className='flex items-center gap-3'>
              {selectedCountry.flag && (
                <Image
                  src={selectedCountry.flag}
                  alt='selected flag'
                  height={16}
                  width={24}
                />
              )}
              {selectedCountry.name}
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[250px] md:w-[350px] gap-2 p-2 md:grid-cols-2 max-h-[25rem] overflow-auto'>
              {components.map((component) => (
                <ListItem
                  key={component.name}
                  onClick={() => handleLanguageClick(component)}
                >
                  <Image
                    src={component.flag}
                    alt='flags'
                    height={16}
                    width={24}
                  />
                  {component.name}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Language;

const ListItem = React.forwardRef(function ListItem({
  className,
  title,
  children,
  ...props
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          className={cn(
            "flex items-center cursor-pointer gap-2 select-none space-y-1 rounded-md p-2 md:p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground flex items-center gap-2 '>
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export { ListItem };
