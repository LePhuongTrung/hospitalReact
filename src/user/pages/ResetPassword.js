import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

import { ResetPassword } from "../../public/api/auth";
import CustomInput from "../../public/components/CustomInput";
import { selectCurrentEmail } from "../../redux/auth/AuthStatus";

const schemaValidation = yup.object().shape({
  currentPassword: yup
    .string()
    .min(6)
    .required()
    .matches(
      /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one special character"
    ),
  enterPassword: yup
    .string()
    .min(6)
    .required()
    .matches(
      /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one special character"
    )
    .test(
      "passwords-match",
      "New password must be different from current password",
      function (value) {
        return value !== this.parent.currentPassword;
      }
    ),
  newPassword: yup
    .string()
    .min(6)
    .required()
    .matches(
      /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one special character"
    )
    .oneOf([yup.ref("enterPassword"), null], "Passwords must match"),
});

function Index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaValidation) });
  const email = useSelector(selectCurrentEmail);

  const onSubmit = async (data) => {
    console.log("Button clicked");
    try {
      if (data.password === data.newPassword) {
        toast.warning("New password must be different from current password");
      } else {
        const response = await ResetPassword(data, email);
        console.log(
          "🚀 ~ file: ResetPassword.js:43 ~ onSubmit ~ response:",
          response
        );
        toast.success(response.data);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="w-full space-y-9 mt-10 mr-4">
      <div className="flex space-x-10">
        <div className="w-1/4 mx-auto">
          <p className="text-center text-xl font-semibold">Change password</p>
          <p className="text-center ">
            Create a new password that is at least 8 characters long.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <CustomInput
                label="Your current password*"
                type="password"
                errors={errors.currentPassword}
                {...register("currentPassword", { required: true })}
              />
              <CustomInput
                label="Your new password*"
                type="password"
                errors={errors.enterPassword}
                {...register("enterPassword", { required: true })}
              />
              <CustomInput
                label="Retype your new password"
                type="password"
                errors={errors.newPassword}
                {...register("newPassword", { required: true })}
              />
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-1/2 mx-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save Password
                </button>
              </div>
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
  );
}

export default Index;
