import React from "react";

const IndustriesCard = ({ image, title, description, isDarkMode }) => {
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const titleColor = isDarkMode ? "text-white" : "text-black";
  const descriptionColor = isDarkMode ? "text-gray-300" : "text-gray-600";

  return (
    <div className={`flex flex-col ${cardBg} rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl`}>
      <img
        src={image || "/public/businessImg/Industries.png"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-xl font-semibold ${titleColor} mb-4`}>{title}</h3>
        <p className={`text-base ${descriptionColor} flex-grow`}>{description}</p>
      </div>
    </div>
  );
};

export default IndustriesCard;