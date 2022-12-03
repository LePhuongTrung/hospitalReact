import React from "react";
import ListRoom from "../../components/manager/ListRoom";
import NavbarManager from "../../components/manager/navbarManager";

function homeManager() {
  return (
    <div class="flex">
      <NavbarManager />
      <ListRoom />
    </div>
  );
}

export default homeManager;
