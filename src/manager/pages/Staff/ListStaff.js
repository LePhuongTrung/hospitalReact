import React, { useEffect, useState } from "react";
import Pagination from "../../../public/components/Pagination";
import { findAll } from "../../api/staff.service";

function Index() {
  const [data, setData] = useState({
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
      if (response.status !== 200) return;
      setData(response.data);
    } catch (error) {
      console.error("🚀 ~ file: ListStaff.js:33 ~ getRoom ~ error:", error);
    }
  };

  const paginateEnd = () => {
    const nextPage = data.totalPages;
    getRoom(nextPage);
  };

  const paginateStart = () => {
    if (data.hasPrevPage) {
      getRoom(1);
    }
  };

  const paginateNumber = (pageNumber) => {
    getRoom(pageNumber);
  };
  return (
    <>
      <div className="px-4 md:px-10 pb-5 h-full">
        <div className="overflow-x-auto h-800">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className=" border-b-2  text-sm leading-none text-gray-600 h-16">
                <th className="pl-10">
                  <p className="font-bold text-left">Image</p>
                </th>
                <th>
                  <p className="font-bold text-left">Full Name</p>
                </th>
                <th className="pl-2">
                  <p className="font-bold text-left">Identifier Code</p>
                </th>
                <th className="pl-2">
                  <p className="font-bold text-left">Room Number</p>
                </th>
                <th className="pl-2 ">
                  <p className="font-bold text-left">Email</p>
                </th>
                <th className="pl-2">
                  <p className="font-bold text-left">Coefficient Salary</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.docs.map((element, index) => (
                <tr
                  className=" text-sm leading-none text-gray-600 h-16 border-b hover:bg-gray-100"
                  key={element?._id}
                >
                  <td className="pl-6">
                    <img
                      src={element?.ImgUrl}
                      alt={element?.fullName}
                      className="h-20 w-20 rounded-full mt-2 mb-2"
                    />
                  </td>
                  <td>
                    <p>{element?.fullName}</p>
                  </td>
                  <td className="pl-3">
                    <p>{element?.identifierCode}</p>
                  </td>
                  <td className="pl-3">
                    <p>{element?.roomNumber}</p>
                  </td>
                  <td className="pl-2">
                    <p>{element?.email}</p>
                  </td>
                  <td className="pl-2">
                    <p>{element?.coefficientsSalary}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          totalDocs={data.totalDocs}
          amount={data.docs.length}
          paginateStart={paginateStart}
          paginateEnd={paginateEnd}
          currentPage={data.page}
          totalPages={data.totalPages}
          paginateNumber={paginateNumber}
        />
      </div>
    </>
  );
}

export default Index;
