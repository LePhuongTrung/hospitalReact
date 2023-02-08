import React from "react";
function Index() {
  return (
    <div class="w-full mt-10 absolute">
      <div class="flex items-center justify-center">
        <div class="h-32 w-32">
          <img
            src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
            class="max-w-full h-auto rounded-full"
            alt=""
          />
        </div>
      </div>
      <div class="flex items-center justify-center">
        <p class="font-mono text-2xl font-bold">Le Phuong Trung</p>
      </div>

      <div class="w-1/2 flex ml-200">
        <label class="font-mono text-xl font-bold">Role:</label>
        <label className="ml-4 font-mono text-xl font-bold">Doctor</label>
      </div>
    </div>
  );
}

export default Index;
