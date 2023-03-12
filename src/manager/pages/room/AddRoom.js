import { yupResolver } from "@hookform/resolvers/yup";
import { Radio } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { typeSick } from "../../data/typeSick";

/* Import component */
import CustomInput from "../../../public/components/CustomInput";
import SelectComponent from "../../../public/components/SelectComponent";

const schemaValidation = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

export default function AddRoom() {
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
              label="Room Name"
              type="string"
              errors={errors}
              {...register("roomNumber")}
            />

            <SelectComponent
              errors={errors}
              options={typeSick}
              {...register("type")}
            />
            <CustomInput
              label="Doctor Name"
              type="name"
              errors={errors}
              {...register("DoctorName")}
            />
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                Prioritized
              </label>
              <div className="flex space-x-10">
                <Radio id="True" name="option1" label="Yes" />
                <Radio id="False" name="option2" label="No" />
              </div>
              {errors && <p className="text-[#FF0000]">{errors.message}</p>}
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
