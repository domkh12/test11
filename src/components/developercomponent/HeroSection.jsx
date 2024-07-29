import React, { useState, useEffect } from "react";
import { FaFacebookF, FaGithub, FaEdit } from "react-icons/fa";
import { Link } from "react-scroll";
import ContentEditable from "react-contenteditable";
import { useDropzone } from "react-dropzone";

function HeroSection({
  heroImage: initialHeroImage,
  introduction,
  name: initialName,
  profession: initialProfession,
  bio: initialBio,
  socialMediaLinks: initialSocialMediaLinks,
  collectData,
}) {
  const [heroImage, setHeroImage] = useState(initialHeroImage);
  const [name, setName] = useState(initialName);
  const [profession, setProfession] = useState(initialProfession);
  const [bio, setBio] = useState(initialBio);
  const [socialMediaLinks, setSocialMediaLinks] = useState(
    initialSocialMediaLinks
  );
  const [editingLinkIndex, setEditingLinkIndex] = useState(null);

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
        setHeroImage(reader.result);
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

  const handleLinkChange = (index, evt) => {
    const newLinks = [...socialMediaLinks];
    newLinks[index].url = evt.target.value;
    setSocialMediaLinks(newLinks);
  };

  const editableStyle = {
    border: "1px dashed red",
  };

  // Function to collect data from this component
  const getData = () => ({
    heroImage,
    name,
    profession,
    bio,
    socialMediaLinks,
  });

  // Pass this function to the parent
  useEffect(() => {
    if (collectData) {
      collectData(getData);
    }
  }, [collectData, getData]);

  return (
    <section
      className="font-sans section sm-max:p-5 dark:bg-gray-900 sm:p-10 xl:p-0 overflow-hidden"
      name="hero"
    >
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-8 sm:justify-between items-center xl:justify-center sm:h-auto xl:h-[100vh]">
        <div className="flex flex-col justify-center items-center lg:items-start gap-7 lg:w-[50%] sm:w-[100%]">
          <p className="text-xl font-medium dark:text-gray-100 xl-max:text-lg">
            {introduction}
          </p>
          <div>
            <h1 className="sm:text-5xl flex flex-wrap justify-center lg:justify-start gap-5 sm:text-center sm-max:text-center lg:text-start font-bold text-6xl lg:text-4xl xl:text-6xl">
              <span className="dark:text-gray-100">Hi, I'm </span>
              <ContentEditable
                html={name}
                disabled={!isEditing}
                onChange={handleContentChange(setName)}
                className="text-primary-developer-template"
                style={isEditing ? editableStyle : {}}
              />
            </h1>
            <div className="sm:text-5xl flex flex-wrap justify-center lg:justify-start gap-5 font-bold lg:text-4xl xl:text-6xl sm-max:text-center sm:mt-4 sm-max:mt-4 xl:mt-8 sm:text-center lg:text-start">
              <span className="dark:text-gray-100 sm-max:text-5xl"> A </span>
              <ContentEditable
                html={profession}
                disabled={!isEditing}
                onChange={handleContentChange(setProfession)}
                className="text-primary-developer-template sm-max:text-5xl"
                style={isEditing ? editableStyle : {}}
              />
            </div>
          </div>
          <ContentEditable
            html={bio}
            disabled={!isEditing}
            onChange={handleContentChange(setBio)}
            className="sm:text-center sm-max:px-10 sm:font-medium dark:text-gray-100 sm:text-gray-500 lg:text-start"
            style={isEditing ? editableStyle : {}}
          />
          <div className="flex gap-5">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="dark:text-gray-100 text-blue-900 hover:text-primary-developer-template"
            >
              <button className="bg-primary-developer-template px-14 py-4 rounded-lg text-white text-lg hover:bg-primary-developer-template-hover">
                About Me
              </button>
            </Link>
            <div className="flex justify-center gap-5 items-center dark:text-gray-100">
              {socialMediaLinks.map((link, index) => (
                <div key={index} className="flex items-center relative">
                  {link.type === "facebook" && (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="w-6 h-6" />
                    </a>
                  )}
                  {link.type === "github" && (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                  )}
                  {isEditing && (
                    <FaEdit
                      className="w-4 h-4 ml-2 cursor-pointer"
                      onClick={() => setEditingLinkIndex(index)}
                    />
                  )}
                  {editingLinkIndex === index && isEditing && (
                    <input
                      type="text"
                      value={link.url}
                      onChange={(evt) => handleLinkChange(index, evt)}
                      onBlur={() => setEditingLinkIndex(null)}
                      className="absolute left-0 top-8 p-1 border rounded"
                      style={{ zIndex: 10 }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          {...getRootProps({
            className:
              "border w-full sm:max-w-[100%] sm:mx-10 sm-max:mt-[0px] sm:mt-0 xl:w-[25%] lg:w-[40%] relative flex rounded-lg justify-center items-end h-auto shadow-xl",
            onClick: (event) => {
              if (!isEditing) event.stopPropagation();
            },
          })}
        >
          <input {...getInputProps()} />
          <div className="absolute top-0 w-[70%] h-[50%] bg-primary-developer-template rounded-full"></div>
          <img
            src={heroImage}
            className="z-10 w-full h-full object-cover"
            alt="Developer"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
