import React from "react";

function Dialog({ title, message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md">
        <div className="p-6">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, "<br>") }}
          ></p>
        </div>
        <div className="px-6 py-4 flex justify-end">
          <button className="mr-2" onClick={onConfirm}>
            Confirm
          </button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
