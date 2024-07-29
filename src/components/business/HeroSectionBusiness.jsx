import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSectionBusiness = ({ title, desc, button, img, imgAlt, isDarkMode }) => {
  return (
    <div className={`py-16 lg:py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {title}
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-xl`}>
              {desc}
            </p>
            <button className="group text-white flex items-center gap-3 px-8 py-4 bg-orange-400 rounded-md font-semibold transition duration-300 hover:bg-white hover:text-black">
              <span>{button}</span>
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              <img
                src={img}
                alt={imgAlt}
                className="rounded-lg h-[600px] w-full max-w-md lg:max-w-lg xl:max-w-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionBusiness;
