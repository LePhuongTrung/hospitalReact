import React from "react";
import ListRoom from "../../components/ListRoom";
import RoomHeader from "../../components/RoomHeader";

function homeManager() {
  return (
    <div className="xl:w-3/4 2xl:w-4/5 w-full">
      <RoomHeader />
      <ListRoom />
    </div>
  );
}

export default homeManager;
