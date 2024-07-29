import React from "react";
import { FaRegUser } from "react-icons/fa";

const BlogCard = ({ img, author, title, description, isDarkMode }) => {
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const descriptionColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const buttonBg = isDarkMode ? "bg-orange-500 hover:bg-orange-600" : "bg-black hover:bg-gray-800";

  return (
    <div className={`${cardBg} rounded-lg shadow-md overflow-hidden w-full`}>
      <img src={img} className="w-full h-48 object-cover" alt={title} />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
          <FaRegUser />
          <span>{author}</span>
        </div>
        <h3 className={`text-lg font-bold ${textColor} mb-2 truncate`}>{title}</h3>
        <p className={`text-sm ${descriptionColor} mb-4 line-clamp-2`}>{description}</p>
        <button className={`${buttonBg} text-white text-sm py-2 px-4 rounded-md transition duration-300`}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default BlogCard;