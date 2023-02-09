import React from "react";

function errorPage() {
  return (
    <div className=" mt-4 mx-40 rounded-md border-2 bg-yellow-400 ">
      <img
        className=" mt-20 mx-auto w-60 h-60 rounded-full"
        src="https://img.freepik.com/free-vector/flat-design-enter-sign_23-2149257869.jpg?w=2000"
        alt="Rounded avatar"
      />
      <h1 className="mt-10 text-center font-semibold text-4xl">
        You do not have access!
      </h1>
      <h1 className="mt-4 text-center text-2xl">
        Sorry, you do not have access to the page you are looking for.
      </h1>
      <button className="mt-2 mb-36 ml-555 content-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="/">Return home</a>
      </button>
    </div>
  );
}

export default errorPage;
