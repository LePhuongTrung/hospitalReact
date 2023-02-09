import React from "react";
import CustomInput from "../../public/components/CustomInput";
function Index() {
  return (
    <div className="w-full space-y-9 mt-10 mr-4">
      <div className="flex space-x-10">
        <div className="w-1/4 mx-auto">
          <p className="text-center text-xl font-semibold">Change password</p>
          <p className="text-center ">
            Create a new password that is at least 8 characters long.
          </p>
          <div className="mt-4">
            <CustomInput
              label="Type your current password*"
              type="password"
              disabled="true"
              value="Le Phuong Trung"
            />
            <CustomInput
              label="Type your new password*"
              type="password"
              disabled="true"
              value="Le Phuong Trung"
            />
            <CustomInput
              label="Retype your new password"
              type="password"
              disabled="true"
              value="Le Phuong Trung"
            />
            <div className="mt-4">
              <button
                type="submit"
                // onClick={handleLogin}
                className="w-1/2 mx-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
