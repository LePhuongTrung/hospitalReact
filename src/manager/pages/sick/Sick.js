import React from "react";
import { Outlet } from "react-router-dom";
import SickHeader from "../../components/sick/SickHeader";

function Sick() {
  return (
    <div className="w-full pr-12">
      <SickHeader />
      <Outlet />
    </div>
  );
}

export default Sick;
