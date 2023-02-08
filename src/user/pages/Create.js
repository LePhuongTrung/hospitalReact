import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../public/components/CustomInput";
import { Create } from "../api/information";

function Index() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data) => {
    try {
      const response = await Create(data);
      console.log("🚀 ~ file: Create.js:15 ~ onSubmit ~ response", response);
      if (response.status === 200) {
      }
    } catch (err) {
      console.error("🚀 ~ file: information.js:13 ~ getData ~ err", err);
      if (err.originalStatus === 404) {
        navigate("/user", { replace: true });
      }
    }
  };
  return (
    <div class="w-full space-y-9 mt-10 mr-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="flex space-x-10">
          <div class="w-1/2">
            <CustomInput label="Full Name" {...register("fullName")} />
          </div>
          <div class="w-1/2">
            <CustomInput label="Phone Number" {...register("phoneNumber")} />
          </div>
        </div>
        <div class="flex space-x-10">
          <div class="w-1/2">
            <CustomInput label="Address" {...register("address")} />
          </div>
          <div class="w-1/2">
            <CustomInput
              label="Emergency Contact"
              {...register("emergencyContact")}
            />
          </div>
        </div>
        <div class="flex space-x-10">
          <div class="w-1/2">
            <CustomInput label="Medicine Code" {...register("medicineCode")} />
          </div>
          <div class="w-1/2">
            <CustomInput label="CCCD" {...register("CCCD")} />
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Index;
