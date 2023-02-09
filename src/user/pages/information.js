import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CustomInput from "../../public/components/CustomInput";
import { Read } from "../api/information";

function Index() {
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await Read();
      console.log(
        "🚀 ~ file: information.js:15 ~ getData ~ response",
        response.data
      );
      setData(response.data);

      if (response.status !== 200) return;
    } catch (err) {
      if (err.response.status === 404) {
        navigate("/user/Create", { replace: true });
      }
    }
  };
  return (
    <div className="w-full space-y-9 mt-10 mr-4">
      <div className="flex space-x-10">
        <div className="w-1/2">
          <CustomInput
            label="Full Name"
            disabled="true"
            value={data.fullName}
          />
        </div>
        <div className="w-1/2">
          <CustomInput
            label="Phone Number"
            disabled="true"
            value={data.phoneNumber}
          />
        </div>
      </div>
      <div className="flex space-x-10">
        <div className="w-1/2">
          <CustomInput label="Address" disabled="true" value={data.address} />
        </div>
        <div className="w-1/2">
          <CustomInput
            label="Emergency Contact"
            disabled="true"
            value={data.emergencyContact}
          />
        </div>
      </div>
      <div className="flex space-x-10">
        <div className="w-1/2">
          <CustomInput
            label="Medicine Code"
            disabled="true"
            value={data.medicineCode}
          />
        </div>
        <div className="w-1/2">
          <CustomInput label="CCCD" disabled="true" value={data.CCCD} />
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <NavLink
          to="/user/edit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          activeClassName="text-white bg-gray-600"
        >
          edit
        </NavLink>
      </div>
    </div>
  );
}

export default Index;
