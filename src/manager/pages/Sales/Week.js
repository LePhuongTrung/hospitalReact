import React from "react";
import Recharts from "../../components/Sale/Recharts";

function Index() {
  const data = [
    {
      date: "MonDay",
      internalDiseases: 32,
      surgicalDiseases: 37,
      obstetrics: 60,
      emergency: 20,
      Infectious: 0,
    },
    {
      date: "TueDay",
      internalDiseases: 42,
      surgicalDiseases: 42,
      obstetrics: 54,
      emergency: 10,
      Infectious: 0,
    },
    {
      date: "Wednesday",
      internalDiseases: 51,
      surgicalDiseases: 41,
      obstetrics: 54,
      emergency: 35,
      Infectious: 2,
    },
    {
      date: "Thursday",
      internalDiseases: 60,
      surgicalDiseases: 37,
      obstetrics: 28,
      emergency: 2,
      Infectious: 4,
    },
    {
      date: "Friday",
      internalDiseases: 51,
      surgicalDiseases: 31,
      obstetrics: 27,
      emergency: 5,
      Infectious: 0,
    },
    {
      date: "Saturday",
      internalDiseases: 95,
      surgicalDiseases: 44,
      obstetrics: 49,
      emergency: 7,
      Infectious: 0,
    },
    {
      date: "Sunday",
      internalDiseases: 95,
      surgicalDiseases: 44,
      obstetrics: 49,
      emergency: 2,
      Infectious: 0,
    },
  ];
  return (
    <>
      <div className="bg-white px-4 md:px-10 pb-5">
        <div className="overflow-x-auto ">
          <div className="flex ">
            <Recharts data={data} />
            <div className="border-l-4 ml-10">
              <div className="rounded-lg-4 border-slate-100 h-72 w-96 ml-10 shadow-2xl">
                <p>a</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
