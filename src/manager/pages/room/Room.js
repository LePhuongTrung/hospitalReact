import React from "react";
import { Outlet } from "react-router-dom";
import RoomHeader from "../../components/RoomHeader";

function Room() {
  return (
    <div className="xl:w-3/4 2xl:w-4/5 w-full">
      <RoomHeader />
      <Outlet />
    </div>
  );
}

export default Room;
