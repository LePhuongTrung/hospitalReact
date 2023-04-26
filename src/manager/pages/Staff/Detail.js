import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomInput from "../../../public/components/CustomInput";

export default function AddRoom() {
  const location = useLocation();

  return (
    <>
      <div className="mt-8 ">
        <div className=" w-full bg-white py-8 px-4 shadow ">
          <div className="w-full flex items-center justify-center">
            <div className="h-40 w-40 relative">
              <img
                src={location.state?.ImgUrl}
                className="object-contain w-40 h-40 rounded-full shadow-xl"
                alt={location.state?.fullName}
              />
            </div>
          </div>
          <div className="flex px-4 space-x-4 mt-4">
            <div className="information w-1/2 ">
              <CustomInput
                label="Full Name"
                disabled={true}
                value={location.state?.fullName}
              />
              <CustomInput
                label="identifier Code"
                disabled={true}
                value={location.state?.identifierCode}
              />

              <CustomInput
                label="start Date"
                disabled={true}
                value={location.state?.startDate}
              />
            </div>
            <div className="w-1 shadow bg-black"></div>
            <div className="account w-1/2">
              <CustomInput
                label="Room Number"
                disabled={true}
                value={location.state?.roomNumber}
              />
              <CustomInput
                label="Email"
                disabled={true}
                value={location.state?.email}
              />
              <CustomInput
                label="coefficients Salary"
                value={location.state?.coefficientsSalary}
              />
            </div>
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
