import React from "react";
import { Outlet } from "react-router-dom";
import DeviceHeader from "../../components/device/DeviceHeader";

function Device() {
  return (
    <div className="w-full pr-12">
      <DeviceHeader />
      <Outlet />
    </div>
  );
}

export default Device;
