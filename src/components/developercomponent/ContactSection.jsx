import React, { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Link } from "react-scroll";

const ContactSection = ({ initialAddress, initialEmail, initialPhone }) => {
  const [address, setAddress] = useState(initialAddress);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [isEditing, setIsEditing] = useState(
    localStorage.getItem("isEditing") === "true"
  );

  const handleStorageChange = () => {
    setIsEditing(localStorage.getItem("isEditing") === "true");
  };

  useEffect(() => {
    handleStorageChange();
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleContentChange = (setter) => (evt) => {
    setter(evt.target.value);
  };

  const editableStyle = {
    border: "1px dashed red",
  };

  return (
    <section
      className="py-20 font-sans flex flex-col gap-10 bg-white dark:bg-gray-900 px-6 sm:px-10 lg:px-32 xl:px-40 section"
      name="contact"
      id="contact"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <p className="text-lg dark:text-gray-100">Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          <span className="dark:text-gray-100">My</span>{" "}
          <span className="text-primary-developer-template">Contact</span>
        </h2>
        <div className="w-32 rounded-md h-1 bg-primary"></div>
        <p className="max-w-2xl text-center text-gray-600 dark:text-gray-300">
          Please fill out the form on this section to contact me. Or call
          between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-8 w-full lg:w-2/3 flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex justify-start gap-5 items-center">
              <div className="bg-primary-developer-template p-4 rounded-full">
                <FaLocationDot className="w-7 h-7 text-gray-100" />
              </div>
              <div>
                <span className="text-xl font-medium dark:text-gray-100">
                  Address
                </span>{" "}
                <br />
                <ContentEditable
                  html={address}
                  disabled={!isEditing}
                  onChange={handleContentChange(setAddress)}
                  className="text-gray-600 dark:text-gray-300"
                  style={isEditing ? editableStyle : {}}
                />
              </div>
            </div>
            <div className="flex justify-start gap-5 items-center">
              <div className="bg-primary-developer-template p-4 rounded-full">
                <IoIosMail className="w-7 h-7 text-gray-100" />
              </div>
              <div>
                <span className="text-xl font-medium dark:text-gray-100">
                  Email
                </span>{" "}
                <br />
                <ContentEditable
                  html={email}
                  disabled={!isEditing}
                  onChange={handleContentChange(setEmail)}
                  className="text-gray-600 dark:text-gray-300"
                  style={isEditing ? editableStyle : {}}
                />
              </div>
            </div>
            <div className="flex justify-start gap-5 items-center">
              <div className="bg-primary-developer-template p-4 rounded-full">
                <IoCall className="w-7 h-7 text-gray-100" />
              </div>
              <div>
                <span className="text-xl font-medium dark:text-gray-100">
                  Call
                </span>{" "}
                <br />
                <ContentEditable
                  html={phone}
                  disabled={!isEditing}
                  onChange={handleContentChange(setPhone)}
                  className="text-gray-600 dark:text-gray-300"
                  style={isEditing ? editableStyle : {}}
                />
              </div>
            </div>
          </div>
          <form action="" className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <input
                type="text"
                placeholder="Your name"
                className="w-full md:w-1/2 p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring focus:ring-primary-developer-template dark:focus:ring-primary-developer-template dark:bg-gray-900"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-1/2 p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring focus:ring-primary-developer-template dark:focus:ring-primary-developer-template dark:bg-gray-900"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-3 h-32 rounded-md border border-gray-300 dark:border-gray-600 focus:ring focus:ring-primary-developer-template dark:focus:ring-primary-developer-template dark:bg-gray-900"
            ></textarea>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="dark:text-gray-100 text-blue-900 hover:text-primary-developer-template"
            >
              <button className="bg-primary-developer-template px-14 py-4 rounded-lg text-white text-lg hover:bg-primary-developer-template-hover">
                Send Message
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
