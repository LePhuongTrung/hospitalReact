import React, { useEffect, useState } from "react";
import { Data } from "./Data";

function Index() {
  const [historyData, setData] = useState([]);
  useEffect(() => {
    getHistory();
  }, []);
  const getHistory = async () => {
    setData(Data);
  };

  return (
    <div className="w-full mt-6">
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg mx-10">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="w-1/4 px-6 bg-gray-50 dark:bg-gray-800">
                Date
              </th>
              <th scope="col" class=" w-1/4 py-3 px-6">
                Room
              </th>
              <th
                scope="col"
                class="w-1/2 py-3 px-6 bg-gray-50 dark:bg-gray-800"
              >
                Diagnostic
              </th>
            </tr>
          </thead>
          <tbody>
            {historyData &&
              historyData.map((data) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.date}
                  </th>
                  <td class="py-4 px-6">{data.room}</td>
                  <td class="py-4 px-6">{data.Diagnostic}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
