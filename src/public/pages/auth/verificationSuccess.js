import React from "react";
import VerificationFailed from "../../components/verificationFailed";
function verificationPage() {
  // let { Link } = useParams();
  const checkConfirm = async () => {
    // const confirm = await confirm(Link);
  };
  return (
    <div class="h-screen w-screen bg-sky-400 border-2">
      <VerificationFailed />;
    </div>
  );
}

export default verificationPage;
