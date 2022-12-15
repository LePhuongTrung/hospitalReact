import React from "react";
function verificationPage() {
  return (
    <div class=" mt-4 mx-40 rounded-md border-2 bg-white ">
      <img
        class=" mt-20 mx-auto wh-40 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVSLQ6JRUNjISLQVU8OaQZgPDnNeqSeRe3dw&usqp=CAU"
        alt="Rounded avatar"
      />
      <h1 class="mt-10 text-center font-semibold text-4xl">
        Authentication failed!
      </h1>
      <h1 class="mt-4 text-center text-2xl">
        Please re-register. Sincere apologies for this incident.
      </h1>
      <button class="mt-2 mb-36 ml-555 content-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="/SignUp">Sign up</a>
      </button>
    </div>
  );
}

export default verificationPage;
