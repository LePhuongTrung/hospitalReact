import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentRole } from "../../redux/auth/AuthStatus";
import { getStaff } from "../api/staff";

const getData = async (setData, navigate) => {
  try {
    const response = await getStaff();
    console.log("🚀 ~ file: information.js:10 ~ getData ~ response:", response);

    if (response.status === 200) {
      setData(response.data);
    }
  } catch (err) {
    if (err.response && err.response.status === 404) {
    } else if (err.code === "ERR_NETWORK") {
      navigate("/SERVERERROR", { replace: true });
    } else {
      navigate("/error", { replace: true });
    }
  }
};

function Index() {
  const [data, setData] = useState();

  const role = useSelector(selectCurrentRole);

  useEffect(() => {
    getData(setData, Navigate);
  }, [data]);
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center">
        <div className="h-32 w-32">
          <img
            src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
            className="max-w-full h-auto rounded-full"
            alt=""
          />
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <p className="font-mono text-2xl font-bold">Le Phuong Trung</p>
      </div>
      <div className=" flex items-center justify-center">
        <p className="font-mono text-2xl font-bold">{role}</p>
      </div>
      <div className="pt-10 pb-4 w-1/2 flex ml-200">
        <label className="font-mono text-xl font-bold">roomID:</label>
        <label className="ml-4 font-mono text-xl font-bold">roomID</label>
      </div>
      <div className="py-4 w-1/2 flex ml-200">
        <label className="font-mono text-xl font-bold">Email:</label>
        <label className="ml-4 font-mono text-xl font-bold">email</label>
      </div>
      <div className="py-4 w-1/2 flex ml-200">
        <label className="font-mono text-xl font-bold">
          coefficientsSalary:
        </label>
        <label className="ml-4 font-mono text-xl font-bold">21</label>
      </div>
      <div className="py-4 w-1/2 flex ml-200">
        <label className="font-mono text-xl font-bold">startDate:</label>
        <label className="ml-4 font-mono text-xl font-bold">12/12/2022</label>
      </div>
    </div>
  );
}

export default Index;
