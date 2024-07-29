// import React, { useState } from 'react';
// import { IoIosSearch } from "react-icons/io";
// import { MdEmail } from "react-icons/md";
// import { SlArrowDown } from "react-icons/sl";
// import { BsFillCameraFill } from "react-icons/bs";


// function MainComponent() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedGender, setSelectedGender] = useState('');

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleSelect = (gender) => {
//     setSelectedGender(gender);
//     setShowDropdown(false);
//   };
//   return (
//     <div className="w-[90%] mx-auto p-6 bg-gray-100 shadow-md rounded-lg mt-10 ">
//       <div className="flex items-center space-x-6 mb-8">
//         <div className='bg-blue-200 rounded-full w-10 h-10 flex justify-center items-center'>
//         <BsFillCameraFill  className='absolute ml-[100px] mt-12 '/>
//         </div>
    
//         <img
//           className="w-24 h-24 rounded-full object-cover"
//           src="../public/profile/1.jpg"
//           alt="Profile"
//         />
      

        

//         <div>
//           <h2 className="text-2xl font-semibold text-gray-800">Alexa Rawles</h2>
//           <p className="text-gray-600">alexarawles@gmail.com</p>
//         </div>
//         <div className='bg-purple-700 w-28 h-10 rounded-lg text-center text-white absolute right-24 mt-2 '>
//         <button className='mt-2'>Save</button>
//       </div>
//       </div>
     
//       <form className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 ">First Name</label>
//           <input
//             type="text"
//             placeholder="Alexa"
//             className=" mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Last Name</label>
//           <input
//             type="text"
//             placeholder="Rawles"
//             className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <div className="relative">
//       <label className="block text-sm font-medium text-gray-700">Choose Your Gender</label>
//       <div className="relative mt-1">
//         <input
//           type="text"
//           placeholder="Your Gender"
//           value={selectedGender}
//           readOnly
//           className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         />
//         <SlArrowDown
//           className="absolute right-3 top-3 hover:bg-gray-100 rounded-full cursor-pointer"
//           onClick={toggleDropdown}
//         />
//       </div>
//       {showDropdown && (
//         <div className="absolute z-10 mt-1 ml-[450px] bg-white border border-gray-300 rounded-md shadow-lg">
//           <div
//             className="cursor-pointer px-4 py-2 hover:bg-gray-100 "
//             onClick={() => handleSelect('Male')}
//           >
//             Male
//           </div>
//           <div
//             className="cursor-pointer px-4 py-2 hover:bg-gray-100"
//             onClick={() => handleSelect('Female')}
//           >
//             Female
//           </div>
//         </div>
//       )}
//     </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Contact Number</label>
//           <input
//             type="text"
//             placeholder="Your Contact Number"
//             className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//       </form>
//       <section className='mt-20 '>
//         <b>My email address</b>
//         <div className='flex mt-5'>
//            <div class="bg-blue-200 rounded-full w-10 h-10 flex justify-center items-center ">
//           <MdEmail />
          
//         </div>
//         <p className='mt-2 ml-4'>alex@gamil.com</p>
//         </div>
       

//       </section>
//     </div>

//   );
// }

// export default MainComponent;
