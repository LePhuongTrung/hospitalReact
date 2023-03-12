import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Data } from "./typeSickData";

/* Import component */
import { useEffect, useState } from "react";
import CustomInput from "../../../public/components/CustomInput";

const schemaValidation = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

export default function AddRoom() {
  const [sickData, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setData(Data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = async (data) => {};

  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              label="Sick Name"
              type="string"
              errors={errors}
              {...register("roomNumber")}
            />
            <div>
              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Type Sick
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="internal diseases" selected>
                  internal diseases
                </option>
                {sickData &&
                  sickData.map((data) => (
                    <option value={data.type}>{data.type}</option>
                  ))}
              </select>
            </div>
            <div>
              <button
                type="submit"
                // onClick={handleLogin}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
