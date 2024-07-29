import React, { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";

function CardBlog({ img: initialImg, title: initialTitle, desc: initialDesc, id }) {
  const [img, setImg] = useState(initialImg);
  const [title, setTitle] = useState(initialTitle);
  const [desc, setDesc] = useState(initialDesc);
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
    <Link
      to={isEditing ? "#" : `/developer/blog/${id}`}
      className="w-[400px] rounded-lg overflow-hidden bg-white dark:bg-gray-800 dark:text-gray-100 shadow-xl group"
    >
      <div className="overflow-hidden" {...getRootProps()}>
        <input {...getInputProps()} />
        <img
          src={img}
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:filter group-hover:grayscale w-full"
          alt="Blog"
        />       
      </div>
      <div className="flex flex-col gap-10 py-10 px-5 border-primary-developer-template border-[10px] border-b-0 border-l-0 border-r-0">
        <ContentEditable
          html={title}
          disabled={!isEditing}
          onChange={handleContentChange(setTitle)}
          className="text-2xl font-semibold"
          style={isEditing ? editableStyle : {}}
        />
        <ContentEditable
          html={desc}
          disabled={!isEditing}
          onChange={handleContentChange(setDesc)}
          className=""
          style={isEditing ? editableStyle : {}}
        />
      </div>
    </Link>
  );
}

export default CardBlog;
