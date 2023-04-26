import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Pagination from "../../../public/components/Pagination";
import { findAll } from "../../api/device.service";

function Index() {
  const navigate = useNavigate();

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
      if (response.status === 200) setDevices(response.data);
      return;
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

  function detail(element) {
    navigate("/manager/device/detail", { state: element });
  }

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
                  <p className="font-bold">Device Name</p>
                </td>
                <td className="pl-16">
                  <p className="font-bold">Device type</p>
                </td>
                <td className="pl-16">
                  <p className="font-bold">classification</p>
                </td>
                <td className="pl-8">
                  <p className="font-bold">quantity</p>
                </td>
              </tr>
              {Devices.docs.length > 0 &&
                Devices.docs.map((element, Index) => (
                  <tr
                    className=" text-sm leading-none text-gray-600 h-16 border-b hover:bg-gray-100 "
                    onClick={() => detail(element)}
                  >
                    <td className="pl-12">
                      <p>{Index + 1}</p>
                    </td>
                    <td className="pl-16">
                      <p>{element?.name}</p>
                    </td>
                    <td>
                      <p className="pl-16">{element?.deviceType}</p>
                    </td>
                    <td>
                      <p className="pl-16">{element?.classification}</p>
                    </td>
                    <td>
                      <p className="pl-8">{String(element?.quantity)}</p>
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
