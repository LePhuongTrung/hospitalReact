import React from "react";
import { Outlet } from "react-router-dom";

import HeaderComponent from "../components/Header";
function homeUser() {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
}

export default homeUser;
