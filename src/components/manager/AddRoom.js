import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

/* Import redux */

/* Import component */
import CustomInput from "../Public/CustomInput";
import RadioButton from "../Public/RadioButton";
import SelectComponent from "../Public/SelectComponent";

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
  console.log("🚀 ~ file: Login.js ~ line 35 ~ Login ~ errors", errors);

  const onSubmit = async (data) => {
    console.log("🚀 ~ file: Login.js ~ line 38 ~ onSubmit ~ data", data);
  };

  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              label="Room Number"
              type="number"
              errors={errors}
              {...register("roomNumber")}
            />

            <SelectComponent errors={errors} {...register("type")} />
            <CustomInput
              label="Doctor Name"
              type="name"
              errors={errors}
              {...register("DoctorName")}
            />
            <RadioButton
              label="Prioritized"
              type="boolean"
              errors={errors}
              {...register("isPrioritized")}
            />
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
