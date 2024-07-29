import React, { useEffect, useState } from "react";
import SidebarComponent from "./SidebarComponent";
import Navbardashboard from "./Navbardashboard";
import { Outlet } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  const [open, setOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("isDarkMode") === "true"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      AOS.refresh();
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className={`flex h-auto overflow-hidden ${isDarkMode ? "dark" : ""}`}>
      <SidebarComponent open={open} setOpen={setOpen} />
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <Navbardashboard
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          setOpen={setOpen}
        />
        <main
          className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-10"
          data-aos="fade-up"
        >
          {loading ? (
            <div>
              <Skeleton variant="rectangular" width="100%" height={60} />
              <Skeleton variant="rectangular" width="100%" height="80vh" />
            </div>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
