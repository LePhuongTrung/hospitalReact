import React from "react";
import AddRoom from "../../components/AddRoom";
import RoomHeader from "../../components/RoomHeader";

function homeManager() {
  return (
    <div className="xl:w-3/4 2xl:w-4/5 w-full">
      <RoomHeader />
      <AddRoom />
    </div>
  );
}

export default homeManager;
