import React from "react";
import Circle from "react-circle";

function Index() {
  return (
    <div className=" mx-auto">
      <p class="text-center text-xl font-semibold mt-10">
        Healthy level of the body
      </p>
      <div className="mt-4">
        <Circle size={400} progress={35} progressColor="blue" text="a" />
      </div>
    </div>
  );
}

export default Index;
