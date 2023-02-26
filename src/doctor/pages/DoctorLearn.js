import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInputDotted from "../components/FormInputDotted";
import HealthInformation from "../components/HealthInformation";

const BasicInfo = () => {
  const [formData, setFormData] = useState({});
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // data.preventDefault();
    setFormData(data);
    const Medicine1 = {
      DrugName: data.DrugName1,
      Amount: data.Amount1,
      timesPerDay: data.timesPerDay1,
      Dosage: data.Dosage1,
    };
    const Medicine2 = {
      DrugName: data.DrugName2,
      Amount: data.Amount2,
      timesPerDay: data.timesPerDay2,
      Dosage: data.Dosage2,
    };
    const Medicine3 = {
      DrugName: data.DrugName3,
      Amount: data.Amount3,
      timesPerDay: data.timesPerDay3,
      Dosage: data.Dosage3,
    };
    const Medicine4 = {
      DrugName: data.DrugName4,
      Amount: data.Amount4,
      timesPerDay: data.timesPerDay4,
      Dosage: data.Dosage4,
    };
    const Medicine5 = {
      DrugName: data.DrugName5,
      Amount: data.Amount5,
      timesPerDay: data.timesPerDay5,
      Dosage: data.Dosage5,
    };
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="mx-auto my-4 bg-white p-6 rounded-lg shadow-md w-650">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-20 my-auto"
          >
            Diagnosis:
          </label>
          <FormInputDotted
            type="text"
            {...register("Diagnosis")}
            onChange={handleChange}
          />
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
        <HealthInformation {...register("HealthInformation")} />
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
