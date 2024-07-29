import React from "react";

function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center bg-[#F7F7F7] dark:bg-gray-900 py-6 px-4 md:px-10 lg:px-40">
      <p className="text-gray-600 dark:text-gray-300 text-center md:text-left mb-2 md:mb-0">
        &copy; {currentYear} All Rights Reserved
      </p>
      <p className="text-gray-600 dark:text-gray-300 text-center md:text-right">
        Developed by{" "}
        <span className="text-primary-developer-template">@Showcase</span>
      </p>
    </footer>
  );
}

export default FooterSection;
