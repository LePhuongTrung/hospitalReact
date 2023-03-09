import axios from "axios";
import React, { useState } from "react";

function Index() {
  const [file, setFile] = useState(null);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState(null);

  function handleFileSelect(event) {
    setFile(event.target.files[0]);
    setUploadComplete(false);
    setUploadedFileUrl(null);
  }

  function handleUpload(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:3001/staff/addMany", formData)
      .then((response) => {
        setUploadComplete(true);
        setUploadedFileUrl(response.data.fileUrl);
      })
      .catch((error) => {
        console.error("Error uploading file", error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("/api/post", {
        fileUrl: uploadedFileUrl,
      })
      .then((response) => {
        console.info("Data posted successfully");
      })
      .catch((error) => {
        console.error("Error posting data", error);
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
        {uploadedFileUrl && (
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="fileUrl"
              >
                Uploaded file URL:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fileUrl"
                type="text"
                value={uploadedFileUrl}
                readOnly
              />
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
        )}
      </div>
    </div>
  );
}

export default Index;
