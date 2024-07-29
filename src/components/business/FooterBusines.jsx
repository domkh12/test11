import React from "react";

const FooterBusines = ({ isDarkMode, navItems, socialIcons, developerInfo }) => {
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-[#454545]";
  const textColor = "text-white";
  const highlightColor = "text-orange-400";

  return (
    <footer className={`${bgColor} ${textColor} py-8 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center gap-6">
            {socialIcons.map((Icon, index) => (
              <a key={index} href="#" className="hover:text-orange-400 transition-colors duration-300">
                <Icon className="w-6 h-6" />
                <span className="sr-only">Social media</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Showcase. All rights reserved.
          </p>
          <p className="text-sm">
            <span className="font-medium">Developed by </span>
            <span className={highlightColor}>{developerInfo}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBusines;