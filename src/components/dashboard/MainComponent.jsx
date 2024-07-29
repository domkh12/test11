import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import TemplateList from "../../redux/feature/websitetemplate/TemplateList";

function MainComponent() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    alert(`Searching for: ${searchValue}`);
  };

  return (
    <div className="mt-5 ml-2 mr-3">
      <div className="relative px-9 py-12 text-white bg-blue-700 rounded-xl">
        <h1 className="text-3xl">WELCOME TO SHOWCASE!</h1>
        <p className="mt-2">Build your portfolio here,</p>
        <div className="absolute top-0 right-24">
          <img
            src="/dashboardImg/Rectangle 150.png"
            className="w-40"
            alt="Decorative"
          />
        </div>
      </div>
      <h3 className="mt-5 mb-6">Your Design</h3>
      <div>
        <ul className="flex justify-center items-center">
          <li className="bg-purple-600 px-6 py-1 text-white rounded-md mr-4 hover:bg-purple-800">
            All
          </li>
          <li className="border-solid border-2 border-purple-600 px-6 py-1 rounded-md mr-4 hover:bg-purple-600 hover:text-white">
            Developer
          </li>
          <li className="border-solid border-2 border-purple-600 px-6 py-1 rounded-md mr-4 hover:bg-purple-600 hover:text-white">
            Marketing
          </li>
          <li className="border-solid border-2 border-purple-600 px-6 py-1 rounded-md mr-4 hover:bg-purple-600 hover:text-white">
            Photography
          </li>
          <li className="border-solid border-2 border-purple-600 px-6 py-1 rounded-md mr-4 hover:bg-purple-600 hover:text-white">
            Business
          </li>
          <li className="flex items-center px-4 py-1 rounded-md mr-4 ml-64">
            <IoIosSearch className="relative left-6" />
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search Template"
              className="px-6 py-1 rounded-md noneoutline-"
            />
          </li>
        </ul>
      </div>
      <TemplateList />
    </div>
  );
}

export default MainComponent;
