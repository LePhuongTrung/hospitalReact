import React from "react";

function Index() {
  return (
    <>
      <div className="xl:w-3/4 2xl:w-4/5 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Files
            </p>
            <div className="mt-4 sm:mt-0">
              <button className="inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">
                  Download All
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white px-4 md:px-10 pb-5">
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>
                <tr className="text-sm leading-none text-gray-600 h-16">
                  <td className="pl-8">
                    <p class="font-bold">Room ID</p>
                  </td>
                  <td className="pl-16">
                    <p class="font-bold">Faculty classification</p>
                  </td>
                  <td className="pl-16">
                    <p class="font-bold">Doctor's name</p>{" "}
                  </td>
                  <td className="pl-16">
                    <p class="font-bold">Current Number</p>{" "}
                  </td>
                  <td className="pl-16">
                    <p class="font-bold">Total Number</p>{" "}
                  </td>
                  <td className="pl-8">
                    <p class="font-bold">Priority room</p>{" "}
                  </td>
                </tr>
                <tr className="text-sm leading-none text-gray-600 h-16 border-solid border border-indigo-600 ">
                  <td className="pl-12">
                    <p>1</p>
                  </td>
                  <td className="pl-16">
                    <p>internalDiseases</p>
                  </td>
                  <td>
                    <p className="pl-16">Ha Van Hoang</p>
                  </td>
                  <td>
                    <p className="pl-28">2</p>
                  </td>
                  <td>
                    <p className="pl-24">3</p>
                  </td>
                  <td>
                    <p className="pl-16">Yes</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
