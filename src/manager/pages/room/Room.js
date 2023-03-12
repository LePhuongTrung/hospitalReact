import React from "react";
import { Outlet } from "react-router-dom";
import RoomHeader from "../../components/room/RoomHeader";

function Room() {
  return (
    <div className="w-full pr-12">
      <RoomHeader />
      <Outlet />
    </div>
  );
}

export default Room;
