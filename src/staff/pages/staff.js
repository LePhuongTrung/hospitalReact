import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar";

function Room() {
  return (
    <div className="flex xl:w-3/4 2xl:w-4/5 w-full space-x-4">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Room;
