/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Confirm } from "../../api/auth";
import VerificationFailed from "../../components/verificationFailed";
import VerificationSuccess from "../../components/verificationSuccess";

const VerificationPage = () => {
  let [confirm, isConfirm] = useState(false);

  const queryParams = new URLSearchParams(window.location.search);
  const Gmail = queryParams.get("email");

  useEffect(() => {
    Verification();
  }, []);

  const Verification = async () => {
    const link = "?email=" + Gmail;
    console.log("🚀 ~ file: Verification.jsx:18 ~ Verification ~ link:", link);
    try {
      const response = await Confirm(link);
      if (response.status === 200) {
        isConfirm(true);
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
      {confirm === true ? <VerificationSuccess /> : <VerificationFailed />}
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
