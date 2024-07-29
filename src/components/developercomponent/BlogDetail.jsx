import React from "react";
import { IoIosClose } from "react-icons/io";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BlogDetail() {
  const navigate = useNavigate();

  return (
    <section className="max-w-4xl mx-auto p-4 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex justify-end">
        <button onClick={() => navigate(-1)} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          <IoIosClose size={50} />
        </button>
      </div>
      <img className="w-full h-auto rounded-lg mb-4" src="assets/developerimage/details.png" alt="Blog Detail" />
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Featured - Design App Design Development
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Creating an app design involves several important steps. First, designers plan how the app will look and feel.
        They choose colors, fonts, and images that make the app attractive and easy to use. This process is called the
        design phase. <br />
        <br />
        Next, developers turn the design into a working app. They write the code that makes the app function. This step
        is called development. Developers make sure the app runs smoothly and does everything it is supposed to do. <br />
        <br />
        Finally, the app is tested to find and fix any problems. This is called the testing phase. Once testing is
        complete, the app is ready for users to download and enjoy. The entire process of designing and developing an
        app ensures that it is both beautiful and functional.
      </p>
      <div className="flex justify-center gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          <FaFacebook size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          <FaGithub size={24} />
        </a>
      </div>
    </section>
  );
}

export default BlogDetail;
