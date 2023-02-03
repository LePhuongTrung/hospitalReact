import React from "react";
import FormInput from "../components/FormInput";
import FormMedicine from "../components/FormMedicine";
import HealthInformation from "../components/HealthInformation";

const BasicInfo = () => {
  const handleSubmit = (data) => {
    data.preventDefault();
    console.log("🚀 ~ file: Doctor.js:8 ~ handleSubmit ~ data", data);
  };
  return (
    <div className="mx-auto my-4 bg-white p-6 rounded-lg shadow-md w-650">
      <form onSubmit={handleSubmit}>
        <FormInput label="Diagnosis:" />
        <label
          htmlFor="text"
          className="block text-sm font-medium text-gray-700 w-20 mt-4"
        >
          Medicine
        </label>
        <FormMedicine number="1)" />
        <FormMedicine number="2)" />
        <FormMedicine number="3)" />
        <FormMedicine number="4)" />
        <FormMedicine number="5)" />
        <HealthInformation />
        <div className="flex items-center justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
