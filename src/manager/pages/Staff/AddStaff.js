import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomInput from "../../../public/components/CustomInput";
import Dialog from "../../../public/components/Dialog";
import SelectComponent from "../../../public/components/SelectComponent";
import { getAll } from "../../api/room.service";
import { create } from "../../api/staff.service";
import { Role } from "../../data/role";
import { typeSick } from "../../data/typeSick";

function generateEmail(name, identifierCode) {
  const nameParts = name.split(" ");
  const lastName = nameParts[nameParts.length - 1];
  const arr = nameParts.slice(0, -1).map((part) => part[0]);
  const email = `${lastName}${arr
    .join("")
    .toLowerCase()}${identifierCode}@gmail.com`;
  return email;
}

export default function AddRoom() {
  const [showDialog, setShowDialog] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState();

  const [Rooms, setRooms] = useState([]);
  const [roomFilter, setRoomFilter] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(
    "https://media.istockphoto.com/id/1305665241/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette-stock-illustration.jpg?s=612x612&w=0&k=20&c=qA6GUTalFyrBCRVUzQgp2B5zODxmOA4NXTBcw9notYY="
  );

  const onSubmit = async (data) => {
    try {
      if (!data.roomNumber) {
        toast.warning("Missing room Number");
        return;
      }
      if (
        !data.fullName ||
        !data.coefficientsSalary ||
        !data.identifierCode ||
        !data.startDate
      ) {
        toast.warning("Missing required information");
        return;
      }
      if (!data.role || typeof data.role === "undefined") {
        toast.warning("Please select role again");
        return;
      }
      const email = await generateEmail(data.fullName, data.identifierCode);
      data.password = "Abc@123";
      data.email = email;
      data.ImgUrl = previewUrl;
      const string = `Full name: ${data.fullName}\n
      identifierCode: ${data.identifierCode}\n
      email: ${data.email}\n
      Password: ${data.password}\n      
      roomName: ${data.roomNumber}\n
      coefficients Salary: ${data.coefficientsSalary}\n
      start Date: ${data.startDate}\n`;
      setData(data);
      setShowDialog(true);
      setMessage(string);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const getRoom = async () => {
    try {
      const response = await getAll();
      if (response.status !== 200) return;
      const rooms = Object.values(response.data);
      setRooms(rooms);

      const internalRooms = rooms.filter(
        (room) => room.type === "internal diseases"
      );
      setRoomFilter(internalRooms);
    } catch (error) {
      toast.error(error.message);
      console.error("🚀 ~ file: Login.js ~ line 52 ~ onSubmit ~ error", error);
    }
  };
  const getFilterRoom = async (selected) => {
    try {
      let result = Rooms.filter((room) => room.type === selected.target.value);
      if (result.length === 0) {
        result = [{ roomNumber: "This department doesn't have any rooms yet" }];
      }
      setRoomFilter(result);
    } catch (error) {
      toast.error(error.message);
      console.error("🚀 ~ file: Login.js ~ line 52 ~ onSubmit ~ error", error);
    }
  };
  useEffect(() => {
    getRoom();
  }, []);
  const handleConfirm = async () => {
    try {
      setShowDialog(false);
      const result = await create(data);
      if (result.status === 200) {
        toast.success("Add new room successfully");
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

  const handleCancel = () => {
    setShowDialog(false);
  };
  var handleFileSelect = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my-uploads");
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/djvkmuflt/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setPreviewUrl(data.url);
    } catch (error) {
      console.log("🚀 ~ handleFileSelect ~ error", error);
    }
  };
  const { register, handleSubmit } = useForm({});

  return (
    <>
      <div className="mt-8 ">
        <div className=" w-full bg-white py-8 px-4 shadow ">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex items-center justify-center">
              <div className="h-40 w-40 relative">
                <img
                  src={previewUrl}
                  className="object-contain w-40 h-40 rounded-full shadow-xl"
                  alt="Avatar"
                />
                <button
                  className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg"
                  onClick={(event) => {
                    event.preventDefault();
                    document.getElementById("file-upload").click();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </div>
            </div>
            <div className="flex px-4 space-x-4">
              <div className="information w-1/2 ">
                <CustomInput
                  label="Full Name"
                  type="string"
                  {...register("fullName")}
                />
                <CustomInput
                  label="identifier Code"
                  type="string"
                  {...register("identifierCode")}
                />
                <div className="flex space-x-4">
                  <div>
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Type Room
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={getFilterRoom}
                    >
                      {typeSick.map((option) => (
                        <option
                          type="string"
                          key={option.value}
                          value={option.value}
                        >
                          {option.text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-3/4">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Room Name
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("roomNumber")}
                    >
                      <option
                        type="string"
                        value={roomFilter[0]?.roomNumber}
                        hidden
                        disabled
                      >
                        {roomFilter[0]?.roomNumber}
                      </option>
                      {roomFilter?.map((option) => (
                        <option
                          type="string"
                          key={option.roomNumber}
                          value={option.roomNumber}
                        >
                          {option.roomNumber}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <CustomInput
                  label="coefficients Salary"
                  min="0"
                  max="20"
                  type="number"
                  {...register("coefficientsSalary")}
                />
                <CustomInput
                  label="start Date"
                  type="date"
                  {...register("startDate")}
                />
              </div>
              <div className="w-1 shadow bg-black"></div>
              <div className="account w-1/2">
                <CustomInput
                  label="Email"
                  disabled={true}
                  type="string"
                  {...register("email")}
                />
                <CustomInput
                  label="Password"
                  disabled={true}
                  type="string"
                  value="Abc@123"
                  {...register("password")}
                />
                <SelectComponent
                  label="Role"
                  options={Role}
                  {...register("role")}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
          {showDialog && (
            <Dialog
              title="Are you sure?"
              message={message}
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
          )}
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
    </>
  );
}
