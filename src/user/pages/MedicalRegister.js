import React, { useEffect, useState } from "react";
import { GetWait } from "../api/wait";
import Register from "../components/Register";
import Wait from "../components/WaitDetails";

const getData = async (
  setIsRegister,
  setRoom,
  setCurrentNumber,
  setYourNumber,
  setTime
) => {
  try {
    const response = await GetWait();
    if (response.status === 200) {
      setIsRegister(true);
      setRoom(response.data.room.roomNumber);
      setCurrentNumber(response.data.room.CurrentNumber);
      setYourNumber(response.data.result.numericalOrder);
      const time =
        (response.data.result.numericalOrder -
          response.data.room.CurrentNumber) *
        10;
      setTime(time);
    }
  } catch (err) {
    console.log("🚀 ~ file: MedicalRegister.js:12 ~ getData ~ err:", err);
  }
};

function Index() {
  const [isRegister, setIsRegister] = useState(false);
  const [CurrentNumber, setCurrentNumber] = useState(5);
  const [YourNumber, setYourNumber] = useState(10);
  const [room, setRoom] = useState("");
  const [time, setTime] = useState(0);

  useEffect(() => {
    getData(setIsRegister, setRoom, setCurrentNumber, setYourNumber, setTime);
  }, []);

  return (
    <div className="w-full space-y-9 mt-10 mr-4">
      {isRegister === false ? (
        <Register />
      ) : (
        <Wait
          room={room}
          CurrentNumber={CurrentNumber}
          YourNumber={YourNumber}
          time={time}
        />
      )}
    </div>
  );
}

export default Index;
