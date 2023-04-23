import React, { useEffect, useState } from "react";
import { GetAllWait } from "../api/wait";

function Index() {
  const [historyData, setData] = useState([]);
  useEffect(() => {
    getHistory();
  }, []);
  const getHistory = async () => {
    const response = await GetAllWait();
    console.log(
      "🚀 ~ file: MedicalHistory.js:12 ~ getHistory ~ response:",
      response
    );
    setData(response.data.docs);
  };
  useEffect(() => {
    console.log(
      "🚀 ~ file: MedicalHistory.js:6 ~ Index ~ historyData:",
      historyData[0]?.MedicalForm.Diagnostic
    );
  }, [historyData]);
  return (
    <div className="w-full mt-6">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="w-1/4 px-6 bg-gray-50 dark:bg-gray-800"
              >
                Date
              </th>
              <th scope="col" className=" w-1/4 py-3 px-6">
                Room
              </th>
              <th
                scope="col"
                className="w-1/2 py-3 px-6 bg-gray-50 dark:bg-gray-800"
              >
                Diagnostic
              </th>
            </tr>
          </thead>
          <tbody className="">
            {historyData &&
              historyData?.map((data, Index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {Index + 1}
                  </th>
                  <td className="py-4 px-6">{data?.roomNumber}</td>
                  <td className="py-4 px-6">{data?.MedicalForm?.Diagnostic}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
