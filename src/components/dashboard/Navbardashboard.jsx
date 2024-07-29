import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLogout, MdDarkMode } from "react-icons/md";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, logout } from "../../redux/feature/user/UserSlice";
import { BiMenu } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { GoHome, GoHomeFill } from "react-icons/go";
import { HiOutlineTemplate, HiTemplate } from "react-icons/hi";

const Navbardashboard = ({ isDarkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const profile = useSelector((state) => state.user.profile);

  useEffect(() => {
    if (!profile) {
      dispatch(fetchProfile());
    }
  }, [dispatch, profile]);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsSidebarOpen(false); // Close sidebar after navigation
  };

  const getNavText = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Home";
      case "/dashboard/template":
        return "Template";
      case "/dashboard/profile":
        return "Profile";
      default:
        return "Showcase";
    }
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div>
      <Navbar
        fluid
        className="bg-white dark:bg-gray-900 dark:border-b dark:border-gray-700"
      >
        <div className="flex px-6 justify-between items-center w-full">
          <button className="lg:hidden text-3xl" onClick={toggleSidebar}>
            <BiMenu className="text-gray-900 dark:text-gray-100" />
          </button>
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-gray-100">
              {getNavText()}
            </span>
          </Navbar.Brand>
          <div className="flex items-center md:order-2">
            <motion.button
              onClick={() => {
                toggleDarkMode();
                document.documentElement.classList.toggle("dark", !isDarkMode);
              }}
              className="px-4 py-2 cursor-pointer text-gray-900 dark:text-gray-100 md:rounded"
              whileTap={{ scale: 0.9, rotate: 90 }}
            >
              {isDarkMode ? (
                <FaSun className="w-7 h-7" />
              ) : (
                <MdDarkMode className="w-7 h-7" />
              )}
            </motion.button>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img={
                    profile?.avatar ||
                    "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                  }
                  rounded
                  className="avatar-custom"
                />
              }
            >
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={dropdownVariants}
              >
                <Dropdown.Item
                  className="px-7 py-3 text-lg flex justify-start items-center gap-4 hover:text-primary dark:hover:text-primary-light"
                  onClick={() => handleNavigation("/dashboard/profile")}
                >
                  <FaRegUserCircle />
                  Settings
                </Dropdown.Item>
                <Dropdown.Item
                  className="px-7 py-3 text-lg flex justify-start items-center gap-2 hover:text-red-600 dark:hover:text-red-400"
                  onClick={handleLogout}
                >
                  <MdOutlineLogout className="mr-2" />
                  Logout
                </Dropdown.Item>
              </motion.div>
            </Dropdown>
          </div>
        </div>
      </Navbar>
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 lg:hidden"
              onClick={toggleSidebar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <motion.div
              className="fixed inset-y-0 left-0 bg-white dark:bg-gray-900 w-64 p-4 z-50 lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                onClick={toggleSidebar}
                className="text-gray-900 dark:text-gray-100 text-3xl mb-6"
              >
                <BiMenu />
              </button>
              <nav>
                <div className="gap-3 mt-16 flex flex-col">
                  <div
                    className={`hover:bg-primary hover:bg-opacity-15 dark:hover:bg-gray-700 p-2 rounded-md flex items-center gap-2 cursor-pointer ${
                      location.pathname === "/dashboard"
                        ? "bg-primary bg-opacity-15 text-primary dark:bg-gray-700"
                        : ""
                    }`}
                    onClick={() => handleNavigation("/dashboard")}
                  >
                    {location.pathname === "/dashboard" ? (
                      <GoHomeFill className="text-3xl text-primary dark:text-gray-100" />
                    ) : (
                      <GoHome className="text-3xl text-gray-900 dark:text-gray-100" />
                    )}
                    <p className="dark:text-gray-100">Home</p>
                  </div>
                  <div
                    className={`hover:bg-primary hover:bg-opacity-15 dark:hover:bg-gray-700 p-2 rounded-md flex items-center gap-2 cursor-pointer ${
                      location.pathname === "/dashboard/template"
                        ? "bg-primary bg-opacity-15 text-primary dark:bg-gray-700"
                        : ""
                    }`}
                    onClick={() => handleNavigation("/dashboard/template")}
                  >
                    {location.pathname === "/dashboard/template" ? (
                      <HiTemplate className="text-3xl text-primary dark:text-gray-100" />
                    ) : (
                      <HiOutlineTemplate className="text-3xl text-gray-900 dark:text-gray-100" />
                    )}
                    <p className="dark:text-gray-100">Template</p>
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbardashboard;
