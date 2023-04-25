import React, { useEffect, useState } from "react";
import Pagination from "../../../public/components/Pagination";
import { findAll } from "../../api/room.service";

function Index() {
  const [Devices, setDevices] = useState({
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
    getDevice();
  }, []);

  const getDevice = async (page) => {
    try {
      if (!page) {
        page = 1;
      }
      const response = await findAll(page);
      if (response.status !== 200) return;
      setDevices(response.data);
    } catch (error) {
      console.error("🚀 ~ file: Login.js ~ line 52 ~ onSubmit ~ error", error);
    }
  };

  const paginateEnd = () => {
    const nextPage = Devices.totalPages;
    getDevice(nextPage);
  };

  const paginateStart = () => {
    if (Devices.hasPrevPage) {
      getDevice(1);
    }
  };

  const paginateNumber = (pageNumber) => {
    getDevice(pageNumber);
  };
  return (
    <>
      <div className="px-4 md:px-10 pb-5 h-full">
        <div className="overflow-x-auto h-800">
          <table className="w-full whitespace-nowrap">
            <tbody>
              <tr className=" border-b-2  text-sm leading-none text-gray-600 h-16">
                <td className="pl-8">
                  <p className="font-bold"> Index</p>
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
              {Devices.docs.length > 0 &&
                Devices.docs.map((element, Index) => (
                  <tr className=" text-sm leading-none text-gray-600 h-16 border-b hover:bg-gray-100 ">
                    <td className="pl-12">
                      <p>{Index}</p>
                    </td>
                    <td className="pl-16">
                      <p>{element?.type}</p>
                    </td>
                    <td>
                      <p className="pl-28">{element?.CurrentNumber}</p>
                    </td>
                    <td>
                      <p className="pl-24">{element?.TotalNumber}</p>
                    </td>
                    <td>
                      <p className="pl-16">{String(element?.isPrioritized)}</p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <Pagination
          totalDocs={Devices.totalDocs}
          amount={Devices.docs.length}
          paginateStart={paginateStart}
          paginateEnd={paginateEnd}
          currentPage={Devices.page}
          totalPages={Devices.totalPages}
          paginateNumber={paginateNumber}
        />
      </div>
    </>
  );
}

export default Index;
