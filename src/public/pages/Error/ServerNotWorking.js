import React from "react";

const Index = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded-md p-8">
        <h1 className="text-red-500 text-2xl font-bold mb-4">
          Server Not Found
        </h1>
        <p className="text-gray-500">
          We're sorry, but the server you're trying to access is not available
          at the moment. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default Index;
