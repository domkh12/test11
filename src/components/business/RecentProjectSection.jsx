import React, { useState } from "react";

const RecentProjectSection = ({ title, subtitle, categories, projects, isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const textColor = isDarkMode ? "text-white" : "text-black";
  const bgColor = isDarkMode ? "bg-gray-800" : "bg-zinc-300";
  const buttonBgColor = isDarkMode ? "bg-gray-700" : "bg-black";

  return (
    <section className={`py-16 w-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-orange-400 mb-2">{subtitle}</p>
          <h2 className={`text-4xl font-bold ${textColor}`}>{title}</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 ${
                index === activeCategory
                  ? `text-white ${buttonBgColor} shadow-lg`
                  : `${bgColor} ${textColor} hover:bg-opacity-80`
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={project.img}
                alt={`Recent Project ${index + 1}`}
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjectSection;