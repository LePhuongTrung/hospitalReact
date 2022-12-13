import React from "react";

function errorPage() {
  return (
    <div class="h-screen w-screen bg-sky-400 border-2">
      <div class=" mt-4 mx-40 rounded-md border-2 bg-white ">
        <img
          class=" mt-20 mx-auto w-100 h-60 rounded-full"
          src="https://www.creativefabrica.com/wp-content/uploads/2019/12/22/404-error-line-art-icon-vector-Graphics-1.jpg"
          alt="Rounded avatar"
        />
        <h1 class="mt-4 text-center font-semibold text-4xl">Not Found!</h1>
        <h1 class="mt-4 text-center text-2xl">
          The page you are looking for is currently unavailable.
        </h1>
        <button class="mt-2 mb-36 ml-555 content-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="/">Return home</a>
        </button>
      </div>
    </div>
  );
}

export default errorPage;
