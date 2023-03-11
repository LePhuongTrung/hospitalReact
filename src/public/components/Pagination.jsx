import React from "react";

export default function Pagination({
  totalDocs,
  amount,
  paginateFront,
  paginateBack,
  currentPage,
  totalPages,
}) {
  const pageNumbers = [];
  const halfDisplayed = 2;
  const startOffset = Math.min(
    halfDisplayed,
    Math.max(1, currentPage - halfDisplayed)
  );
  const endOffset = Math.min(
    halfDisplayed,
    Math.max(1, totalPages - currentPage)
  );
  const startPage = currentPage - startOffset;
  const endPage = currentPage + endOffset;

  for (let i = startPage; i <= endPage; i++) {
    if (i > 0 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  const handlePreviousPage = () => {
    paginateBack();
  };

  const handleNextPage = () => {
    paginateFront();
  };
  return (
    <div class="w-full flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700 space-x-4">
            page
            <span class="font-medium px-2">{currentPage}</span>
            with
            <span class="font-medium px-2">{amount}</span>
            of
            <span class="font-medium px-2">{totalDocs}</span>
            results
          </p>
        </div>
        <div>
          <nav
            class="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginateFront(number)}
                className={`relative z-10 inline-flex items-center ${
                  number === currentPage
                    ? "bg-blue-500 text-white"
                    : "text-gray-900"
                } px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span class="sr-only">Next</span>
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
