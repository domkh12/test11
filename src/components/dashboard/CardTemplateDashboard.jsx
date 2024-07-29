import React, { useState } from "react";

function CardTemplateDashboard({ imageSrc, title, onSelect, onPreview }) {
  const [isEditing, setIsEditing] = useState(
    localStorage.getItem("isEditing") === "true"
  );

  const toggleEditing = () => {
    const currentEditingState = localStorage.getItem("isEditing") === "true";
    const newEditingState = !currentEditingState;
    localStorage.setItem("isEditing", newEditingState);
    setIsEditing(newEditingState);
    window.dispatchEvent(new Event("storage")); // Dispatch storage event
  };

  const handleSelect = () => {
    onSelect();
    toggleEditing();
  };

  return (
    <div className="relative p-2 group bg-gray-200 dark:bg-gray-900 hover:dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:bg-white flex flex-col w-full max-w-[350px] h-auto dark:hover:border dark:hover:border-gray-500">
      <div className="">
        <button
          onClick={onPreview}
          className="text-gray-100 opacity-0 group-hover:opacity-100 bg-primary z-10 absolute left-[120px] top-[80px] px-7 py-2 rounded-md"
        >
          Preview
        </button>         
      </div>
      <div className="max-w-[334px] w-full rounded-t-md h-48 object-cover opacity-0 group-hover:opacity-50 bg-gray-800 absolute"></div>
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 rounded-t-md object-cover"
      />

      <div className="dark:bg-gray-800 group-hover:dark:border-t-gray-800 rounded-b-md bg-white flex justify-between items-center px-3 py-2 border-t-[8px] group-hover:border-t-white dark:border-t-gray-900 border-gray-200">
        <h3 className="text-gray-900 text-lg dark:text-gray-100">{title}</h3>
        <button
          onClick={handleSelect}
          className="bg-primary text-white px-7 py-2 rounded-md hover:bg-primary-hover transition-colors duration-300"
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default CardTemplateDashboard;
