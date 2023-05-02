import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreateMany } from "../../api/room.service";

function Index() {
  const [file, setFile] = useState(null);
  const [uploadComplete, setUploadComplete] = useState(false);

  function handleFileSelect(event) {
    setFile(event.target.files[0]);
    setUploadComplete(false);
  }
  function handleUpload(event) {
    event.preventDefault();

    if (!file) {
      toast.error("Please select a file to upload.");
      return;
    }

    const fileType = file.type;
    if (
      fileType !== "application/vnd.ms-excel" &&
      fileType !==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      toast.error("Please upload an Excel file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    CreateMany(formData)
      .then((response) => {
        setUploadComplete(true);
        toast.success("Upload complete!");
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: UploadRoom.js:41 ~ handleUpload ~ error:",
          error
        );

        toast.error(error.response.data.message);
      });
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <h1 className="text-3xl font-bold mb-8">Upload Excel File</h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleUpload}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="file"
            >
              Select a file:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="file"
              type="file"
              onChange={handleFileSelect}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={!file}
            >
              Upload
            </button>
            {uploadComplete && (
              <span className="text-green-500 ml-4">Upload complete!</span>
            )}
          </div>
        </form>
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
    </div>
  );
}

export default Index;
