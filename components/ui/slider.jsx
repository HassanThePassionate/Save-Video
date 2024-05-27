import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

// Format time function
const formatTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  if (hours > 0) {
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const MultiSlider = React.forwardRef(function MultiSlider(
  { className, ...props },
  ref
) {
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className='relative h-2 w-full grow overflow-hidden rounded-full bg-secondary'>
        <SliderPrimitive.Range className='absolute h-full bg-primary' />
      </SliderPrimitive.Track>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <SliderPrimitive.Thumb className='block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' />
          </TooltipTrigger>
          <TooltipContent className='rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md'>
            <p>{formatTime(props?.value?.[0] || 0)}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <SliderPrimitive.Thumb className='block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' />
          </TooltipTrigger>
          <TooltipContent className='rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md'>
            <p>{formatTime(props?.value?.[1] || 0)}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </SliderPrimitive.Root>
  );
});

MultiSlider.displayName = SliderPrimitive.Root.displayName;

export { MultiSlider };
