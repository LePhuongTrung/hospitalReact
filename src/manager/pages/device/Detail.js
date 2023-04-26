import React from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomInput from "../../../public/components/CustomInput";

export default function Detail() {
  const location = useLocation();

  return (
    <div className="mt-8 ">
      <div className=" w-full bg-white py-8 px-4 shadow ">
        <form className="space-y-6">
          <div className="flex px-4 space-x-4">
            <div className="information w-1/2 ">
              <CustomInput
                type="text"
                label="Name"
                value={location.state?.name}
                disabled={true}
              />
              <CustomInput
                type="text"
                label="Manufacturer"
                value={location.state?.manufacturer}
                disabled={true}
              />
              <CustomInput
                type="number"
                label="Price"
                value={location.state?.price}
                disabled={true}
              />
              <CustomInput
                type="number"
                label="Quantity"
                value={location.state?.quantity}
                disabled={true}
              />
            </div>
            <div className="w-1 shadow bg-black"></div>
            <div className="account w-1/2">
              <CustomInput
                type="text"
                label="Model Number"
                value={location.state?.modelNumber}
                disabled={true}
              />
              <CustomInput
                type="text"
                label="Device Type"
                value={location.state?.deviceType}
                disabled={true}
              />
              <CustomInput
                type="text"
                label="Intended Use"
                value={location.state?.intendedUse}
                disabled={true}
              />
              <CustomInput
                type="text"
                label="Classification"
                value={location.state?.classification}
                disabled={true}
              />
            </div>
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
  );
}
