// import React from 'react'
// import { NormalButton, SocialMediaButton } from './ButtonPrimary'
// const BgNone = "text-white border-white hover:bg-gray-200 hover:text-button-hover";
// import { FaFacebookF } from "react-icons/fa";
// import { BsInstagram } from "react-icons/bs";
// import { IoLogoYoutube } from "react-icons/io";
// import { GrLinkedinOption } from "react-icons/gr";

// function FooterComponent() {
//   return (
//     <div className='bg-marketing-main-color mt-32 text-center text-white py-16 flex flex-col gap-5'>
//       <p className='text-gray-300'>UP SKILL FOR A BETTER FUTURE</p>
//       <h2 className='text-3xl'>
//       Request More Information
//       </h2>
//       <small className='w-[]'>
//         Lift Media, LLC is a clinical stage healthcare company which is<br />developing a unique.
//       </small>
//       <div className='flex justify-center'>
//       <NormalButton buttonType={BgNone} text="Contact Us"/>
//       </div>
//       <small>@ 2019 Lift Media, LLC</small>
//       <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 mx-60"/>
//       <div className='mx-60 flex flex-row justify-between'>
//         <ul className='flex flex-row gap-5'>
//             <a href="" class="hover:text-button-hover">Team</a>
//             <a href="" class="hover:text-button-hover">Case Studies</a>
//             <a href="" class="hover:text-button-hover">Publications</a>
//         </ul>
//         <ul className='flex flex-row gap-5'>
//             <SocialMediaButton link={<GrLinkedinOption />}/>
//             <SocialMediaButton link={<FaFacebookF />}/>
//             <SocialMediaButton link={<BsInstagram />}/>
//             <SocialMediaButton link={<IoLogoYoutube />}/>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default FooterComponent

import React from 'react';
import { NormalButton, SocialMediaButton } from './ButtonPrimary';
const BgNone = "text-white border-white hover:bg-gray-200 hover:text-button-hover";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
import { motion } from 'framer-motion';

function FooterComponent() {
  return (
    <motion.div 
    className='bg-marketing-main-color mt-32 text-center text-white py-16 flex flex-col gap-5'
    initial={{y: 50, opacity:0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 1}}
    >
      <p className='text-gray-300'>UP SKILL FOR A BETTER FUTURE</p>
      <h2 className='text-3xl'>
        Request More Information
      </h2>
      <small className='w-full'>
        Lift Media, LLC is a clinical stage healthcare company which is<br />developing a unique.
      </small>
      <a className='flex justify-center' href='/marketing-about'>
        <NormalButton buttonType={BgNone} text="Contact Us"/>
      </a>
      <small>@ 2019 Lift Media, LLC</small>
      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 mx-auto w-4/5"/>
      <div 
      className='mx-auto w-full md:w-4/5 flex flex-col md:flex-row justify-between'>
        <motion.ul className='flex flex-col md:flex-row gap-5'
        initial={{x: -50, opacity:0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 1}}
        >
          <li><a href="" className="hover:text-button-hover">Team</a></li>
          <li><a href="" className="hover:text-button-hover">Case Studies</a></li>
          <li><a href="" className="hover:text-button-hover">Publications</a></li>
        </motion.ul>
        <motion.ul 
        className='flex flex-row gap-5 mt-5 md:mt-0 justify-center'
        initial={{x: 50, opacity:0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 1}}
        >
          <li><SocialMediaButton link={<GrLinkedinOption />}/></li>
          <li><SocialMediaButton link={<FaFacebookF />}/></li>
          <li><SocialMediaButton link={<BsInstagram />}/></li>
          <li><SocialMediaButton link={<IoLogoYoutube />}/></li>
        </motion.ul>
      </div>
    </motion.div>
  )
}

export default FooterComponent;
