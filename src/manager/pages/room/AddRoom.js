import React from "react";
import AddRoom from "../../components/AddRoom";
import NavbarManager from "../../components/navbarManager";
import RoomHeader from "../../components/RoomHeader";

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
