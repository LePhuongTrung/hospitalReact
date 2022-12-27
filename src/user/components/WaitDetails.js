import { forwardRef } from "react";

const Index = forwardRef((props, ref) => {
  const { room, CurrentNumber, YourNumber, time } = props;

  return (
    <div className="w-1/3 h-80  rounded-lg bg-slate-50 shadow-2xl mx-auto">
      <div>
        <p className="my-2 h-14 rounded-t-lg bg-gray-600 text-center text-black text-5xl">
          Room {room}
        </p>
      </div>
      <div className="space-y-8 mt-4">
        <p className="ml-4 text-black text-xl">
          Current wait number: {CurrentNumber}
        </p>
        <p className="ml-4 text-black text-xl">Your number: {YourNumber}</p>
        <p className="ml-4 text-black text-xl">
          Estimated waiting time: {time} minutes
        </p>
      </div>
    </div>
  );
});

export default Index;
