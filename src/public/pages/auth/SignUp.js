import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { SignUp } from "../../../public/api/auth";

import CustomInput from "../../components/CustomInput";

const schemaValidation = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(6)
      .required()
      .matches(
        /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one special character"
      ),
    retypePassword: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("password")], "Your passwords do not match."),
  })
  .required();

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = async (data) => {
    try {
      const response = await SignUp(data);

      if (response.status !== 200) return;
      navigate("/Login", { replace: true });
      toast.success(
        "Sign up successfully, please check mail to Active account"
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-24 w-auto"
            src="https://i.pinimg.com/236x/42/91/b2/4291b20ea51111b355229602405ba1c3.jpg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            You have Account?{" "}
            <a
              href="/Login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in now
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                label="Email Address"
                type="email"
                errors={errors.email}
                {...register("email")}
              />

              <CustomInput
                label="Password"
                type="password"
                errors={errors.password}
                {...register("password")}
              />
              <CustomInput
                label="Enter Password again"
                type="password"
                errors={errors.retypePassword}
                {...register("retypePassword")}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="/a"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  // onClick={handleLogin}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
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
