import React, { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";
import { useDropzone } from "react-dropzone";

function CardSkill({ img: initialImg, title: initialTitle }) {
  const [img, setImg] = useState(initialImg);
  const [title, setTitle] = useState(initialTitle);
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
        setImg(reader.result);
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
    <div className="border-[3px] w-40 h-40 sm:w-52 sm:h-52 overflow-hidden flex justify-center rounded-lg flex-col items-center gap-2 dark:bg-gray-800 bg-[#F7F7F7]">
      <div {...getRootProps({ className: "w-24 h-24 sm:w-40 sm:h-40 relative" })}>
        <input {...getInputProps()} />
        <img
          src={img}
          className="w-full h-full object-cover"
          alt={title}
        />
        {isEditing && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">

          </div>
        )}
      </div>
      <ContentEditable
        html={title}
        disabled={!isEditing}
        onChange={handleContentChange(setTitle)}
        className="dark:text-gray-100 text-center"
        style={isEditing ? editableStyle : {}}
      />
    </div>
  );
}

export default CardSkill;
