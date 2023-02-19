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
    console.log(
      "🚀 ~ file: StaffAccount.js:19 ~ handleUpload ~ formData",
      formData
    );

    axios
      .post("http://localhost:3001/staff/addMany", formData)
      .then((response) => {
        console.log("File uploaded successfully");
        setUploadComplete(true);
        setUploadedFileUrl(response.data.fileUrl);
      })
      .catch((error) => {
        console.error("Error uploading file", error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Make the POST request to the API using the uploaded file URL
    // and any other necessary data.
    axios
      .post("/api/post", {
        fileUrl: uploadedFileUrl,
        // other data to be posted to the API
      })
      .then((response) => {
        console.log("Data posted successfully");
      })
      .catch((error) => {
        console.error("Error posting data", error);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full">
      <h1 className="text-3xl font-bold mb-8">Upload Excel File</h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleUpload}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="file">
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
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Index;
