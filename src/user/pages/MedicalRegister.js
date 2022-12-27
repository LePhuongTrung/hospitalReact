import React, { useEffect, useState } from "react";
import Register from "../components/Register";
import Wait from "../components/WaitDetails";

function Index() {
  const [navbar, setNavbar] = useState(false);
  const [CurrentNumber, setCurrentNumber] = useState(5);
  const [YourNumber, setYourNumber] = useState(10);
  const [time, setTime] = useState(0);

  useEffect(() => {
    componentDidMount();
    CalculationTimeWait();
  }, []);
  const componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  };

  const CalculationTimeWait = () => {
    const time = (YourNumber - CurrentNumber) * 10;

    return setTime(time);
  };
  return (
    <div class="w-full space-y-9 mt-10 mr-4">
      {navbar === true ? (
        <Register />
      ) : (
        <Wait
          room="1"
          CurrentNumber={CurrentNumber}
          YourNumber={YourNumber}
          time={time}
        />
      )}
    </div>
  );
}

export default Index;
