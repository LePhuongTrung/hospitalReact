import React from "react";
import { Outlet } from "react-router-dom";
import StaffHeader from "../../components/staff/StaffHeader";

function Room() {
  return (
    <div className="w-full">
      <StaffHeader />
      <Outlet />
    </div>
  );
}

export default Room;
