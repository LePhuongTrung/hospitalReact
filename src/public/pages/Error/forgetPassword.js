import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FadeLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
/* Import service */
import { ForgetPassword } from "../../../public/api/auth";

/* Import component */
import CustomInput from "../../components/CustomInput";

const schemaValidation = yup
  .object()
  .shape({
    email: yup.string().email().required(),
  })
  .required();

export default function Login() {
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
      const response = await ForgetPassword(data);
      if (response.status === 200) {
        toast.success(
          "Register reset password successfully, please check your email."
        );
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
            Forgot Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address
          </p>
          <div className=" py-8 px-4 sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                type="email"
                errors={errors.email}
                {...register("email")}
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
