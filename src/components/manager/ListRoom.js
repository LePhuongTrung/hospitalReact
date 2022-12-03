import React, { useEffect, useState } from "react";
import { findAll } from "../../services/room.service";

function Index() {
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
    <>
      <div className="xl:w-3/4 2xl:w-4/5 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Files
            </p>

            <div className="mt-4 sm:mt-0">
              <button className="inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">
                  Download All
                </p>
              </button>
              <button className="inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">
                  Add new room
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white px-4 md:px-10 pb-5">
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>
                <tr className="text-sm leading-none text-gray-600 h-16">
                  <td className="pl-8">
                    <p class="font-bold">Room ID</p>
                  </td>
                  <td className="pl-16">
                    <p class="font-bold">Faculty classification</p>
                  </td>
                  <td className="pl-16">
                    <p class="font-bold">Doctor's name</p>{" "}
                  </td>
                  <td className="pl-16">
                    <p class="font-bold">Current Number</p>{" "}
                  </td>
                  <td className="pl-16">
                    <p class="font-bold">Total Number</p>{" "}
                  </td>
                  <td className="pl-8">
                    <p class="font-bold">Priority room</p>{" "}
                  </td>
                </tr>
                {Rooms &&
                  Rooms.map((room) => (
                    <tr className="text-sm leading-none text-gray-600 h-16 border-solid border border-indigo-600 ">
                      <td className="pl-12">
                        <p>{room.roomNumber}</p>
                      </td>
                      <td className="pl-16">
                        <p>{room.type}</p>
                      </td>
                      <td>
                        <p className="pl-16">{room.DoctorName}</p>
                      </td>
                      <td>
                        <p className="pl-28">{room.CurrentNumber}</p>
                      </td>
                      <td>
                        <p className="pl-24">{room.TotalNumber}</p>
                      </td>
                      <td>
                        <p className="pl-16">{String(room.isPrioritized)}</p>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
