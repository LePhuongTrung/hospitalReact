import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  } catch (error) {
    if (error.response && error.response.data) {
      const html = error.response.data;
      const startIndex = html.indexOf("Error: ") + 7;
      const endIndex = html.indexOf("<br>", startIndex);
      const errorMessage = html.slice(startIndex, endIndex);
      toast.error(errorMessage);
    } else {
      toast.error(error.message);
    }
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Index;
