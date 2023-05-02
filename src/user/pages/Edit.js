import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomInput from "../../public/components/CustomInput";
import { Update } from "../api/information";

function Index() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({});
  const location = useLocation();
  const { data } = location.state;
  const onSubmit = async (data) => {
    try {
      const response = await Update(data);
      if (response.status === 200) {
        navigate("/user", { replace: true });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="w-full space-y-9 mt-10 mr-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex space-x-10">
          <div className="w-1/2">
            <CustomInput
              label="Full Name"
              defaultValue={data?.fullName}
              {...register("fullName")}
            />
          </div>
          <div className="w-1/2">
            <CustomInput
              label="Phone Number"
              defaultValue={data?.phoneNumber}
              {...register("phoneNumber")}
            />
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="w-1/2">
            <CustomInput
              label="Address"
              defaultValue={data?.address}
              {...register("address")}
            />
          </div>
          <div className="w-1/2">
            <CustomInput
              label="Emergency Contact"
              defaultValue={data?.emergencyContact}
              {...register("emergencyContact")}
            />
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="w-1/2">
            <CustomInput
              label="Medicine Code"
              defaultValue={data?.medicineCode}
              {...register("medicineCode")}
            />
          </div>
          <div className="w-1/2">
            <CustomInput
              label="CCCD"
              defaultValue={data?.CCCD}
              {...register("CCCD")}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
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
