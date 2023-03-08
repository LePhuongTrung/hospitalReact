import React from "react";
import { useForm } from "react-hook-form";
import { diagnostic } from "../api/wait";
import FormInputDotted from "../components/FormInputDotted";

const BasicInfo = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const Data = [
      { Diagnosis: data.Diagnosis },
      {
        DrugName: data.DrugName1,
        Amount: data.Amount1,
        timesPerDay: data.timesPerDay1,
        Dosage: data.Dosage1,
      },
      {
        DrugName: data.DrugName2,
        Amount: data.Amount2,
        timesPerDay: data.timesPerDay2,
        Dosage: data.Dosage2,
      },
      {
        DrugName: data.DrugName3,
        Amount: data.Amount3,
        timesPerDay: data.timesPerDay3,
        Dosage: data.Dosage3,
      },
      {
        DrugName: data.DrugName4,
        Amount: data.Amount4,
        timesPerDay: data.timesPerDay4,
        Dosage: data.Dosage4,
      },
      {
        DrugName: data.DrugName5,
        Amount: data.Amount5,
        timesPerDay: data.timesPerDay5,
        Dosage: data.Dosage5,
      },
    ];
    const response = await diagnostic(Data);
    console.log(
      "🚀 ~ file: DoctorLearn.js:43 ~ onSubmit ~ response:",
      response
    );
  };
  return (
    <div className="my-10 py-10 bg-white rounded-lg shadow-md h-full 2xl:w-650 xl:w-650 lg:w-10/12 md:w-full">
      <form className="px-10 px-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-20 my-auto"
          >
            Diagnosis:
          </label>
          <FormInputDotted type="text" {...register("Diagnosis")} />
        </div>
        <label
          htmlFor="text"
          className="block text-sm font-medium text-gray-700 w-20 mt-4"
        >
          Medicine
        </label>
        <div className="Medicine1">
          <div className="flex mt-8">
            <div className="flex w-4/6">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 w-6"
              >
                1.
              </label>
              <div className=" w-full">
                <input
                  type="text"
                  className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("DrugName1")}
                />
              </div>
            </div>
            <div className="flex w-2/6 ml-2">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 w-4"
              >
                x
              </label>
              <div className=" w-full">
                <input
                  type="number"
                  className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("Amount1")}
                />
              </div>
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-6 ml-2"
            >
              Pill
            </label>
          </div>
          <div className="flex mt-8 w-full ml-6">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-6"
            >
              Drink
            </label>
            <div className="ml-6 w-2/6">
              <input
                type="number"
                className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("timesPerDay1")}
              />
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-20 ml-4"
            >
              Times a day,
            </label>
            <div className="ml-2 w-3/12 ">
              <input
                type="number"
                className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("Dosage1")}
              />
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-20 ml-4"
            >
              pill time
            </label>
          </div>
        </div>
        <div className="Medicine1">
          <div className="flex mt-8">
            <div className="flex w-4/6">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 w-6"
              >
                2.
              </label>
              <div className=" w-full">
                <input
                  type="text"
                  className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("DrugName2")}
                />
              </div>
            </div>
            <div className="flex w-2/6 ml-2">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 w-4"
              >
                x
              </label>
              <div className=" w-full">
                <input
                  type="number"
                  className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("Amount2")}
                />
              </div>
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-6 ml-2"
            >
              Pill
            </label>
          </div>
          <div className="flex mt-8 w-full ml-6">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-6"
            >
              Drink
            </label>
            <div className="ml-6 w-2/6">
              <input
                type="number"
                className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("timesPerDay2")}
              />
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-20 ml-4"
            >
              Times a day,
            </label>
            <div className="ml-2 w-3/12 ">
              <input
                type="number"
                className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("Dosage2")}
              />
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-20 ml-4"
            >
              pill time
            </label>
          </div>
        </div>
        <div className="Medicine1">
          <div className="flex mt-8">
            <div className="flex w-4/6">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 w-6"
              >
                3.
              </label>
              <div className=" w-full">
                <input
                  type="text"
                  className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("DrugName3")}
                />
              </div>
            </div>
            <div className="flex w-2/6 ml-2">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 w-4"
              >
                x
              </label>
              <div className=" w-full">
                <input
                  type="number"
                  className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("Amount3")}
                />
              </div>
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-6 ml-2"
            >
              Pill
            </label>
          </div>
          <div className="flex mt-8 w-full ml-6">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-6"
            >
              Drink
            </label>
            <div className="ml-6 w-2/6">
              <input
                type="number"
                className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("timesPerDay3")}
              />
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-20 ml-4"
            >
              Times a day,
            </label>
            <div className="ml-2 w-3/12 ">
              <input
                type="number"
                className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("Dosage3")}
              />
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-20 ml-4"
            >
              pill time
            </label>
          </div>
        </div>
        <div className="Medicine1">
          <div className="flex mt-8">
            <div className="flex w-4/6">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 w-6"
              >
                4.
              </label>
              <div className=" w-full">
                <input
                  type="text"
                  className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("DrugName4")}
                />
              </div>
            </div>
            <div className="flex w-2/6 ml-2">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 w-4"
              >
                x
              </label>
              <div className=" w-full">
                <input
                  type="number"
                  className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("Amount4")}
                />
              </div>
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-6 ml-2"
            >
              Pill
            </label>
          </div>
          <div className="flex mt-8 w-full ml-6">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-6"
            >
              Drink
            </label>
            <div className="ml-6 w-2/6">
              <input
                type="number"
                className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("timesPerDay4")}
              />
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-20 ml-4"
            >
              Times a day,
            </label>
            <div className="ml-2 w-3/12 ">
              <input
                type="number"
                className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("Dosage4")}
              />
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-20 ml-4"
            >
              pill time
            </label>
          </div>
        </div>
        <div className="Medicine1">
          <div className="flex mt-8">
            <div className="flex w-4/6">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 w-6"
              >
                5.
              </label>
              <div className=" w-full">
                <input
                  type="text"
                  className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("DrugName5")}
                />
              </div>
            </div>
            <div className="flex w-2/6 ml-2">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 w-4"
              >
                x
              </label>
              <div className=" w-full">
                <input
                  type="number"
                  className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("Amount5")}
                />
              </div>
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-6 ml-2"
            >
              Pill
            </label>
          </div>
          <div className="flex mt-8 w-full ml-6">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-6"
            >
              Drink
            </label>
            <div className="ml-6 w-2/6">
              <input
                type="number"
                className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("timesPerDay5")}
              />
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-20 ml-4"
            >
              Times a day,
            </label>
            <div className="ml-2 w-3/12 ">
              <input
                type="number"
                className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("Dosage5")}
              />
            </div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 w-20 ml-4"
            >
              pill time
            </label>
          </div>
        </div>
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
