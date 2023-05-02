import React, { useEffect, useState } from "react";
import Pagination from "../../../public/components/Pagination";
import { findAll } from "../../api/sick.service";

function Index() {
  const [sicks, setSicks] = useState({
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
    getSick();
  }, []);

  const getSick = async (page) => {
    try {
      if (!page) {
        page = 1;
      }
      const response = await findAll(page);
      console.log("🚀 ~ file: ListSick.js:29 ~ getSick ~ response:", response);
      if (response.status !== 200) return;
      setSicks(response.data);
    } catch (error) {
      console.log("🚀 ~ file: ListSick.js:33 ~ getSick ~ error:", error);
    }
  };

  const paginateEnd = () => {
    const nextPage = sicks.totalPages;
    getSick(nextPage);
  };

  const paginateStart = () => {
    if (sicks.hasPrevPage) {
      getSick(1);
    }
  };

  const paginateNumber = (pageNumber) => {
    getSick(pageNumber);
  };
  return (
    <>
      <div className="px-4 md:px-10 pb-5 h-full">
        <div className="overflow-x-auto h-800">
          <table className="w-full whitespace-nowrap">
            <tbody>
              <tr className=" border-b-2  text-sm leading-none text-gray-600 h-16">
                <td className="pl-9">
                  <p className="font-bold">No</p>
                </td>
                <td className="pl-12">
                  <p className="font-bold">Sick Name</p>
                </td>
                <td className="pl-16">
                  <p className="font-bold">Sick Type</p>
                </td>
              </tr>
              {sicks.docs.length > 0 &&
                sicks.docs.map((sick, index) => (
                  <tr className=" text-sm leading-none text-gray-600 h-16 border-b hover:bg-gray-100 ">
                    <td className="pl-12">
                      <p>{index + 1}</p>
                    </td>
                    <td className="pl-12">
                      <p>{sick?.name}</p>
                    </td>
                    <td className="pl-16">
                      <p>{sick?.type}</p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <Pagination
          totalDocs={sicks.totalDocs}
          amount={sicks.docs.length}
          paginateStart={paginateStart}
          paginateEnd={paginateEnd}
          currentPage={sicks.page}
          totalPages={sicks.totalPages}
          paginateNumber={paginateNumber}
        />
      </div>
    </>
  );
}

export default Index;
