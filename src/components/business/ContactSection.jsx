import React from "react";
import { CiPhone, CiMail, CiLocationOn } from "react-icons/ci";

const ContactSection = ({ 
  isDarkMode, 
  title, 
  subtitle, 
  description, 
  phoneNumbers, 
  emails, 
  officeLocation 
}) => {
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const subtitleColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const inputBgColor = isDarkMode ? "bg-gray-800" : "bg-white";
  const inputBorderColor = isDarkMode ? "border-gray-700" : "border-gray-300";
  const buttonBgColor = isDarkMode ? "bg-orange-500 hover:bg-orange-600" : "bg-black hover:bg-gray-800";

  const contactInfo = [
    { icon: <CiPhone className="text-2xl" />, title: "Phone number", lines: phoneNumbers },
    { icon: <CiMail className="text-2xl" />, title: "Email address", lines: emails },
    { icon: <CiLocationOn className="text-2xl" />, title: "Office Location", lines: [officeLocation] },
  ];

  return (
    <div className={`flex flex-col items-center p-6 md:p-10 ${bgColor} ${textColor}`}>
      <div className="flex flex-col items-center text-center">
        <div className={`text-sm font-medium ${subtitleColor}`}>{subtitle}</div>
        <div className="mt-2 text-2xl font-bold">{title}</div>
      </div>
      <div className="mt-8 w-full max-w-lg">
        <div className={`text-center ${subtitleColor} mb-4`}>{description}</div>
        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your name"
              className={`flex-1 px-4 py-2 border ${inputBorderColor} rounded-md ${inputBgColor} ${textColor}`}
            />
            <input
              type="email"
              placeholder="Email"
              className={`flex-1 px-4 py-2 border ${inputBorderColor} rounded-md ${inputBgColor} ${textColor}`}
            />
          </div>
          <textarea
            placeholder="Message"
            className={`w-full px-4 py-2 border ${inputBorderColor} rounded-md h-32 ${inputBgColor} ${textColor}`}
          ></textarea>
          <button
            type="submit"
            className={`w-full py-2 text-white ${buttonBgColor} rounded-md transition duration-300`}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-3xl text-start">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            {item.icon}
            <div>
              <div className="text-lg font-semibold">{item.title}</div>
              {item.lines.map((line, lineIndex) => (
                <div key={lineIndex} className={`text-sm ${subtitleColor}`}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;