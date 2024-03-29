/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Circle } from "react-circle";

function Index() {
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState();
  const [weight, setWeight] = useState(68);
  const [BMI, setBMI] = useState(0.001);
  const [safe, setSafe] = useState(0.001);
  const [color, setColor] = useState("");
  const [recommendation, setRecommendation] = useState("");

  useEffect(() => {
    setAge(22);
    CalculateBMI();
    SetRecommendation();
  }, [height, weight]);

  useEffect(() => {
    CalculateHealth();
  }, [BMI]);

  const CalculateBMI = () => {
    const heightM = (height / 100).toFixed(2);
    const bmi = weight / (heightM * heightM);
    setBMI(bmi.toFixed(3));
  };

  const SetRecommendation = () => {
    if (24.5 < BMI < 27) {
      setRecommendation("You should exercise and eat healthier");
    } else if (BMI >= 27 && BMI < 30) {
      setRecommendation(
        "You should exercise and and reduce the intake of foods high in sugar and fat"
      );
    } else if (BMI >= 30) {
      setRecommendation(
        "You are already obese, go to the hospital for the most suitable advice"
      );
    } else if (BMI < 18.5) {
      setRecommendation(
        "You have been malnourished, go to the hospital for the most appropriate advice"
      );
    } else {
      setRecommendation(
        "Your body is doing pretty well, try to maintain a healthy lifestyle."
      );
    }
  };

  const CalculateHealth = () => {
    const health = Math.abs(BMI - 22);
    let percent;
    health > 22
      ? (percent = 100)
      : (percent = Math.abs((1 - health / 22) * 100));

    if (percent > 100) {
      percent = 100;
    }

    setSafe(percent.toFixed(2));
    if (percent >= 92) {
      setColor("#068815");
    } else if (percent >= 86) {
      setColor("#24EE3B");
    } else if (percent >= 77) {
      setColor("#D1E872");
    } else if (percent >= 64) {
      setColor("#EBDB05");
    } else if (percent >= 41) {
      setColor("#F06124");
    } else if (percent >= 17) {
      setColor("#9F0000");
    } else {
      setColor("#000000");
    }
  };

  const changeHeight = (e) => {
    setHeight(e.target.value);
    // CalculateBMI();
    // SetRecommendation();
    // CalculateHealth();
  };

  const changeWeight = (e) => {
    setWeight(e.target.value);
    // CalculateBMI();
    // SetRecommendation();
    // CalculateHealth();
  };

  return (
    <div className="flex w-full">
      <div className="w-1/2 border-r-4">
        <p className="text-center text-xl font-semibold mt-10">
          Healthy level of the body
        </p>
        <div className="mt-4 ml-32">
          <Circle size={350} progress={safe} progressColor={color} text="a" />
        </div>
      </div>
      <div className="w-1/2">
        <div className="mx-4 mt-4 overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Body information
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                you can change the test information for relatives{" "}
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Properties
                </th>
                <th scope="col" className="py-3 px-6">
                  Parameter
                </th>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Age
                </th>
                <td className="py-4 px-6">{age}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Height(m)
                </th>

                <td className="py-4 px-6">
                  <input
                    type="number"
                    onChange={changeHeight}
                    value={height}
                    min="1"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Weight(kg)
                </th>
                <td className="py-4 px-6">
                  <input
                    type="number"
                    onChange={changeWeight}
                    value={weight}
                    min="1"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  BMI
                </th>
                <td className="py-4 px-6">{BMI}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Recommendation
                </th>
                <td className="py-4 px-6">{recommendation}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Index;
