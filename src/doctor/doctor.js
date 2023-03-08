import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/sideBar";

function Index() {
  return (
    <div className="h-108 my-10 mx-10 bg-white shadow-xl rounded-lg flex">
      <div className="w-2/12 h-full">
        <SideBar />
      </div>
      <div className="w-10/12 h-full flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
