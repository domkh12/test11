import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutSection = ({
  img,
  icon1,
  icon2,
  title,
  subtitle,
  description1,
  description2,
  feature1,
  feature2,
  buttonText,
  isDarkMode
}) => {
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const paragraphColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const buttonColor = isDarkMode ? "bg-orange-500 hover:bg-orange-600" : "bg-orange-400 hover:bg-orange-500";
  const dividerColor = isDarkMode ? "border-gray-700" : "border-gray-200";

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="text-center mb-12">
        <p className="text-base font-medium text-orange-400 mb-2">
          {subtitle || "ABOUT OUR COMPANY"}
        </p>
        <h2 className={`text-3xl sm:text-4xl font-bold ${textColor}`}>
          {title || "Choose Insurance Service Company"}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3 space-y-6">
          <p className={`text-base ${paragraphColor}`}>
            {description1 || "Lorem ipsum dolor sit amet, ad his ignota verterem recusabo. Meis pericula eum ad, at ullum primis mediocrem mei. Ius ei debet persius, id eos sanctus persecuti."}
          </p>
          <p className={`text-base ${paragraphColor}`}>
            {description2 || "Lorem ipsum dolor sit amet, ad his ignota verterem recusabo. Meis pericula eum ad, at ullum primis mediocrem mei. Ius ei debet persius, id eos sanctus persecuti."}
          </p>
          <div className="flex items-start gap-5 py-5">
            <img
              src={icon1 || "/public/businessImg/Service2.png"}
              alt="Feature Icon 1"
              className="w-12 h-12 object-contain"
            />
            <p className={paragraphColor}>
              {feature1 || "Lorem ipsum dolor sit amet, ad his ignota verterem recusabo. Meis pericula eum ad"}
            </p>
          </div>
          <hr className={`border-t ${dividerColor}`} />
          <div className="flex items-start gap-5 py-5">
            <img
              src={icon2 || "/public/businessImg/Service3.png"}
              alt="Feature Icon 2"
              className="w-12 h-12 object-contain"
            />
            <p className={paragraphColor}>
              {feature2 || "Lorem ipsum dolor sit amet, ad his ignota verterem recusabo. Meis pericula eum ad"}
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className={`flex items-center gap-2.5 px-6 py-3 font-semibold text-white ${buttonColor} rounded-md transition duration-300`}>
              <span>{buttonText || "Contact us now"}</span>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="lg:w-1/3">
          <img
            src={img || "public/businessImg/CompanyService.png"}
            alt="Company Image"
            className="w-full h-[500px] object-cover rounded-md bg-purple-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;