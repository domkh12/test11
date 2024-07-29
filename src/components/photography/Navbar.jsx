import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { FaMoon, FaBars } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

export default function NavbarComponent() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`font-sans sticky top-0 z-50 antialiased ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
      <header className={`bg-yellow-500 dark:bg-gray-800 text-white p-3`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">KIM NAMWOON</div>

          <nav className="hidden md:flex space-x-9">
            <Link
              className="hover:text-gray-300 transition-all cursor-pointer text-center"
              activeClass="active"
              to="HomePage"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              HOME
            </Link>
            <Link
              className="hover:text-gray-300 transition-all cursor-pointer text-center"
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              ABOUT
            </Link>
            <Link
              className="hover:text-gray-300 transition-all cursor-pointer text-center"
              activeClass="active"
              to="Project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              PROJECT
            </Link>
            <Link
              className="hover:text-gray-300 transition-all cursor-pointer text-center"
              activeClass="active"
              to="Blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              BLOG
            </Link>
            <Link
              className="hover:text-gray-300 transition-all cursor-pointer text-center"
              activeClass="active"
              to="ContactUs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              CONTACT
            </Link>
          </nav>

          <div className="flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded"
            >
              {darkMode ? <MdSunny className="text-yellow-500 w-5 h-5" /> : <FaMoon className="text-gray-900 w-5 h-5" />}
            </button>

            <button
              className="md:hidden ml-4 p-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars className="text-white w-7 h-7" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2 text-center">
              <Link
                className="hover:text-gray-300 transition-all cursor-pointer"
                activeClass="active"
                to="HomePage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                className="hover:text-gray-300 transition-all cursor-pointer"
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                className="hover:text-gray-300 transition-all cursor-pointer"
                activeClass="active"
                to="Project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECT
              </Link>
              <Link
                className="hover:text-gray-300 transition-all cursor-pointer"
                activeClass="active"
                to="Blog"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </Link>
              <Link
                className="hover:text-gray-300 transition-all cursor-pointer"
                activeClass="active"
                to="ContactUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
