// import React from "react"
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";
// import { FaYoutube } from "react-icons/fa";
// export default function FooterComponent(){
//     return(
//       <div className="font-sans antialiased text-gray-800 ">
//         <footer className="bg-yellow-600 text-white p-20 mt-0 dark:bg-gray-800  ">
//           <div className="max-w-4xl mx-auto flex justify-between items-center">
//           <p className="text-sm">© 2024 Lift Media. All rights reserved.</p>
//           <div className=" flex space-x-4 ">
//             <a href="#" className="hover:text-gray-300"><i className="fa-brands fa-facebook"></i><FaFacebook className='w-[30px]'/></a>
//             <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i><FaTwitter /></a>
//             <a href="#" className="hover:text-gray-300"><i className="fab fa-envelope"></i><IoMdMail /></a>
//             <a href="#" className="hover:text-gray-300"><i className="fab fa-youtube"></i><FaYoutube /></a>
//           </div>
//           </div>
//         </footer>
//       </div>

//     );
// }
import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function FooterComponent() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <footer className="bg-yellow-600 text-white p-6 sm:p-10 md:p-20 mt-0 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-sm mb-4 md:mb-0">© 2024 Lift Media. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <FaFacebook className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <IoMdMail className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
