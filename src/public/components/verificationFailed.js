import React from "react";
function verificationPage() {
  return (
    <div class="mt-4 mx-40 rounded-md border-2 bg-white flex flex-col items-center">
      <img
        class="mt-20 mx-auto wh-60 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyEBINCHO6RO_mPMhafNhboXmWOHZQ4nmcOIx4tAEBhJjPK_TbO0ccQ0Zfkc49iuyvVJE&usqp=CAU"
        alt="Rounded avatar"
      />
      <h1 class="mt-10 text-center font-semibold text-4xl">Verified!</h1>
      <h1 class="mt-4 text-center text-2xl">
        You have successfully verified your account.
      </h1>
      <button class="mt-5 mb-10 flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="/SignUp">Sign Up</a>
      </button>
    </div>
  );
}

export default verificationPage;
