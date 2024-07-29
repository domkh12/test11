import React from "react";

function ButtonPrimary({ text }) {
  return (
    <div>
      <button className="bg-primary hover:bg-primary-hover px-16 rounded-md py-4 text-white font-sans">
        {text}
      </button>
    </div>
  );
}

export default ButtonPrimary;
