import React, { useState } from "react";

const CardDashboardTemplate = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <div className="max-w-[320px] bg-white rounded-md border border-solid border-gray-300">
        <div
          className="bg-slate-500 rounded-t-md relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="w-full h-64 object-cover rounded-t-md"
            src="https://i.pinimg.com/564x/77/51/18/775118e69c876a72db9e8dab8765be52.jpg"
            alt="Business Image"
          />

          <div
            className={`absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-t-md transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              type="button"
              className="text-white border bg-[rgb(76,61,227)] border-[rgb(76,61,227)] hover:bg-[rgb(60,56,164)] font-light rounded-md text-base px-5 py-1 text-center transition duration-[400ms]"
            >
              Preview
            </button>
          </div>
        </div>

        <div className="py-2 px-3 flex justify-between bg-gray-100 rounded-b-md">
          <h2 className="text-xl py-1 font-light">Business</h2>
          <button
            type="button"
            className="text-white bg-[rgb(76,61,227)] border-[rgb(76,61,227)] hover:bg-[rgb(60,56,164)] font-light rounded-md text-base px-5 py-[2px] text-center transition duration-[400ms]"
          >
            Select
          </button>
        </div>
      </div>

      <div className="max-w-[320px] bg-white rounded-md border border-solid border-gray-300">
        <div
          className="bg-slate-500 rounded-t-md relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="w-full h-64 object-cover rounded-t-md"
            src="https://i.pinimg.com/564x/77/51/18/775118e69c876a72db9e8dab8765be52.jpg"
            alt="Business Image"
          />

          <div
            className={`absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-t-md transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              type="button"
              className="text-white border bg-[rgb(76,61,227)] border-[rgb(76,61,227)] hover:bg-[rgb(60,56,164)] font-light rounded-md text-base px-5 py-1 text-center transition duration-[400ms]"
            >
              Preview
            </button>
          </div>
        </div>

        <div className="py-2 px-3 flex justify-between bg-gray-100 rounded-b-md">
          <h2 className="text-xl py-1 font-light">Business</h2>
          <button
            type="button"
            className="text-white bg-[rgb(76,61,227)] border-[rgb(76,61,227)] hover:bg-[rgb(60,56,164)] font-light rounded-md text-base px-5 py-[2px] text-center transition duration-[400ms]"
          >
            Select
          </button>
        </div>
      </div>

      <div className="max-w-[320px] bg-white rounded-md border border-solid border-gray-300">
        <div
          className="bg-slate-500 rounded-t-md relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="w-full h-64 object-cover rounded-t-md"
            src="https://i.pinimg.com/564x/77/51/18/775118e69c876a72db9e8dab8765be52.jpg"
            alt="Business Image"
          />

          <div
            className={`absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-t-md transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              type="button"
              className="text-white border bg-[rgb(76,61,227)] border-[rgb(76,61,227)] hover:bg-[rgb(60,56,164)] font-light rounded-md text-base px-5 py-1 text-center transition duration-[400ms]"
            >
              Preview
            </button>
          </div>
        </div>

        <div className="py-2 px-3 flex justify-between bg-gray-100 rounded-b-md">
          <h2 className="text-xl py-1 font-light">Business</h2>
          <button
            type="button"
            className="text-white bg-[rgb(76,61,227)] border-[rgb(76,61,227)] hover:bg-[rgb(60,56,164)] font-light rounded-md text-base px-5 py-[2px] text-center transition duration-[400ms]"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDashboardTemplate;
