import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/sideBar";

function Index() {
  return (
    <div className="mt-10 mx-96 bg-white shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Index;
