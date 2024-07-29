import React, { useState } from "react";
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from "react-icons/md";

const NavbarComponent = ({ logo, title, navItems, onDarkModeToggle, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const highlightColor = isDarkMode ? "text-orange-400" : "text-orange-400";

  return (
    <nav className={`${bgColor} ${textColor} px-4 sm:px-6 lg:px-8 py-4 w-full transition-colors duration-300 fixed top-0 left-0 right-0 z-50`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3.5">
          <img
            loading="lazy"
            src={logo}
            alt="Logo"
            className="w-8 h-8 sm:w-9 sm:h-9"
          />
          <div className="text-lg font-medium">{title}</div>
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden text-current">
          {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-5 items-center text-sm">
            {navItems.map((item) => (
              <li
                key={item}
                className={`hover:${highlightColor} transition duration-300 cursor-pointer`}
              >
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={onDarkModeToggle}
            className="p-2 rounded-full focus:outline-none hover:bg-gray-100 transition-colors duration-300"
          >
            {isDarkMode ? (
              <MdLightMode className="w-6 h-6 text-yellow-400" />
            ) : (
              <MdDarkMode className="w-6 h-6 text-current" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 items-center text-sm">
            {navItems.map((item) => (
              <li
                key={item}
                className={`hover:${highlightColor} transition duration-300`}
              >
                {item}
              </li>
            ))}
            <li>
              <button
                onClick={onDarkModeToggle}
                className="p-2 rounded-full focus:outline-none hover:bg-gray-700 transition-colors duration-300"
              >
                {isDarkMode ? (
                  <MdLightMode className="w-6 h-6 text-yellow-400" />
                ) : (
                  <MdDarkMode className="w-6 h-6 text-current" />
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
