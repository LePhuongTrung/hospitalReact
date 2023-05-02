import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomInput from "../../../public/components/CustomInput";
import { create } from "../../api/device.service";

export default function AddDevice() {
  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data) => {
    try {
      if (
        !data.name ||
        !data.manufacturer ||
        !data.price ||
        !data.quantity ||
        !data.modelNumber ||
        !data.deviceType ||
        !data.intendedUse ||
        !data.classification
      ) {
        toast.warning("Missing Required Fields");
        return;
      }

      const result = await create(data);
      console.log("🚀 ~ file: AddDevice.js:29 ~ onSubmit ~ result:", result);
      toast.success("Add new device successfully");
    } catch (error) {
      console.log("🚀 ~ file: AddDevice.js:33 ~ onSubmit ~ error:", error);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="mt-8 ">
      <div className=" w-full bg-white py-8 px-4 shadow ">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex px-4 space-x-4">
            <div className="information w-1/2 ">
              <CustomInput
                type="text"
                label="Name"
                required="true"
                {...register("name")}
              />
              <CustomInput
                type="text"
                label="Manufacturer"
                required="true"
                {...register("manufacturer")}
              />
              <CustomInput
                type="number"
                label="Price"
                required="true"
                {...register("price")}
              />
              <CustomInput
                type="number"
                label="Quantity"
                required="true"
                {...register("quantity")}
              />
            </div>
            <div className="w-1 shadow bg-black"></div>
            <div className="account w-1/2">
              <CustomInput
                type="text"
                label="Model Number"
                required="true"
                {...register("modelNumber")}
              />
              <CustomInput
                type="text"
                label="Device Type"
                required="true"
                {...register("deviceType")}
              />
              <CustomInput
                type="text"
                label="Intended Use"
                required="true"
                {...register("intendedUse")}
              />
              <CustomInput
                type="text"
                label="Classification"
                required="true"
                {...register("classification")}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
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
