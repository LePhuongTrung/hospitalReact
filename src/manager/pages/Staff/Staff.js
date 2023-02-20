import React from "react";
import { Outlet } from "react-router-dom";
import StaffHeader from "../../components/staff/StaffHeader";

function Room() {
  return (
    <div className="xl:w-3/4 2xl:w-4/5 w-full">
      <StaffHeader />
      <Outlet />
    </div>
  );
}

export default Room;
