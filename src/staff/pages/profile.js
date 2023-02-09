import React from "react";
function Index() {
  return (
    <div className="w-full mt-10 absolute">
      <div className="flex items-center justify-center">
        <div className="h-32 w-32">
          <img
            src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
            className="max-w-full h-auto rounded-full"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="font-mono text-2xl font-bold">Le Phuong Trung</p>
      </div>

      <div className="w-1/2 flex ml-200">
        <label className="font-mono text-xl font-bold">Role:</label>
        <label className="ml-4 font-mono text-xl font-bold">Doctor</label>
      </div>
    </div>
  );
}

export default Index;
