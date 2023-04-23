import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInputDotted from "../../doctor/components/FormInputDotted";
import { selectRoom } from "../../redux/auth/AuthStatus";
import { getPatient } from "../api/room";
import { diagnostic, nextNumber } from "../api/wait";

const BasicInfo = () => {
  const roomNumber = useSelector(selectRoom);
  const { register, handleSubmit } = useForm();
  var [namePatient, setNamePatient] = useState(
    "There are currently no patients"
  );
  var [PatientID, setPatientID] = useState();
  var [waitID, setWaitID] = useState();
  var [medicalHistory, setMedicalHistory] = useState();

  var [number, setNumber] = useState(0);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await getPatient(roomNumber);
      console.log(
        "🚀 ~ file: DoctorLearn.js:23 ~ getData ~ response:",
        response
      );
      if (response.status === 200) {
        setNamePatient(response.data[0].fullName);
        setPatientID(response.data[0].AccountID);
        setNumber(response.data[2].CurrentNumber);
        setWaitID(response.data[2].id);
        setMedicalHistory(response.data[1].docs);
        console.log(
          "🚀 ~ file: DoctorLearn.js:558 ~ BasicInfo ~ medicalHistory:",
          medicalHistory
        );
      }
    } catch (error) {
      console.log("🚀 ~ file: DoctorLearn.js:28 ~ getData ~ error:", error);
      if (error.response && error.response.data) {
        toast.error(error.response.data);
        if (error.response.data.error === "Has not wait") {
          setNumber(error.response.data.numericalOrder);
        }
      } else {
        toast.error(error.message);
      }
    }
  };

  const next = async () => {
    try {
      console.log("🚀 ~ file: DoctorLearn.js:54 ~ next ~ number:", number);

      const response = await nextNumber({
        roomNumber: roomNumber,
        numericalOrder: number + 1,
      });
      setNumber(number + 1);
      window.location.reload();
      console.log("🚀 ~ file: DoctorLearn.js:49 ~ next ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ file: DoctorLearn.js:51 ~ next ~ error:", error);
      if (error.response && error.response.data) {
        toast.error(error.response.data);
      } else {
        toast.error(error.message);
      }
    }
  };
  const onSubmit = async (data) => {
    try {
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
      const response = await diagnostic({
        Data,
        AccountID: PatientID,
        id: waitID,
      });
      console.log(
        "🚀 ~ file: DoctorLearn.js:101 ~ onSubmit ~ response:",
        response
      );
      window.location.reload();
      // if (response.status === 200) {
      //   setNamePatient(response.data.fullName);
      // }
    } catch (error) {
      console.error("🚀 ~ file: DoctorLearn.js:82 ~ onSubmit ~ error:", error);
      if (error.response.data.error) {
        toast.warning(error.response.data.error);
        setNumber(error.response.data.numericalOrder);
        window.location.reload();
      } else if (error.response && error.response.data) {
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
    <div className="flex">
      <div className="w-7/12 flex items-center justify-center">
        <div className="ml-10 my-10 py-10 bg-white rounded-lg shadow-lg 2xl:w-650 xl:w-650 lg:w-10/12 md:w-full">
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
      </div>
      <div className="w-5/12">
        <div className="mt-20 flex items-center justify-center">
          <p className="font-mono text-2xl font-bold">
            Patient name: {namePatient}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={next}
          >
            Next Number
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Medical record
          </button>
        </div>
        <div className="mt-2 pr-4 h-555 overflow-y-scroll">
          {medicalHistory?.length > 0 &&
            medicalHistory.map((data, Index) => (
              <tr className="flex items-center text-lg leading-none h-16 border-b hover:bg-gray-100 ">
                <td className="pl-20 pr-20">
                  <p>{Index}</p>
                </td>
                <td className="pl-24">
                  <p>{new Date(data?.createdAt).toLocaleDateString()}</p>
                </td>
                <td className="pl-24">
                  <p>{data?.MedicalForm.Diagnostic}</p>
                </td>
              </tr>
            ))}
        </div>
      </div>
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

export default BasicInfo;
