import React from 'react';
import { FaMoon, FaSun, FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { MdDarkMode } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Navbardashboard = ({ isDarkMode, toggleDarkMode, setActiveComponent }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here, e.g., clearing auth tokens
    navigate('/logout');
  };

  return (
    <Navbar fluid rounded className="bg-white dark:bg-gray-800 border-b-2 dark:border-gray-700">
      <div className="flex justify-center items-center md:order-2 pr-10">
        <button onClick={toggleDarkMode} className="mr-5 text-3xl cursor-pointer">
          {isDarkMode ? <FaSun className="text-gray-100" /> : <MdDarkMode className="text-gray-900" />}
        </button>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Item className="px-7 py-3 text-lg flex justify-start items-center gap-4 hover:text-primary dark:hover:text-primary-light" onClick={() => navigate('/dashboard/profile')}>
            <FaRegUserCircle />
            Edit Profile
          </Dropdown.Item>
          <Dropdown.Item className="px-7 py-3 text-lg flex justify-start items-center gap-2 hover:text-red-600 dark:hover:text-red-400" onClick={handleLogout}>
            <MdOutlineLogout className="mr-2" />
            Logout
          </Dropdown.Item>
        </Dropdown>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" className="text-2xl font-semibold ml-10 text-gray-900 dark:text-gray-100" onClick={() => navigate('/dashboard')}>
          Home
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbardashboard;
