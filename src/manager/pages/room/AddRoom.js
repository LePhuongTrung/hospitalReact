import React from "react";
import NavbarManager from "../../../components/manager/navbarManager";
import RoomHeader from "../../../components/manager/RoomHeader";
import AddRoom from "../../components/AddRoom";

function homeManager() {
  return (
    <div class="flex">
      <NavbarManager />
      <div className="xl:w-3/4 2xl:w-4/5 w-full">
        <RoomHeader />
        <AddRoom />
      </div>
    </div>
  );
}

export default homeManager;
