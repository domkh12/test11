import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const FooterSection = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // You can add logic here to trigger navigation based on certain conditions
  }, []);
  return (
    <footer className="bg-[#F7F7F7] dark:bg-gray-800 dark:text-gray-100 py-3 flex flex-col justify-between items-center font-sans">
      <section className="flex sm:justify-between sm-max:justify-between xl:justify-evenly items-start pb-3 border-b-4 w-full xl:px-20 sm:px-10 sm-max:px-5">
        {/* logo */}
       <Link
        activeClass="active"
        to="hero"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="flex items-center sm-max:flex-col gap-2 cursor-pointer"
      >
        <img
          width="40px"
          height="40px"
          src="logoHomepage.png"
          alt="logoHomepage"
        />
        <p className="xl:text-2xl font-semibold text-gray-700 dark:text-gray-100">
          Showcase
        </p>
      </Link>
      {/* card info */}
      <div className="flex flex-col justify-start gap-2 items-start">
        <p className="font-semibold">Contact Us</p>
      <div className="flex justify-center items-center gap-4">
        <MdWifiCalling3 className="w-7 h-7 text-primary" />
        <p>+855 95 990 910</p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <FaLocationDot className="w-7 h-7 text-primary" />
        <p>St 562, Phnom Penh 12151</p>
      </div>
      </div>
      {/* section */}
      <ul className="flex flex-col justify-start gap-2 items-start">
      <p className="font-semibold">Explore</p>
        <li className="hover:text-primary cursor-pointer">
          <Link
            activeClass="active"
            to="template"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Template
          </Link>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <Link
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Features
          </Link>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      </section>
      {/* copyright */}
      <p className="pt-4 pb-2">
        &copy; Copyright - {new Date().getFullYear()}
        <span className="text-primary font-medium"> &#64;Showcase</span>
      </p>
    </footer>
  );
};

export default FooterSection;
