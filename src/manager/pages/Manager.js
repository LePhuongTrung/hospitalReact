import React from "react";
import { Outlet } from "react-router-dom";
import NavbarManager from "../components/navbarManager";

function Manager() {
  return (
    <div className="flex">
      <div className="w-2/12">
        <NavbarManager />
      </div>
      <div className="w-10/12">
        <Outlet />
      </div>
    </div>
  );
}

export default Manager;
