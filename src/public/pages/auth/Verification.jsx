import React, { useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Confirm } from "../../api/auth";
import VerificationFailed from "../../components/verificationFailed";
import VerificationSuccess from "../../components/verificationSuccess";

const VerificationPage = () => {
  const confirm = useRef(false);
  const queryParams = new URLSearchParams(window.location.search);
  const Gmail = queryParams.get("email");
  const Code = queryParams.get("token");

  useEffect(() => {
    Verification();
  });
  const Verification = async () => {
    const link = "?email=" + Gmail + "&token=" + Code;
    try {
      const response = await Confirm(link);

      if (response.status === 200) {
        confirm.current = true;
      }
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
    <div className="h-screen w-screen bg-sky-400 border-2">
      {confirm.current === true ? (
        <VerificationSuccess />
      ) : (
        <VerificationFailed />
      )}
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
};

export default VerificationPage;
