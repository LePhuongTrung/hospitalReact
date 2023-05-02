import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { typeSick } from "../../data/typeSick";

import CustomInput from "../../../public/components/CustomInput";
import SelectComponent from "../../../public/components/SelectComponent";
import { create } from "../../api/sick.service";

export default function AddSick() {
  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data) => {
    try {
      if (!data.name) {
        toast.warning("Missing Room Name");
        return;
      }
      if (!data.type || typeof data.type === "undefined") {
        toast.warning("Please select type again");
        return;
      }

      const result = await create(data);
      console.log("🚀 ~ file: AddSick.js:26 ~ onSubmit ~ result:", result);
      if (result.status === 200) {
        toast.success("Add new room successfully");
      }
    } catch (error) {
      console.log("🚀 ~ file: AddSick.js:31 ~ onSubmit ~ error:", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex"></div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              label="Sick Name"
              type="string"
              {...register("name")}
            />
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Type Sick
              </label>
              <SelectComponent options={typeSick} {...register("type")} />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add
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
    </>
  );
}
