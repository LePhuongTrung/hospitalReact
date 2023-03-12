import React, { useEffect, useState } from "react";
import Pagination from "../../../public/components/Pagination";
import { findAll } from "../../api/room.service";

function Index() {
  const [Rooms, setRooms] = useState({
    docs: [],
    totalDocs: 0,
    limit: 10,
    totalPages: 0,
    page: 1,
    pagingCounter: 1,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  });

  useEffect(() => {
    getRoom();
  }, []);

  const getRoom = async (page) => {
    try {
      if (!page) {
        page = 1;
      }
      const response = await findAll(page);
      console.log("🚀 ~ file: ListRoom.js:17 ~ getRoom ~ response:", response);
      if (response.status !== 200) return;
      setRooms(response.data);
    } catch (error) {
      console.error("🚀 ~ file: Login.js ~ line 52 ~ onSubmit ~ error", error);
    }
  };

  const paginateEnd = () => {
    const nextPage = Rooms.totalPages;
    getRoom(nextPage);
  };

  const paginateStart = () => {
    if (Rooms.hasPrevPage) {
      getRoom(1);
    }
  };

  const paginateNumber = (pageNumber) => {
    getRoom(pageNumber);
  };
  return (
    <>
      <div className=" bg-slate-200 px-4 md:px-10 pb-5 h-full">
        <div className="overflow-x-auto h-800">
          <table className="w-full whitespace-nowrap">
            <tbody>
              <tr className=" border-b-2  text-sm leading-none text-gray-600 h-16">
                <td className="pl-8">
                  <p className="font-bold">Room Name</p>
                </td>
                <td className="pl-16">
                  <p className="font-bold">Faculty classification</p>
                </td>
                <td className="pl-16">
                  <p className="font-bold">Current Number</p>
                </td>
                <td className="pl-16">
                  <p className="font-bold">Total Number</p>
                </td>
                <td className="pl-8">
                  <p className="font-bold">Priority room</p>
                </td>
              </tr>
              {Rooms.docs.length > 0 &&
                Rooms.docs.map((room) => (
                  <tr className=" text-sm leading-none text-gray-600 h-16 border-b hover:bg-gray-100 ">
                    <td className="pl-12">
                      <p>{room?.roomNumber}</p>
                    </td>
                    <td className="pl-16">
                      <p>{room?.type}</p>
                    </td>
                    <td>
                      <p className="pl-28">{room?.CurrentNumber}</p>
                    </td>
                    <td>
                      <p className="pl-24">{room?.TotalNumber}</p>
                    </td>
                    <td>
                      <p className="pl-16">{String(room?.isPrioritized)}</p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <Pagination
          totalDocs={Rooms.totalDocs}
          amount={Rooms.docs.length}
          paginateStart={paginateStart}
          paginateEnd={paginateEnd}
          currentPage={Rooms.page}
          totalPages={Rooms.totalPages}
          paginateNumber={paginateNumber}
        />
      </div>
    </>
  );
}

export default Index;
