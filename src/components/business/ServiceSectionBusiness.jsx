import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceSectionBusiness = ({ sectionTitle, sectionSubtitle, services, isDarkMode }) => {
  return (
    <section className={`py-16 w-full ${isDarkMode ? 'bg-gray-900' : 'bg-[#f7f7f7]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-orange-400' : 'text-orange-400'}`}>{sectionSubtitle}</p>
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{sectionTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              serviceName={service.name}
              description={service.description}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionBusiness;