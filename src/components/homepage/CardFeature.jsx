import React from "react";
function CardFeature({ title, desc, icon }) {
  return (
    <div className="font-sans w-auto h-auto dark:bg-gray-800 dark:hover:bg-gray-700 bg-[#f5f5f5] hover:bg-white hover:outline hover:outline-1 hover:outline-gray-200 p-7 gap-6 flex flex-col justify-start items-start rounded-md">
      <div className="bg-white w-12 h-12 rounded-full p-2">{icon}</div>
      <h2 className="text-xl font-medium dark:text-gray-100">{title}</h2>
      <p className="text-gray-700 dark:text-gray-200">{desc}</p>
    </div>
  );
}

export default CardFeature;
