import React from "react";
import ListRoom from "../../components/ListRoom";
import NavbarManager from "../../components/navbarManager";
import RoomHeader from "../../components/RoomHeader";

function homeManager() {
  return (
    <div class="flex">
      <NavbarManager />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <RoomHeader />
        <ListRoom />
      </div>
    </div>
  );
}

export default homeManager;
