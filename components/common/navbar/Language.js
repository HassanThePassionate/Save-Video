"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components = [
  { name: "Afrikaans", flag: "🇿🇦" },
  { name: "Albanian", flag: "🇦🇱" },
  { name: "Amharic", flag: "🇪🇹" },
  { name: "Arabic", flag: "🇸🇦" },
  { name: "Armenian", flag: "🇦🇲" },
  { name: "Azerbaijani", flag: "🇦🇿" },
  { name: "Basque", flag: "🇪🇺" },
  { name: "Belarusian", flag: "🇧🇾" },
  { name: "Bengali", flag: "🇧🇩" },
  { name: "Bosnian", flag: "🇧🇦" },
  { name: "Bulgarian", flag: "🇧🇬" },
  { name: "Catalan", flag: "🇪🇸" },
  { name: "Cebuano", flag: "🇵🇭" },
  { name: "Chichewa", flag: "🇲🇼" },
  { name: "Chinese (Simplified)", flag: "🇨🇳" },
  { name: "Chinese (Traditional)", flag: "🇹🇼" },
  { name: "Corsican", flag: "🇫🇷" },
  { name: "Croatian", flag: "🇭🇷" },
  { name: "Czech", flag: "🇨🇿" },
  { name: "Danish", flag: "🇩🇰" },
  { name: "Dutch", flag: "🇳🇱" },
  { name: "English", flag: "🇬🇧" },
  { name: "Esperanto", flag: "🌍" },
  { name: "Estonian", flag: "🇪🇪" },
  { name: "Filipino", flag: "🇵🇭" },
  { name: "Finnish", flag: "🇫🇮" },
  { name: "French", flag: "🇫🇷" },
  { name: "Frisian", flag: "🇳🇱" },
  { name: "Galician", flag: "🇪🇸" },
  { name: "Georgian", flag: "🇬🇪" },
  { name: "German", flag: "🇩🇪" },
  { name: "Greek", flag: "🇬🇷" },
  { name: "Gujarati", flag: "🇮🇳" },
  { name: "Haitian Creole", flag: "🇭🇹" },
  { name: "Hausa", flag: "🇳🇬" },
  { name: "Hawaiian", flag: "🇺🇸" },
  { name: "Hebrew", flag: "🇮🇱" },
  { name: "Hindi", flag: "🇮🇳" },
  { name: "Hmong", flag: "🇱🇦" },
  { name: "Hungarian", flag: "🇭🇺" },
  { name: "Icelandic", flag: "🇮🇸" },
  { name: "Igbo", flag: "🇳🇬" },
  { name: "Indonesian", flag: "🇮🇩" },
  { name: "Irish", flag: "🇮🇪" },
  { name: "Italian", flag: "🇮🇹" },
  { name: "Japanese", flag: "🇯🇵" },
  { name: "Javanese", flag: "🇮🇩" },
  { name: "Kannada", flag: "🇮🇳" },
  { name: "Kazakh", flag: "🇰🇿" },
  { name: "Khmer", flag: "🇰🇭" },
  { name: "Kinyarwanda", flag: "🇷🇼" },
];

const Language = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Country</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[250px] md:w-[350px] gap-2 p-2 md:grid-cols-2 max-h-[25rem] overflow-auto'>
              {components.map((component) => (
                <ListItem
                  key={component.name}
                  title={component.flag}
                  href={component.name}
                >
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

const ListItem = React.forwardRef(function ListItem(
  { className, title, children, ...props },
  ref
) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex items-center gap-2 select-none space-y-1 rounded-md p-2 md:p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export { ListItem };
