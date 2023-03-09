import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { findAll } from "../../api/room.service";

function Index() {
  useEffect(() => {
    getRoom();
  }, []);
  const [Rooms, setRooms] = useState([]);
  let [CurrentNumber, setCurrentNumber] = useState(0);
  const [totalNumber, setTotalNumber] = useState();
  const [Number1, setNumber1] = useState(0);
  const [Disabled1, setDisabled1] = useState(true);
  const [Number2, setNumber2] = useState(0);
  const [Disabled2, setDisabled2] = useState(true);

  const [Number3, setNumber3] = useState(0);
  const [Disabled3, setDisabled3] = useState(true);

  const [Number4, setNumber4] = useState(0);
  const [Disabled4, setDisabled4] = useState(true);

  const [Number5, setNumber5] = useState(0);
  const [Disabled5, setDisabled5] = useState(true);

  const getRoom = async (page) => {
    try {
      if (!page) {
        page = 1;
      }
      const response = await findAll(page);
      if (response.status !== 200) return;
      setRooms(response.data.docs);

      const i = response.data.page;
      setCurrentNumber(i);
      setTotalNumber(response.data.totalPages);
    } catch (error) {
      console.error("🚀 ~ file: Login.js ~ line 52 ~ onSubmit ~ error", error);
    }
  };

  const handlePageClick = async () => {};
  useEffect(() => {
    if (CurrentNumber === 1) {
      setNumber1(CurrentNumber);
      setNumber2(CurrentNumber + 1);
      setNumber3(CurrentNumber + 2);
      setNumber4(CurrentNumber + 3);
      setNumber5(CurrentNumber + 4);
    } else if (CurrentNumber === 2) {
      setNumber2(CurrentNumber);
      setNumber1(CurrentNumber - 1);
      setNumber3(CurrentNumber + 1);
      setNumber4(CurrentNumber + 2);
      setNumber5(CurrentNumber + 3);
    } else {
      setNumber1(CurrentNumber - 2);
      setNumber2(CurrentNumber - 1);
      setNumber3(CurrentNumber);
      setNumber4(CurrentNumber + 1);
      setNumber5(CurrentNumber + 2);
    }
  }, [CurrentNumber]);

  return (
    <>
      <div className="bg-white px-4 md:px-10 pb-5">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <tbody>
              <tr className=" border-b-2  text-sm leading-none text-gray-600 h-16">
                <td className="pl-8">
                  <p className="font-bold">Room ID</p>
                </td>
                <td className="pl-16">
                  <p className="font-bold">Faculty classification</p>
                </td>
                <td className="pl-16">
                  <p className="font-bold">Doctor's name</p>{" "}
                </td>
                <td className="pl-16">
                  <p className="font-bold">Current Number</p>{" "}
                </td>
                <td className="pl-16">
                  <p className="font-bold">Total Number</p>{" "}
                </td>
                <td className="pl-8">
                  <p className="font-bold">Priority room</p>{" "}
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
        <div className="flex justify-center items-center	">
          <ReactPaginate
            className="flex justify-center"
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={totalNumber}
            onPageChange={handlePageClick}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </>
  );
}

export default Index;
