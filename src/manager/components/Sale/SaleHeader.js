import React from "react";

function SaleHeader() {
  return (
    <div className="flex flex-col">
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="sm:flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Chart
          </p>

          <div className="mt-4 sm:mt-0">
            <button className="inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
              <a
                href="/Manager/Sale/week"
                className="text-sm font-medium leading-none text-white"
              >
                Week
              </a>
            </button>
            <button className="inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
              <a
                href="/Manager/Sale/AddSale"
                className="text-sm font-medium leading-none text-white"
              >
                Add Sick
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleHeader;
