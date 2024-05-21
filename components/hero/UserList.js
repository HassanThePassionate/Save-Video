import React, { useState } from "react";
import UserItem from "./UserItem";

const UserList = () => {
  return (
    <div className='grid'>
      <UserItem name='Olivia Martin' time='8:47' />
      <UserItem name='Olivia Martin' time='8:47' />
    </div>
  );
};

export default UserList;
