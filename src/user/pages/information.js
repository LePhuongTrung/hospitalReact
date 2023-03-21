import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomInput from "../../public/components/CustomInput";
import { Create, Read } from "../api/information";

const getData = async (setData, setIsDataAvailable, navigate) => {
  try {
    const response = await Read();

    if (response.status === 200) {
      setData(response.data);
      setIsDataAvailable(true);
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
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [isDataAvailable, setIsDataAvailable] = useState(false);

  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data) => {
    try {
      const response = await Create(data);
      if (response.status === 200) {
        navigate("/user", { replace: true });
      }
    } catch (err) {
      console.error("🚀 ~ file: information.js:13 ~ getData ~ err", err);
      if (err.originalStatus === 404) {
        navigate("/error", { replace: true });
      }
    }
  };
  useEffect(() => {
    getData(setData, setIsDataAvailable, navigate);
  }, [setIsDataAvailable, navigate]);

  return (
    <div className="w-full space-y-9 mt-10 mr-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex space-x-10">
          <div className="w-1/2">
            <CustomInput
              label="Full Name"
              disabled={isDataAvailable}
              value={data?.fullName}
              {...register("fullName")}
            />
          </div>
          <div className="w-1/2">
            <CustomInput
              label="Phone Number"
              disabled={isDataAvailable}
              value={data?.phoneNumber}
              {...register("phoneNumber")}
            />
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="w-1/2">
            <CustomInput
              label="Address"
              disabled={isDataAvailable}
              value={data?.address}
              {...register("address")}
            />
          </div>
          <div className="w-1/2">
            <CustomInput
              label="Emergency Contact"
              disabled={isDataAvailable}
              value={data?.emergencyContact}
              {...register("emergencyContact")}
            />
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="w-1/2">
            <CustomInput
              label="Medicine Code"
              disabled={isDataAvailable}
              value={data?.medicineCode}
              {...register("medicineCode")}
            />
          </div>
          <div className="w-1/2">
            <CustomInput
              label="CCCD"
              disabled={isDataAvailable}
              value={data?.CCCD}
              {...register("CCCD")}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          {isDataAvailable ? (
            <NavLink
              to="/user/edit"
              state={{ data }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              activeClassName="text-white bg-gray-600"
            >
              edit
            </NavLink>
          ) : (
            <div className="flex items-center justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create
              </button>
            </div>
          )}
        </div>
      </form>
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
