import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Dropdown from "./Dropdown";

const UserItem = ({ name, time }) => (
  <div className="flex items-center justify-between gap-5 flex-wrap mb-[30px]">
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <h5 className="text-[16px] font-semibold">{name}</h5>
        <Badge variant="outline">{time}</Badge>
      </div>
    </div>
    <Dropdown />
  </div>
);

export default UserItem;
