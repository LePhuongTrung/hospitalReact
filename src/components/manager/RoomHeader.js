import React, { useEffect, useState } from "react";
import { findAll } from "../../services/room.service";

function RoomHeader() {
  const [Rooms, setRooms] = useState([]);
  const getRoom = async (page) => {
    try {
      if (!page) {
        page = 1;
      }
      const response = await findAll(page);
      console.log("🚀 ~ file: ListRoom.js:9 ~ findAll ~ response", response);
      if (response.status !== 200) return;
      setRooms(response.data.docs);
      console.log("🚀 ~ file: ListRoom.js:15 ~ getRoom ~ Rooms", Rooms);
    } catch (error) {
      console.log("🚀 ~ file: Login.js ~ line 52 ~ onSubmit ~ error", error);
    }
  };
  useEffect(() => {
    getRoom();
  }, []);
  return (
    <div class="flex flex-col">
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="sm:flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Files
          </p>

          <div className="mt-4 sm:mt-0">
            <button className="inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
              <p className="text-sm font-medium leading-none text-white">
                ListRoom
              </p>
            </button>
            <button className="inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
              <p className="text-sm font-medium leading-none text-white">
                Add room
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomHeader;
