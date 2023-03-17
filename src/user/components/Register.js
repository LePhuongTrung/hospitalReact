import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { typeSick } from "../pages/Data";

export default function NavBar() {
  const [selectedValue, setSelectedValue] = useState("");

  const [sick, setSick] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);
  const getHistory = async () => {
    setSick(typeSick);
  };

  const submit = (event) => {
    event.preventDefault();
    const date = new Date();
    const day = date.getDay();
    if (day === 0 || day === 6) {
      toast.warning("Outside working day");
    }
    const hour = date.getHours();
    if (hour < 7 || (hour > 12 && hour < 13) || hour > 17) {
      toast.warning("Outside working hours");
    }
  };
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="flex space-x-10">
      <div className="w-1/2 mx-auto">
        <p className="text-center text-xl font-semibold">Medical register</p>
        <p className="text-center ">
          Please select the information that matches the disease you want to
          check to get the right number.
        </p>
        <div className="mt-4 w-1/2 mx-auto">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Injured parts
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleSelectChange}
              >
                {sick &&
                  sick.map((data) => (
                    <option value={data.sick}>{data.sick}</option>
                  ))}
              </select>
            </div>
            <div className="mt-4">
              <button
                onClick={submit}
                className="w-1/2 mx-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Take Number
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
