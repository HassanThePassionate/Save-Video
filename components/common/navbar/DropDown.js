import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoSettingsOutline } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, EyeOff, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../../redux/toggle/toggleSlice"; // Ensure the path is correct
const DropDown = () => {
  const dispatch = useDispatch();
  const toggled = useSelector((state) => state.toggle.toggled);
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='icon'>
            <IoSettingsOutline size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>Setting</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className='my-[10px]'>
              <div className='flex items-center justify-between gap-2 w-full'>
                <div className='flex items-center gap-2 cursor-pointer'>
                  <EyeOff size={16} />
                  <span>Clean Up</span>
                </div>
                {toggled ? (
                  <Badge
                    variant='destructive'
                    className='cursor-pointer'
                    onClick={() => dispatch(toggle())}
                  >
                    Off
                  </Badge>
                ) : (
                  <Badge
                    className='bg-green-600 cursor-pointer'
                    onClick={() => dispatch(toggle())}
                  >
                    ON
                  </Badge>
                )}
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className='mb-[10px]'>
              <div className='flex items-center justify-between gap-2 w-full'>
                <div className='flex items-center gap-2'>
                  <Music2 size={16} />
                  <span>Select Quality</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span>720px</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDown;
