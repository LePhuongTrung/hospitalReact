import React from "react";

function Index() {
  return (
    <>
      <div className="xl:w-3/4 2xl:w-4/5 w-full">
        <div className="bg-white px-4 md:px-10 pb-5">
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>
                <tr className=" border-b-2  text-sm leading-none text-gray-600 h-16">
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
              </tbody>
            </table>
          </div>
          <div class="ml-418 mt-6"></div>
        </div>
      </div>
    </>
  );
}

export default Index;
