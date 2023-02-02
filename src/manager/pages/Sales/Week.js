import React, { useEffect } from "react";
import PieChart from "../../components/Sale/PieCharts";
import Recharts from "../../components/Sale/Recharts";

function Index() {
  const data = [
    {
      date: "MonDay",
      internal: 32,
      surgicalDiseases: 37,
      obstetrics: 60,
      emergency: 20,
      Infectious: 0,
    },
    {
      date: "TueDay",
      internal: 42,
      surgicalDiseases: 42,
      obstetrics: 54,
      emergency: 10,
      Infectious: 0,
    },
    {
      date: "Wednesday",
      internal: 51,
      surgicalDiseases: 41,
      obstetrics: 54,
      emergency: 35,
      Infectious: 2,
    },
    {
      date: "Thursday",
      internal: 60,
      surgicalDiseases: 37,
      obstetrics: 28,
      emergency: 2,
      Infectious: 4,
    },
    {
      date: "Friday",
      internal: 51,
      surgicalDiseases: 31,
      obstetrics: 27,
      emergency: 5,
      Infectious: 0,
    },
    {
      date: "Saturday",
      internal: 0,
      surgicalDiseases: 0,
      obstetrics: 0,
      emergency: 7,
      Infectious: 0,
    },
    {
      date: "Sunday",
      internal: 0,
      surgicalDiseases: 0,
      obstetrics: 0,
      emergency: 2,
      Infectious: 0,
    },
  ];
  useEffect(() => {
    return () => {
      calculation();
    };
  }, []);
  const calculation = () => {
    let sumInternalDiseases = 0;
    data.forEach(myFunction);

    function myFunction(item) {
      sumInternalDiseases += item.internal;
    }
  };
  return (
    <>
      <div className="bg-white px-4 md:px-10 pb-5">
        <div className="overflow-x-auto ">
          <div>
            <Recharts data={data} />
            <PieChart data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
