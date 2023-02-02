import React, { useEffect, useState } from "react";
import { typeSick } from "../pages/Data";

export default function NavBar() {
  const [sick, setSick] = useState([]);
  useEffect(() => {
    getHistory();
  }, []);
  const getHistory = async () => {
    setSick(typeSick);
  };
  return (
    <div class="flex space-x-10">
      <div class="w-1/2 mx-auto">
        <p class="text-center text-xl font-semibold">Medical register</p>
        <p class="text-center ">
          Please select the information that matches the disease you want to
          check to get the right number.
        </p>
        <div class="mt-4 w-1/2 mx-auto">
          <form className="space-y-6">
            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Injured parts
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {sick &&
                  sick.map((data) => (
                    <option value={data.sick}>{data.sick}</option>
                  ))}
              </select>
            </div>
            <div class="mt-4">
              <button
                type="submit"
                className="w-1/2 mx-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Take Number
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
