import React from "react";
import { Outlet } from "react-router-dom";

import CallButton from "../../public/components/CallButton";
import SideBarProfile from "../components/SideBarProfile";

function Index() {
  return (
    <div className="mt-10 mr-10 ml-10 bg-white shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar">
      <SideBarProfile />
      <Outlet />
      <CallButton />
    </div>
  );
}

export default Index;
