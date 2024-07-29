import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function CardTemplate({ type, image }) {
  return (
    <div className="font-sans">
      <div className="bg-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-all rounded-md h-auto p-4 flex flex-col justify-between gap-3 group dark:bg-gray-900">
        <div className="w-full rounded-md h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
          <img
            src={image}
            className="rounded-md object-cover w-full h-full"
            alt={type}
          />
        </div>
        <div className="flex justify-between bg-white py-3 rounded-md items-center px-4 dark:bg-gray-700 dark:text-gray-100">
          <div className="relative h-8 w-auto overflow-hidden">
            <p className="text-xl sm:text-2xl font-medium group-hover:translate-y-[-100%] transform transition-transform duration-300 ease-in-out">
              {type}
            </p>
            <p className="absolute bottom-0 text-xl sm:text-2xl font-medium group-hover:translate-y-[-20%] transform translate-y-14 transition-transform duration-300 ease-in-out">
              {type}
            </p>
          </div>
          <FaArrowRightLong className="w-6 h-6 sm:w-7 sm:h-7 transform transition-transform duration-300 ease-in-out group-hover:-rotate-45" />
        </div>
      </div>
    </div>
  );
}

export default CardTemplate;
