import React from 'react';
import { HiOutlineTemplate, HiTemplate } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiMenuAltRight, BiMenuAltLeft } from 'react-icons/bi';
import { GoHome, GoHomeFill } from "react-icons/go";
import { motion } from 'framer-motion';

const SidebarComponent = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex lg:block lg-max:hidden">
      <motion.div
        className="h-screen bg-white dark:border-r dark:border-gray-700 dark:bg-gray-900 shadow-lg relative"
        initial={{ width: open ? '16rem' : '5rem' }}
        animate={{ width: open ? '16rem' : '5rem' }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute cursor-pointer right-5 top-5 w-6 transition-transform duration-300"
          onClick={() => setOpen(!open)}
          style={{
            left: open ? 'initial' : '50%',
            transform: open ? 'translateX(0)' : 'translateX(-50%)',
          }}
        >
          {open ? (
            <BiMenuAltLeft className="text-3xl text-gray-900 dark:text-gray-100" />
          ) : (
            <BiMenuAltRight className="text-3xl text-gray-900 dark:text-gray-100" />
          )}
        </div>
        <motion.div
          className="flex gap-x-4 items-end px-4 cursor-pointer"
          initial={{ opacity: open ? 1 : 0, scale: open ? 1 : 0 }}
          animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/')}
        >
          <motion.img
            src="/logoHomepage.png"
            className="w-7 mt-5 cursor-pointer"
            alt="logo"
            initial={{ opacity: open ? 1 : 0, scale: open ? 1 : 0 }}
            animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.h1
            className="text-gray-900 dark:text-gray-100 origin-left font-medium text-xl"
            initial={{ opacity: open ? 1 : 0, scale: open ? 1 : 0 }}
            animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Showcase
          </motion.h1>
        </motion.div>
        <div className="gap-3 mt-16 flex flex-col">
          <div
            className={`hover:bg-primary hover:bg-opacity-15 dark:hover:bg-gray-700 p-2 rounded-md flex items-center gap-2 cursor-pointer ${open ? 'justify-start mx-3' : 'justify-center mx-3'} ${location.pathname === '/dashboard' ? 'bg-primary bg-opacity-15 text-primary dark:bg-gray-700' : ''}`}
            onClick={() => navigate('/dashboard')}
          >
            {location.pathname === '/dashboard' ? (
              <GoHomeFill className="text-3xl text-primary dark:text-gray-100" />
            ) : (
              <GoHome className="text-3xl text-gray-900 dark:text-gray-100" />
            )}
            <p className={`${!open && 'hidden'} dark:text-gray-100`}>Home</p>
          </div>
          <div
            className={`hover:bg-primary hover:bg-opacity-15 dark:hover:bg-gray-700 p-2 rounded-md flex items-center gap-2 cursor-pointer ${open ? 'justify-start mx-3' : 'justify-center mx-3'} ${location.pathname === '/dashboard/template' ? 'bg-primary bg-opacity-15 text-primary dark:bg-gray-700' : ''}`}
            onClick={() => navigate('/dashboard/template')}
          >
            {location.pathname === '/dashboard/template' ? (
              <HiTemplate className="text-3xl text-primary dark:text-gray-100" />
            ) : (
              <HiOutlineTemplate className="text-3xl text-gray-900 dark:text-gray-100" />
            )}
            <p className={`${!open && 'hidden'} dark:text-gray-100`}>Template</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SidebarComponent;
