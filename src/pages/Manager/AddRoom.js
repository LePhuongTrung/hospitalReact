import React from "react";
import AddRoom from "../../components/manager/AddRoom";
import NavbarManager from "../../components/manager/navbarManager";
import RoomHeader from "../../components/manager/RoomHeader";

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
