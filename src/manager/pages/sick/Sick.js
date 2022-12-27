import React from "react";
import { Outlet } from "react-router-dom";
import SickHeader from "../../components/sick/SickHeader";

function Room() {
  return (
    <div className="xl:w-3/4 2xl:w-4/5 w-full">
      <SickHeader />
      <Outlet />
    </div>
  );
}

export default Room;
