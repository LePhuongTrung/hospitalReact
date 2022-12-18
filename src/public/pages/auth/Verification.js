import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Confirm } from "../../services/Confirm.service";

const VerificationPage = () => {
  const [confirm, setConfirm] = useState[0];
  const { Gmail } = useParams();
  const { Code } = useParams();

  useEffect(() => {
    GetParams();
  }, []);
  const GetParams = async () => {
    const link = "?email=" + Gmail + "&token=" + Code;
    console.log("🚀 ~ file: Verification.js:18 ~ GetParams ~ link", link);
    try {
      const response = await Confirm(link);
      console.log(
        "🚀 ~ file: Login.js ~ line 41 ~ onSubmit ~ response",
        response.status
      );

      if (response.status === 200) {
        setConfirm(1);
      }
      console.log(
        "🚀 ~ file: Verification.js:10 ~ VerificationPage ~ confirm",
        confirm
      );
    } catch (error) {
      console.error("🚀 ~ file: Verification.js:25 ~ GetParams ~ error", error);
    }
    // {
    //   confirm === true ? <VerificationSuccess /> : <VerificationFailed />;
    // }
  };
  return <div class="h-screen w-screen bg-sky-400 border-2"></div>;
};

export default VerificationPage;
