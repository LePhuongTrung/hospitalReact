import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FadeLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
/* Import service */
import { ResetPassword } from "../../../public/api/auth";
import CustomInput from "../../components/CustomInput";

/* Import component */

const schemaValidation = yup
  .object()
  .shape({
    newPassword: yup.string().min(6).required(),
    retypePassword: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("newPassword")], "Your passwords do not match."),
  })
  .required();

export default function Login() {
  const queryParams = new URLSearchParams(window.location.search);
  const email = queryParams.get("email");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await ResetPassword(data, email);

      if (response.status === 200) {
        toast.success("Reset Password successfully");
      }
      setLoading(false);
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

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-sky-400">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white shadow sm:rounded-lg">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your new password
          </p>
          <p className="mt-2 text-center text-sm text-gray-600">
            <a
              href="/Login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login
            </a>
          </p>
          <div className=" py-8 px-4 sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                label="Password"
                type="password"
                errors={errors.newPassword}
                {...register("newPassword")}
              />
              <CustomInput
                label="Enter Password again"
                type="password"
                errors={errors.retypePassword}
                {...register("retypePassword")}
              />

              <div>
                {loading === true ? (
                  <FadeLoader
                    className="mx-auto"
                    color="#36d7b7"
                    cssOverride={{}}
                  />
                ) : (
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Email
                  </button>
                )}
              </div>
            </form>
          </div>
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
