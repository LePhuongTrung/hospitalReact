import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentRole, setWorkInUser } from "../../redux/auth/AuthStatus";
import { getStaff } from "../api/staff";

function Index({ navigate }) {
  const dispatch = useDispatch();

  const [data, setData] = useState();

  const role = useSelector(selectCurrentRole);

  const getData = async (setData) => {
    try {
      const response = await getStaff();
      if (response.status === 200) {
        const roomNumber = response.data.roomNumber;
        setData(response.data);
        dispatch(setWorkInUser({ roomNumber }));
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

  useEffect(() => {
    getData(setData);
  }, [setData]);
  return (
    <div className=" flex w-full h-full">
      <div className="w-4/12 mt-20 flex flex-col items-center ">
        <div className="flex items-center justify-center">
          <div className="h-40 w-40 relative">
            <img
              src={data?.ImgUrl}
              className="object-contain w-40 h-40 rounded-full shadow-xl"
              alt="Avatar"
            />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <p className="font-mono text-2xl font-bold">{data?.fullName}</p>
        </div>
        <div className=" flex items-center justify-center">
          <p className="font-mono text-2xl font-bold">{role}</p>
        </div>
      </div>
      <div className="w-8/12 px-10 py-10">
        <div className="rounded-md h-full  px-10 py-10 shadow-2xl">
          <div className="pt-10 pb-4 flex ml-10">
            <label className="font-mono text-xl font-bold">Room Name:</label>
            <label className="ml-4 font-mono text-xl font-bold">
              {data?.roomNumber}
            </label>
          </div>
          <div className="py-4 flex ml-10">
            <label className="font-mono text-xl font-bold">Email:</label>
            <label className="ml-4 font-mono text-xl font-bold">
              {data?.email}
            </label>
          </div>
          <div className="py-4 flex ml-10">
            <label className="font-mono text-xl font-bold">
              coefficientsSalary:
            </label>
            <label className="ml-4 font-mono text-xl font-bold">
              {data?.coefficientsSalary}
            </label>
          </div>
          <div className="py-4 flex ml-10">
            <label className="font-mono text-xl font-bold">startDate:</label>
            <label className="ml-4 font-mono text-xl font-bold">
              {data?.startDate}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
