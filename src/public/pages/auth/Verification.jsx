import React, { useEffect, useRef } from "react";
import VerificationFailed from "../../components/VerificationFailed";
import VerificationSuccess from "../../components/VerificationSuccess";

import { Confirm } from "../../services/Confirm.service";

const VerificationPage = () => {
  const confirm = useRef(false);
  const queryParams = new URLSearchParams(window.location.search);
  const Gmail = queryParams.get("email");
  const Code = queryParams.get("token");

  useEffect(() => {
    Verification();
  }, []);
  const Verification = async () => {
    const link = "?email=" + Gmail + "&token=" + Code;
    console.log("🚀 ~ file: Verification.js:18 ~ GetParams ~ link", link);
    try {
      const response = await Confirm(link);

      if (response.status === 200) {
        confirm.current = true;
      }
    } catch (error) {
      console.error("🚀 ~ file: Verification.js:25 ~ GetParams ~ error", error);
    }
  };
  return (
    <div class="h-screen w-screen bg-sky-400 border-2">
      {confirm.current === true ? (
        <VerificationSuccess />
      ) : (
        <VerificationFailed />
      )}
    </div>
  );
};

export default VerificationPage;
