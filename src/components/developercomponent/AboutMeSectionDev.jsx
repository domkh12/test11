import React, { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";
import { useDropzone } from "react-dropzone";
import { Link } from "react-scroll";

function AboutMeSectionDev({
  avatar: initialAvatar,
  firstName: initialFirstName,
  lastName: initialLastName,
  birthDate: initialBirthDate,
  nationality: initialNationality,
  experience: initialExperience,
  address: initialAddress,
  freelance: initialFreelance,
  language: initialLanguage,
  phone: initialPhone,
  email: initialEmail,
}) {
  const [avatar, setAvatar] = useState(initialAvatar);
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [birthDate, setBirthDate] = useState(initialBirthDate);
  const [nationality, setNationality] = useState(initialNationality);
  const [experience, setExperience] = useState(initialExperience);
  const [address, setAddress] = useState(initialAddress);
  const [freelance, setFreelance] = useState(initialFreelance);
  const [language, setLanguage] = useState(initialLanguage);
  const [phone, setPhone] = useState(initialPhone);
  const [email, setEmail] = useState(initialEmail);
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

  const handleImageChange = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleImageChange,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/gif": [".gif"],
      "image/bmp": [".bmp"],
      "image/webp": [".webp"],
    },
    disabled: !isEditing,
  });

  const handleContentChange = (setter) => (evt) => {
    setter(evt.target.value);
  };

  const editableStyle = {
    border: "1px dashed red",
  };

  return (
    <section
      className="py-20 sm-max:py-10 font-sans section flex flex-col sm:gap-10 bg-[#F7F7F7] dark:bg-gray-800"
      name="about"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <p className="text-lg dark:text-gray-100">My Intro</p>
        <h2 className="text-5xl font-bold">
          <span className="dark:text-gray-100">About</span>{" "}
          <span className="text-primary-developer-template">Me</span>
        </h2>
        <div className="w-32 rounded-md h-1 bg-primary"></div>
      </div>
      <div className="flex sm:justify-center lg:justify-center sm-max:justify-center sm-max:items-center sm-max:p-5 lg:items-center lg:gap-10 2xl:gap-10 sm:flex-col sm-max:flex-col lg:flex-row lg:px-10 sm:items-center">
        <div className="font-sans">
          <div {...getRootProps({
            className: "flex justify-center items-center sm:w-auto lg:w-auto h-auto relative"
          })}>
            <input {...getInputProps()} />
            <img
              src={avatar}
              className="sm:w-[500px] z-10 rounded-lg lg:h-[450px] object-cover lg:w-[700px]"
              alt="photo"
            />
            {isEditing && (
              <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
                <p className="text-white">Click to change image</p>
              </div>
            )}
          </div>
        </div>
        <div className="lg:mt-10 sm:flex sm:justify-center sm:items-center lg:items-start sm:mt-20 sm:flex-col sm-max:flex-col lg:w-auto sm:gap-4">
          <p className="sm:text-center sm-max:mt-5 sm:font-semibold sm:text-xl sm-max:text-center sm-max:pb-5 dark:text-gray-100">
            PERSONAL INFOS:
          </p>
          <div className="flex justify-start items-start sm:gap-10 sm-max:gap-10">
            <div className="sm:flex sm:flex-col sm:gap-5">
              <div className="flex justify-start sm:flex-col sm-max:flex-col sm-max:text-center sm-max:gap-1 sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">First Name</label>
                <ContentEditable
                  html={firstName}
                  disabled={!isEditing}
                  onChange={handleContentChange(setFirstName)}
                  className="dark:text-gray-100"
                  style={isEditing ? editableStyle : {}}
                />
              </div>
              <div className="flex justify-start sm:flex-col sm-max:mt-3 sm-max:flex-col sm-max:text-center sm-max:gap-1 sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Last Name</label>
                <ContentEditable
                  html={lastName}
                  disabled={!isEditing}
                  onChange={handleContentChange(setLastName)}
                  className="dark:text-gray-100"
                  style={isEditing ? editableStyle : {}}
                />
              </div>
              <div className="flex justify-start sm:flex-col sm-max:mt-3 sm-max:flex-col sm-max:text-center sm-max:gap-1 sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">BirthDate</label>
                <ContentEditable
                  html={birthDate}
                  disabled={!isEditing}
                  onChange={handleContentChange(setBirthDate)}
                  className="dark:text-gray-100"
                  style={isEditing ? editableStyle : {}}
                />
              </div>
              <div className="flex justify-start sm:flex-col sm-max:mt-3 sm-max:flex-col sm-max:text-center sm-max:gap-1 sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Nationality</label>
                <ContentEditable
                  html={nationality}
                  disabled={!isEditing}
                  onChange={handleContentChange(setNationality)}
                  className="dark:text-gray-100"
                  style={isEditing ? editableStyle : {}}
                />
              </div>
              <div className="flex justify-start sm:flex-col sm-max:mt-3 sm-max:flex-col sm-max:text-center sm-max:gap-1 sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Experience</label>
                <ContentEditable
                  html={experience}
                  disabled={!isEditing}
                  onChange={handleContentChange(setExperience)}
                  className="dark:text-gray-100"
                  style={isEditing ? editableStyle : {}}
                />
              </div>
            </div>
            <div className="sm:flex sm:flex-col sm:gap-5">
              <div className="flex justify-start sm:flex-col sm-max:mt-3 sm-max:flex-col sm-max:text-center sm-max:gap-1 sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Address</label>
                <ContentEditable
                  html={address}
                  disabled={!isEditing}
                  onChange={handleContentChange(setAddress)}
                  className="dark:text-gray-100"
                  style={isEditing ? editableStyle : {}}
                />
              </div>
              <div className="flex justify-start sm:flex-col sm-max:mt-3 sm-max:flex-col sm-max:text-center sm-max:gap-1 sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Freelance</label>
                <ContentEditable
                  html={freelance}
                  disabled={!isEditing}
                  onChange={handleContentChange(setFreelance)}
                  className="dark:text-gray-100"
                  style={isEditing ? editableStyle : {}}
                />
              </div>
              <div className="flex justify-start sm:flex-col sm-max:mt-3 sm-max:flex-col sm-max:text-center sm-max:gap-1 sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Language</label>
                <ContentEditable
                  html={language}
                  disabled={!isEditing}
                  onChange={handleContentChange(setLanguage)}
                  className="dark:text-gray-100"
                  style={isEditing ? editableStyle : {}}
                />
              </div>
              <div className="flex justify-start sm:flex-col sm-max:mt-3 sm-max:flex-col sm-max:text-center sm-max:gap-1 sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Phone</label>
                <ContentEditable
                  html={phone}
                  disabled={!isEditing}
                  onChange={handleContentChange(setPhone)}
                  className="dark:text-gray-100"
                  style={isEditing ? editableStyle : {}}
                />
              </div>
              <div className="flex justify-start sm:flex-col sm-max:mt-3 sm-max:flex-col sm-max:text-center sm-max:gap-1 sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Email</label>
                <ContentEditable
                  html={email}
                  disabled={!isEditing}
                  onChange={handleContentChange(setEmail)}
                  className="dark:text-gray-100"
                  style={isEditing ? editableStyle : {}}
                />
              </div>
            </div>
          </div>
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
              Hire Me
              </button>
            </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSectionDev;
