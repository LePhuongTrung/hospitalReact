import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { typeSick } from "../../data/typeSick";

import CustomInput from "../../../public/components/CustomInput";
import SelectComponent from "../../../public/components/SelectComponent";
import { create } from "../../api/room.service";

export default function AddRoom() {
  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data) => {
    try {
      if (!data.roomNumber) {
        toast.warning("Missing Room Name");
        return;
      }
      if (!data.type || typeof data.type === "undefined") {
        toast.warning("Please select type again");
        return;
      }

      const result = await create(data);
      if (result.status === 200) {
        toast.success("Add new room successfully");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              label="Room Name"
              type="string"
              {...register("roomNumber")}
            />

            <SelectComponent options={typeSick} {...register("type")} />
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                Prioritized
              </label>
              <div className="flex items-center mt-2">
                <div className="flex items-center mr-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="true"
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    {...register("isPrioritized")}
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value="false"
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    {...register("isPrioritized")}
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
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
