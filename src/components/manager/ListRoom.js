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
      <div className="bg-white px-4 md:px-10 pb-5">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <tbody>
              <tr className=" border-b-2  text-sm leading-none text-gray-600 h-16">
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
                  <tr className=" text-sm leading-none text-gray-600 h-16 border-b hover:bg-gray-100 ">
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
    </>
  );
}

export default Index;
