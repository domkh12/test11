import React from "react";
import IndustriesCard from "./IndustriesCard";

const IndustriesSection = ({ isDarkMode, title, subtitle, industries }) => {
  const sectionBg = isDarkMode ? "bg-gray-900" : "bg-[#f7f7f7]";
  const textColor = isDarkMode ? "text-white" : "text-black";

  return (
    <section className={`py-16 w-full ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-orange-400 mb-2">
            {subtitle}
          </p>
          <h2 className={`text-4xl font-bold ${textColor}`}>
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustriesCard
              key={index}
              image={industry.image}
              title={industry.title}
              description={industry.description}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;