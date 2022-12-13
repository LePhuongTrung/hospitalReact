import React from "react";
import { Outlet } from "react-router-dom";
import NavbarManager from "../components/navbarManager";

function Manager() {
  return (
    <div className="flex">
      <NavbarManager />

      <Outlet />
    </div>
  );
}

export default Manager;
