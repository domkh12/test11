import React from "react";

const ServiceCard = ({ icon, serviceName, description, isDarkMode }) => {
  return (
    <div className={`flex flex-col space-y-4 p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md`}>
      <div className="text-orange-400 text-4xl">{icon}</div>
      <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{serviceName}</h3>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
      <button className={`self-start px-4 py-2 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-black hover:bg-gray-800'} text-white text-sm rounded-md transition duration-300`}>
        Read more
      </button>
    </div>
  );
};

export default ServiceCard;